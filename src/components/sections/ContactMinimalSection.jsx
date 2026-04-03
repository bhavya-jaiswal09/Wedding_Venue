import { useEffect, useRef, useState } from 'react';

const initialForm = {
  fullName: '',
  phone: '',
  message: '',
};

const fieldClass =
  'w-full border-0 border-b border-strokeSoft/85 bg-transparent px-0 pb-2 pt-1 text-[14px] text-inkStrong placeholder:text-inkSoft/80 focus:border-gold focus:outline-none';

const tickerMessage =
  'From garden vows to grand receptions, Veloura Estate crafts wedding celebrations filled with grace, warmth, and timeless beauty.';

const showcaseCards = [
  { image: '/images/highlight-garden.jpg', title: 'Garden Ceremony', frame: 'frame-semi-arch' },
  { image: '/images/gallery-01.jpg', title: 'Elegant Couple Portraits', frame: 'frame-square' },
  { image: '/images/highlight-indoor.jpg', title: 'Reception Styling', frame: 'frame-circle' },
  { image: '/images/gallery-03.jpg', title: 'Signature Bridal Moments', frame: 'frame-rounded' },
  { image: '/images/gallery-05.jpg', title: 'Cake & Champagne Celebrations', frame: 'frame-circle' },
  { image: '/images/gallery-06.jpg', title: 'Refined Groom Details', frame: 'frame-semi-arch' },
];

const carouselResetIndex = showcaseCards.length;
const carouselItems = [...showcaseCards, ...showcaseCards, ...showcaseCards];
const carouselMaxOffset = carouselResetIndex * 2;
const cardIntervalMs = 3200;
const cardSlideMs = 520;

function ContactMinimalSection({ className = '', sectionId, formId }) {
  const [formData, setFormData] = useState(initialForm);
  const [activeCardOffset, setActiveCardOffset] = useState(carouselResetIndex);
  const [hasCardTransition, setHasCardTransition] = useState(true);
  const [cardMetrics, setCardMetrics] = useState({ width: 140, gap: 10 });
  const carouselViewportRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData(initialForm);
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setHasCardTransition(true);
      setActiveCardOffset((prev) => prev + 1);
    }, cardIntervalMs);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const viewport = carouselViewportRef.current;
    if (!viewport) {
      return undefined;
    }

    const updateMetrics = () => {
      const styles = window.getComputedStyle(viewport);
      const horizontalPadding = Number.parseFloat(styles.paddingLeft) + Number.parseFloat(styles.paddingRight);
      const viewportWidth = Math.max(0, viewport.clientWidth - horizontalPadding);
      let visibleCards = 3;

      if (viewportWidth >= 1080) {
        visibleCards = 6;
      } else if (viewportWidth >= 900) {
        visibleCards = 5;
      } else if (viewportWidth >= 680) {
        visibleCards = 4;
      }

      const baseGap = Math.floor(Math.max(10, Math.min(14, viewportWidth * 0.01)));
      const baseWidth = Math.floor((viewportWidth - baseGap * (visibleCards - 1)) / visibleCards);
      const width = Math.floor(baseWidth * 1.01);
      const gap = Math.max(6, (viewportWidth - width * visibleCards) / (visibleCards - 1));

      setCardMetrics({ width, gap });
    };

    updateMetrics();

    if (typeof ResizeObserver !== 'undefined') {
      const observer = new ResizeObserver(updateMetrics);
      observer.observe(viewport);
      return () => observer.disconnect();
    }

    window.addEventListener('resize', updateMetrics);
    return () => window.removeEventListener('resize', updateMetrics);
  }, []);

  useEffect(() => {
    if (activeCardOffset < carouselMaxOffset) {
      return undefined;
    }

    const resetId = window.setTimeout(() => {
      setHasCardTransition(false);
      setActiveCardOffset(carouselResetIndex);
    }, cardSlideMs);

    const transitionId = window.setTimeout(() => {
      setHasCardTransition(true);
    }, cardSlideMs + 40);

    return () => {
      window.clearTimeout(resetId);
      window.clearTimeout(transitionId);
    };
  }, [activeCardOffset]);

  return (
    <section id={sectionId} className={`bg-bgBase py-10 md:py-12 ${className}`}>
      <div className="venue-top-ticker venue-top-ticker--full">
        <div className="venue-top-ticker__track" aria-label="Wedding venue highlight message">
          <span>{tickerMessage}</span>
          <span aria-hidden="true">{tickerMessage}</span>
        </div>
      </div>

      <div className="venue-edge-bleed">
        <div
          className="venue-card-carousel mt-0 px-5 sm:px-1 lg:px-2"
          ref={carouselViewportRef}
          style={{ '--venue-card-width': `${cardMetrics.width}px`, '--venue-card-gap': `${cardMetrics.gap}px` }}
        >
          <div
            className="venue-card-carousel__track"
            style={{
              transform: `translate3d(-${activeCardOffset * (cardMetrics.width + cardMetrics.gap)}px, 0, 0)`,
              transitionDuration: hasCardTransition ? `${cardSlideMs}ms` : '0ms',
            }}
          >
            {carouselItems.map((card, index) => (
              <article
                key={`${card.title}-${index}`}
                className={`venue-card-carousel__item ${card.frame} ${index % 2 === 0 ? 'frame-zig-up' : 'frame-zig-down'}`}
              >
                <img src={card.image} alt={card.title} className="h-full w-full object-cover" loading="lazy" />
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-[8.25rem] w-full max-w-[1090px] px-5 md:mt-[9.9rem] md:px-7 lg:mt-[11.55rem] lg:px-10">
        <div className="grid items-start gap-y-10 lg:grid-cols-[1fr_1.12fr] lg:gap-x-48 lg:gap-y-0">
          <div className="max-w-[464px] lg:pt-2">
            <h2 className="font-sans text-[34px] font-medium uppercase tracking-[0.05em] text-inkStrong sm:text-[41px]">Contact Us</h2>

            <form id={formId} className="mt-8 space-y-7" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className={fieldClass}
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className={fieldClass}
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className={`${fieldClass} min-h-[88px] resize-none`}
              />

              <button
                type="submit"
                className="inline-flex h-11 min-w-[206px] items-center justify-center rounded-sm border border-gold px-7 text-[12px] font-semibold uppercase tracking-[0.14em] text-gold transition-colors duration-300 hover:bg-gold/8"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="relative h-[312px] overflow-hidden rounded-[1.2rem] border border-strokeSoft/65 bg-bgMist/70 lg:h-[494px]">
            <iframe
              title="Veloura Estate location map"
              src="https://www.google.com/maps?output=embed&ll=40.7128,-74.0060&z=9&hl=en"
              className="h-full w-full grayscale saturate-0 contrast-90 brightness-105"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMinimalSection;
