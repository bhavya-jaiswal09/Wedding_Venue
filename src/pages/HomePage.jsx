import { Camera, Flower2, ScrollText, Utensils } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import PageHero from '../components/primitives/PageHero';
import SectionHeading from '../components/primitives/SectionHeading';
import ImageCard from '../components/primitives/ImageCard';
import TestimonialsSlider from '../components/sections/TestimonialsSlider';
import CtaStrip from '../components/sections/CtaStrip';
import ContactMinimalSection from '../components/sections/ContactMinimalSection';
import usePageSeo from '../hooks/usePageSeo';
import { pageConfigs } from '../data/pageConfigs';
import { makeFadeUp, makeStagger } from '../utils/motion';

const featureIcons = [Flower2, ScrollText, Utensils, Camera];

function HomePage() {
  const config = pageConfigs.home;
  const reduceMotion = useReducedMotion();
  const fadeUp = makeFadeUp(reduceMotion);
  const stagger = makeStagger(0.12, 0, reduceMotion);

  usePageSeo(config.seo);

  const highlights = config.sections.find((section) => section.type === 'highlights');
  const galleryPreview = config.sections.find((section) => section.type === 'galleryPreview');
  const features = config.sections.find((section) => section.type === 'features');
  const testimonials = config.sections.find((section) => section.type === 'testimonials');
  const spaces = config.sections.find((section) => section.type === 'spaces');
  const cta = config.sections.find((section) => section.type === 'ctaStrip');

  return (
    <>
      <PageHero hero={config.hero} isHome showGlassStats />

      <section className="section-pad pt-28 md:pt-32">
        <div className="container-luxe">
          <SectionHeading
            label="Venue Highlights"
            title={highlights.title}
            subtitle="Refined architectural spaces for ceremonies, receptions, and private toasts."
          />

          <motion.div
            className="mt-10 grid gap-5 lg:grid-cols-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            {highlights.items.map((item, idx) => (
              <ImageCard
                key={item.title}
                item={item}
                captionInside
                className={idx === 0 ? 'lg:col-span-8 lg:row-span-2' : 'lg:col-span-4'}
                aspect={idx === 0 ? 'h-[620px]' : 'h-[300px]'}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe">
          <SectionHeading
            label="Gallery"
            title={galleryPreview.title}
            subtitle="A visual rhythm of vows, florals, and curated celebration details."
          />

          <motion.div
            className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={stagger}
          >
            {galleryPreview.items.map((image, idx) => (
              <motion.figure key={image} variants={fadeUp} className="group relative mb-5 overflow-hidden rounded-[2rem]">
                <img
                  src={image}
                  alt={`Gallery preview ${idx + 1}`}
                  className="h-auto w-full transition-transform duration-500 ease-luxe group-hover:scale-[1.07]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e170f]/24 to-transparent opacity-70 transition-opacity duration-400 group-hover:opacity-95" />
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} className="relative pl-6 text-left sm:pl-8">
            <span className="absolute left-0 top-1 h-28 w-px bg-gradient-to-b from-gold/70 to-transparent" />
            <p className="section-label">Why Choose Us</p>
            <h2 className="mt-4 font-serif text-[36px] leading-[0.97] text-inkStrong sm:text-[50px]">
              A Venue Team Built for Graceful Celebrations
            </h2>
            <p className="mt-7 max-w-xl text-[14px] leading-[1.85] text-inkSoft">
              We shape every wedding with quiet precision, from ceremony styling to dinner atmosphere, so each moment feels personal and timeless.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {features.items.map((item, idx) => {
              const Icon = featureIcons[idx];
              return (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  className="grid gap-4 border-b border-strokeSoft/45 pb-5 pt-2 sm:grid-cols-[44px_1fr]"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/35 bg-white/72">
                    <Icon strokeWidth={1.6} className="h-[18px] w-[18px] text-gold" />
                  </span>

                  <div>
                    <h3 className="font-serif text-[27px] leading-none text-inkStrong">{item.title}</h3>
                    <p className="mt-3 text-[14px] leading-[1.75] text-inkSoft">{item.copy}</p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe">
          <SectionHeading
            label="Testimonials"
            title="A Trusted Venue for Refined Celebrations"
            subtitle="Real words from couples and hosts who celebrated at Veloura Estate."
          />
          <TestimonialsSlider items={testimonials.items} />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe">
          <SectionHeading
            label="Event Spaces"
            title={spaces.title}
            subtitle="Flexible, elegant spaces designed for intimate ceremonies and grand receptions."
          />

          <motion.div
            className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {spaces.items.map((item) => (
              <ImageCard key={item.title} item={item} aspect="h-[420px]" />
            ))}
          </motion.div>
        </div>
      </section>

      <CtaStrip title={cta.title} subtitle={cta.subtitle} buttonText={config.cta.text} buttonHref={config.cta.href} />
      <ContactMinimalSection className="!pb-14 md:!pb-[4.2rem]" />
    </>
  );
}

export default HomePage;
