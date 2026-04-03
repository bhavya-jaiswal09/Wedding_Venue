import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import CTAButton from './CTAButton';
import { makeFadeUp, makeStagger } from '../../utils/motion';

function PageHero({ hero, isHome = false, showGlassStats = isHome }) {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, isHome && !reduceMotion ? 95 : 0]);
  const fadeUp = makeFadeUp(reduceMotion);
  const stagger = makeStagger(0.12, 0.06, reduceMotion);

  return (
    <section className={`relative overflow-hidden ${isHome ? 'min-h-screen' : 'min-h-[68vh]'}`}>
      <motion.div className="absolute inset-0" style={{ y: parallaxY }}>
        <img
          src={hero.image}
          alt={hero.title}
          className={`h-full w-full object-cover ${isHome ? 'lg:scale-[1.18] lg:object-[78%_center]' : ''}`}
          loading={isHome ? 'eager' : 'lazy'}
          fetchPriority={isHome ? 'high' : 'auto'}
        />
      </motion.div>

      <div className={`absolute inset-0 ${hero.overlayClass ?? 'bg-black/46'}`} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/36 via-black/22 to-black/62" />

      <motion.div
        className="container-luxe relative z-10 flex min-h-[inherit] items-center justify-center py-24 text-center"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <div className={`max-w-4xl text-white ${isHome ? 'lg:ml-[33vw] xl:ml-[28vw]' : ''}`}>
          <motion.p variants={fadeUp} className="section-label !text-white/78">
            {hero.label}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className={`mt-5 font-serif leading-[0.94] tracking-[0.02em] [text-shadow:0_5px_22px_rgba(0,0,0,0.32)] ${
              isHome ? 'text-[40px] sm:text-[56px] md:text-[68px] lg:text-[80px]' : 'text-[34px] sm:text-[46px] md:text-[56px]'
            }`}
          >
            {hero.title}
          </motion.h1>

          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-[14px] leading-[1.85] text-white/88 md:text-[15px]">
            {hero.subtitle}
          </motion.p>

          {hero.cta ? (
            <motion.div variants={fadeUp} className="mt-10 flex justify-center">
              <CTAButton to={hero.cta.href} tone="frosted" size="lg" className="text-white border-white/55 bg-white/18 hover:bg-white/30 hover:text-white">
                {hero.cta.text}
              </CTAButton>
            </motion.div>
          ) : null}
        </div>
      </motion.div>

      {showGlassStats ? (
        <motion.div
          className="pointer-events-none absolute inset-x-0 bottom-7 z-10"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="container-luxe">
            <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-3 rounded-full border border-white/38 bg-white/16 px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-white/86 backdrop-blur-lg md:gap-6 md:px-8">
              <span>Private Tours</span>
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              <span>Curated Menus</span>
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              <span>Ceremony + Reception</span>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </section>
  );
}

export default PageHero;
