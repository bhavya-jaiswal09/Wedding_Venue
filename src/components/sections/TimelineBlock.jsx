import { motion, useReducedMotion } from 'framer-motion';
import { makeFadeUp, makeStagger } from '../../utils/motion';

function TimelineBlock({ items }) {
  const reduceMotion = useReducedMotion();
  const fadeUp = makeFadeUp(reduceMotion);
  const stagger = makeStagger(0.1, 0.03, reduceMotion);

  return (
    <motion.div
      className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      {items.map((item, idx) => (
        <motion.article
          key={item.title}
          variants={fadeUp}
          className="relative border-l border-strokeSoft/55 pl-5 pr-2"
        >
          <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-gold/75" />
          <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Step {idx + 1}</p>
          <h3 className="mt-3 font-serif text-[26px] leading-none text-inkStrong">{item.title}</h3>
          <p className="mt-2.5 text-[14px] leading-[1.72] text-inkSoft">{item.copy}</p>
        </motion.article>
      ))}
    </motion.div>
  );
}

export default TimelineBlock;
