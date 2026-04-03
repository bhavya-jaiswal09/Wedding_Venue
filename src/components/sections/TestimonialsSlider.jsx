import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

function TestimonialsSlider({ items }) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [items.length]);

  const previous = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <div className="relative mx-auto mt-10 max-w-5xl px-12 sm:px-20">
      <button
        onClick={previous}
        aria-label="Previous testimonial"
        className="liquid-chip absolute left-0 top-1/2 min-h-11 min-w-11 -translate-y-1/2 !p-0"
      >
        <ArrowLeft strokeWidth={1.5} size={20} />
      </button>

      <button
        onClick={next}
        aria-label="Next testimonial"
        className="liquid-chip absolute right-0 top-1/2 min-h-11 min-w-11 -translate-y-1/2 !p-0"
      >
        <ArrowRight strokeWidth={1.5} size={20} />
      </button>

      <div className="relative min-h-[280px] border-y border-strokeSoft/40 px-6 py-9 text-center sm:px-12 sm:py-12">
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-24 bg-gradient-to-b from-white/40 to-transparent" />
        <AnimatePresence mode="wait">
          <motion.div
            key={items[index].author}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, transition: { duration: 0.45, ease: 'easeOut' } }}
            className="relative z-10"
          >
            <p className="font-serif text-[25px] italic leading-[1.45] text-inkStrong sm:text-[34px]">"{items[index].quote}"</p>
            <p className="mt-8 text-[12px] uppercase tracking-[0.23em] text-gold">{items[index].author}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default TestimonialsSlider;
