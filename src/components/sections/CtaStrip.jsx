import { motion, useReducedMotion } from 'framer-motion';
import CTAButton from '../primitives/CTAButton';
import { makeFadeUp } from '../../utils/motion';

function CtaStrip({ title, subtitle, buttonText = 'Book A Tour', buttonHref = '/contact-us' }) {
  const reduceMotion = useReducedMotion();
  const fadeUp = makeFadeUp(reduceMotion);

  return (
    <motion.section
      className="section-pad"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <div className="container-luxe">
        <div className="relative overflow-hidden border-y border-strokeSoft/40 py-14">
          <div className="pointer-events-none absolute left-[20%] top-0 h-44 w-44 -translate-y-1/2 rounded-full bg-white/55 blur-2xl" />
          <div className="pointer-events-none absolute -right-10 bottom-0 h-48 w-48 translate-y-1/3 rounded-full bg-gold/10 blur-2xl" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.15fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="section-label">Private Request</p>
              <h2 className="mt-4 font-serif text-[32px] leading-[1.05] text-inkStrong sm:text-[44px]">{title}</h2>
              <p className="mt-4 max-w-2xl text-[14px] leading-[1.8] text-inkSoft">{subtitle}</p>
            </div>

            <CTAButton to={buttonHref} tone="primary" size="lg" className="w-fit">
              {buttonText}
            </CTAButton>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default CtaStrip;
