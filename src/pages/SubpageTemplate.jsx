import { motion, useReducedMotion } from 'framer-motion';
import CtaStrip from '../components/sections/CtaStrip';
import PageHero from '../components/primitives/PageHero';
import SectionHeading from '../components/primitives/SectionHeading';
import usePageSeo from '../hooks/usePageSeo';
import { makeFadeUp, makeStagger } from '../utils/motion';

function SubpageTemplate({ config }) {
  const reduceMotion = useReducedMotion();
  const fadeUp = makeFadeUp(reduceMotion);
  const stagger = makeStagger(0.12, 0, reduceMotion);

  usePageSeo(config.seo);

  return (
    <>
      <PageHero hero={config.hero} />

      <section className="section-pad">
        <div className="container-luxe grid gap-8 lg:grid-cols-[1.03fr_0.97fr] lg:items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="section-shell text-left">
            <p className="section-label">Signature Focus</p>
            <h2 className="mt-4 font-serif text-[36px] leading-[1.04] text-inkStrong sm:text-[48px]">{config.focus.title}</h2>
            <p className="mt-5 max-w-xl text-[14px] leading-[1.8] text-inkSoft">{config.focus.copy}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="droplet-corner overflow-hidden border border-strokeSoft/70 bg-white/62 shadow-glass"
          >
            <img src={config.focus.image} alt={config.focus.title} className="h-[430px] w-full object-cover" loading="lazy" />
          </motion.div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe">
          <div className="section-shell">
            <SectionHeading
              label="Details"
              title={config.details.title}
              subtitle="A polished execution framework that preserves aesthetics and guest comfort throughout the celebration."
            />
            <motion.div
              className="mt-10 grid gap-4 sm:grid-cols-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              {config.details.items.map((item) => (
                <motion.div key={item} variants={fadeUp} className="droplet-corner border border-strokeSoft/70 bg-white/64 px-6 py-5 text-[14px] leading-[1.7] text-inkSoft shadow-glass">
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe">
          <SectionHeading label="Highlights" title={config.metrics.title} subtitle="Core standards behind every premium experience at Veloura Estate." shell="glass" />
          <motion.div
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {config.metrics.items.map((metric) => (
              <motion.article key={metric.value + metric.label} variants={fadeUp} className="droplet-corner border border-strokeSoft/70 bg-white/64 p-6 shadow-glass">
                <p className="font-serif text-[44px] leading-none text-gold">{metric.value}</p>
                <p className="mt-3 text-[12px] uppercase tracking-[0.2em] text-inkSoft">{metric.label}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <CtaStrip title={config.cta.title} subtitle={config.cta.subtitle} buttonText="Book A Tour" buttonHref="/contact-us" />
    </>
  );
}

export default SubpageTemplate;
