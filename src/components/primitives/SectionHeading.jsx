import { motion, useReducedMotion } from 'framer-motion';
import { makeFadeUp } from '../../utils/motion';

function SectionHeading({
  label,
  title,
  subtitle,
  center = true,
  className = '',
  shell = 'none',
  eyebrowTone = 'muted',
}) {
  const reduceMotion = useReducedMotion();
  const fadeUp = makeFadeUp(reduceMotion);

  const eyebrowClass = eyebrowTone === 'accent' ? 'text-gold' : 'text-inkSoft/75';
  const shellClass = shell === 'glass' ? 'section-shell' : '';

  return (
    <motion.div
      className={`${center ? 'mx-auto text-center' : 'text-left'} max-w-3xl ${shellClass} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.28 }}
      variants={fadeUp}
    >
      {label ? <p className={`section-label ${eyebrowClass}`}>{label}</p> : null}
      <h2 className="mt-4 font-serif text-[34px] leading-[1.04] text-inkStrong sm:text-[48px]">{title}</h2>
      {subtitle ? <p className="mt-4 text-[14px] leading-[1.8] text-inkSoft sm:text-[15px]">{subtitle}</p> : null}
    </motion.div>
  );
}

export default SectionHeading;
