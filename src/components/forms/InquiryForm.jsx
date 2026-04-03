import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import CTAButton from '../primitives/CTAButton';
import { makeFadeUp } from '../../utils/motion';

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  eventDate: '',
  guestCount: '',
  message: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[0-9()\-\s]{7,}$/;

function InquiryForm({ id = 'inquiry-form' }) {
  const reduceMotion = useReducedMotion();
  const fadeUp = makeFadeUp(reduceMotion);

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fieldDefs = useMemo(
    () => [
      { key: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
      { key: 'email', label: 'Email', type: 'email', placeholder: 'name@email.com' },
      { key: 'phone', label: 'Phone', type: 'tel', placeholder: '+1 (000) 000-0000' },
      { key: 'eventDate', label: 'Event Date', type: 'date', placeholder: '' },
      { key: 'guestCount', label: 'Guest Count', type: 'number', placeholder: '120', min: 1 },
    ],
    [],
  );

  const validate = () => {
    const nextErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter at least 2 characters.';
    }

    if (!emailPattern.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!phonePattern.test(formData.phone.trim())) {
      nextErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.eventDate) {
      nextErrors.eventDate = 'Please select an event date.';
    }

    if (!formData.guestCount || Number(formData.guestCount) < 1) {
      nextErrors.guestCount = 'Guest count must be at least 1.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 20) {
      nextErrors.message = 'Please write at least 20 characters.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
      setIsSubmitted(false);
      return;
    }

    setIsSubmitted(true);
    setErrors({});
    setFormData(initialState);
  };

  return (
    <motion.form
      id={id}
      className="glass-panel-strong mx-auto mt-12 grid max-w-4xl gap-7 p-6 md:grid-cols-2 md:p-9"
      onSubmit={handleSubmit}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      noValidate
    >
      {fieldDefs.map((field) => (
        <label key={field.key} className="text-left text-sm text-inkSoft">
          <span className="mb-3 block text-[12px] uppercase tracking-[0.16em] text-inkSoft/75">{field.label}</span>
          <input
            className="input-line"
            type={field.type}
            name={field.key}
            value={formData[field.key]}
            onChange={handleChange}
            placeholder={field.placeholder}
            min={field.min}
            aria-invalid={errors[field.key] ? 'true' : 'false'}
            aria-describedby={errors[field.key] ? `${field.key}-error` : undefined}
          />
          {errors[field.key] ? (
            <span id={`${field.key}-error`} className="mt-2 block text-xs text-[#9a4f3c]">
              {errors[field.key]}
            </span>
          ) : null}
        </label>
      ))}

      <label className="text-left text-sm text-inkSoft md:col-span-2">
        <span className="mb-3 block text-[12px] uppercase tracking-[0.16em] text-inkSoft/75">Message</span>
        <textarea
          className="input-line min-h-32 resize-none"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us your atmosphere, cuisine, and guest experience vision."
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message ? (
          <span id="message-error" className="mt-2 block text-xs text-[#9a4f3c]">
            {errors.message}
          </span>
        ) : null}
      </label>

      <div className="md:col-span-2 flex flex-wrap items-center justify-center gap-4">
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-gold bg-gold px-10 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-white shadow-[0_10px_26px_rgba(176,141,109,0.22)] transition-all duration-300 ease-luxe hover:border-goldDeep hover:bg-goldDeep"
        >
          Send Message
        </button>

        <CTAButton to="/venue" tone="ghost" size="md">
          Explore Venue Spaces
        </CTAButton>
      </div>

      {isSubmitted ? (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }}
          className="md:col-span-2 text-center text-[13px] uppercase tracking-[0.18em] text-gold"
        >
          Inquiry sent. Our concierge team will contact you shortly.
        </motion.p>
      ) : null}
    </motion.form>
  );
}

export default InquiryForm;
