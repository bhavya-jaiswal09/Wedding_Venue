import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import PageHero from '../components/primitives/PageHero';
import SectionHeading from '../components/primitives/SectionHeading';
import CtaStrip from '../components/sections/CtaStrip';
import usePageSeo from '../hooks/usePageSeo';
import { pageConfigs } from '../data/pageConfigs';
import { makeFadeUp, makeStagger } from '../utils/motion';

function GalleryPage() {
  const config = pageConfigs.gallery;
  const reduceMotion = useReducedMotion();
  const fadeUp = makeFadeUp(reduceMotion);
  const stagger = makeStagger(0.1, 0, reduceMotion);

  const masonry = config.sections.find((section) => section.type === 'masonry');
  const categories = config.sections.find((section) => section.type === 'categories');
  const featuredBand = config.sections.find((section) => section.type === 'featuredBand');
  const coupleCarousel = config.sections.find((section) => section.type === 'coupleCarousel');
  const socialCallout = config.sections.find((section) => section.type === 'socialCallout');
  const inquiry = config.sections.find((section) => section.type === 'inquiry');

  const [activeIndex, setActiveIndex] = useState(0);

  usePageSeo(config.seo);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % coupleCarousel.items.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [coupleCarousel.items.length]);

  return (
    <>
      <PageHero hero={config.hero} />

      <section className="section-pad">
        <div className="container-luxe">
          <SectionHeading
            label="Gallery"
            title={masonry.title}
            subtitle="A high-touch visual archive of ceremony elegance and celebration atmosphere."
            shell="glass"
          />

          <motion.div
            className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={stagger}
          >
            {masonry.items.map((image, idx) => (
              <motion.figure
                key={`${image}-${idx}`}
                variants={fadeUp}
                className="group droplet-corner relative mb-5 overflow-hidden border border-strokeSoft/65 bg-white/55 shadow-glass"
              >
                <img
                  src={image}
                  alt={`Gallery story ${idx + 1}`}
                  className="h-auto w-full transition-transform duration-500 ease-luxe group-hover:scale-[1.08]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e170f]/28 to-transparent transition-opacity duration-400 group-hover:opacity-90" />
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe">
          <div className="section-shell">
            <SectionHeading label="Categories" title={categories.title} subtitle="Browse the celebration narrative by moment type." />
            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              {categories.items.map((category) => (
                <motion.span key={category} variants={fadeUp} className="liquid-chip">
                  {category}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe">
          <motion.div
            className="glass-panel-strong grid gap-8 p-6 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:p-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <p className="section-label">Featured Composition</p>
              <h2 className="mt-4 font-serif text-[36px] leading-[1.02] text-inkStrong sm:text-[48px]">{featuredBand.title}</h2>
              <p className="mt-5 max-w-xl text-[14px] leading-[1.85] text-inkSoft">{featuredBand.copy}</p>
            </motion.div>

            <motion.div variants={fadeUp} className="droplet-corner overflow-hidden border border-strokeSoft/70">
              <img src={featuredBand.image} alt={featuredBand.title} className="h-[420px] w-full object-cover" loading="lazy" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe">
          <SectionHeading label="Carousel" title={coupleCarousel.title} subtitle="A slower reveal of signature couple moments." />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mt-11 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div className="droplet-corner overflow-hidden border border-strokeSoft/70 bg-white/58 shadow-glass">
              <img src={coupleCarousel.items[activeIndex]} alt="Couple moment" className="h-[430px] w-full object-cover" loading="lazy" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {coupleCarousel.items.map((image, idx) => (
                <button
                  key={`${image}-${idx}`}
                  onClick={() => setActiveIndex(idx)}
                  className={`droplet-corner overflow-hidden border transition-all duration-300 ease-luxe ${
                    idx === activeIndex ? 'border-gold/75 shadow-glow' : 'border-strokeSoft/75 bg-white/52'
                  }`}
                  aria-label={`Show carousel image ${idx + 1}`}
                >
                  <img src={image} alt={`Couple thumbnail ${idx + 1}`} className="h-40 w-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe">
          <div className="section-shell text-center">
            <motion.p className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
              Social
            </motion.p>
            <motion.h2
              className="mx-auto mt-4 max-w-3xl font-serif text-[36px] leading-[1.03] text-inkStrong sm:text-[48px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              {socialCallout.title}
            </motion.h2>
            <motion.p
              className="mx-auto mt-5 max-w-2xl text-[14px] leading-[1.8] text-inkSoft"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              {socialCallout.copy}
            </motion.p>
          </div>
        </div>
      </section>

      <CtaStrip title={inquiry.title} subtitle={inquiry.subtitle} buttonText={config.cta.text} buttonHref={config.cta.href} />
    </>
  );
}

export default GalleryPage;
