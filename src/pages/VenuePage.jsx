import { Check } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import PageHero from '../components/primitives/PageHero';
import SectionHeading from '../components/primitives/SectionHeading';
import ImageCard from '../components/primitives/ImageCard';
import CtaStrip from '../components/sections/CtaStrip';
import usePageSeo from '../hooks/usePageSeo';
import { pageConfigs } from '../data/pageConfigs';
import { makeFadeUp, makeStagger } from '../utils/motion';

function VenuePage() {
  const config = pageConfigs.venue;
  const reduceMotion = useReducedMotion();
  const fadeUp = makeFadeUp(reduceMotion);
  const stagger = makeStagger(0.1, 0, reduceMotion);

  const masterGrid = config.sections.find((section) => section.type === 'masterGrid');
  const amenities = config.sections.find((section) => section.type === 'amenities');
  const capacity = config.sections.find((section) => section.type === 'capacity');
  const flow = config.sections.find((section) => section.type === 'flow');
  const miniGallery = config.sections.find((section) => section.type === 'miniGallery');
  const cta = config.sections.find((section) => section.type === 'cta');

  usePageSeo(config.seo);

  return (
    <>
      <PageHero hero={config.hero} />

      <section className="section-pad">
        <div className="container-luxe">
          <SectionHeading
            label="Spaces"
            title={masterGrid.title}
            subtitle="A versatile venue collection designed for ceremony to celebration transitions."
            shell="glass"
          />

          <motion.div
            className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            {masterGrid.items.map((item) => (
              <ImageCard key={item.title} item={item} aspect="h-[430px]" />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="section-shell text-left">
            <p className="section-label">Amenities</p>
            <h2 className="mt-4 font-serif text-[36px] leading-[1.03] text-inkStrong sm:text-[48px]">{amenities.title}</h2>
            <p className="mt-5 max-w-xl text-[14px] leading-[1.8] text-inkSoft">
              Every venue zone is supported by operational comfort and hospitality infrastructure.
            </p>
          </motion.div>

          <motion.ul
            className="grid gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {amenities.items.map((item) => (
              <motion.li key={item} variants={fadeUp} className="droplet-corner flex items-start gap-3 border border-strokeSoft/70 bg-white/64 px-5 py-4 text-[14px] text-inkSoft shadow-glass">
                <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full border border-gold/45 bg-white/68">
                  <Check className="h-3.5 w-3.5 text-gold" strokeWidth={2.4} />
                </span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="droplet-corner overflow-hidden border border-strokeSoft/70 bg-white/56 shadow-glass">
            <img src={masterGrid.items[0].image} alt="Venue capacity" className="h-[430px] w-full object-cover" loading="lazy" />
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="section-shell text-left">
            <p className="section-label">Capacity</p>
            <h2 className="mt-4 font-serif text-[36px] leading-[1.03] text-inkStrong sm:text-[48px]">{capacity.title}</h2>
            <p className="mt-5 max-w-xl text-[14px] leading-[1.8] text-inkSoft">{capacity.copy}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe">
          <SectionHeading label="Guest Journey" title={flow.title} subtitle="A seamless celebration flow from welcome to afterparty." />
          <motion.div
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {flow.items.map((step, idx) => (
              <motion.div key={step} variants={fadeUp} className="droplet-corner border border-strokeSoft/70 bg-white/62 px-4 py-6 text-center shadow-glass">
                <p className="text-[11px] uppercase tracking-[0.24em] text-gold">Phase {idx + 1}</p>
                <p className="mt-3 font-serif text-[28px] leading-[1.02] text-inkStrong">{step}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe">
          <SectionHeading
            label="Mini Gallery"
            title={miniGallery.title}
            subtitle="Additional venue perspectives from ceremony and reception environments."
            shell="glass"
          />

          <motion.div
            className="mt-10 flex snap-x gap-4 overflow-x-auto pb-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {miniGallery.items.map((image, idx) => (
              <motion.div key={`${image}-${idx}`} variants={fadeUp} className="snap-start droplet-corner overflow-hidden border border-strokeSoft/70 bg-white/55 shadow-glass">
                <img src={image} alt={`Venue mini gallery ${idx + 1}`} className="h-72 w-[280px] object-cover sm:w-[320px]" loading="lazy" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CtaStrip title={cta.title} subtitle={cta.subtitle} buttonText={config.cta.text} buttonHref={config.cta.href} />
    </>
  );
}

export default VenuePage;
