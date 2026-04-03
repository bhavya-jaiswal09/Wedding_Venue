import { motion, useReducedMotion } from 'framer-motion';
import PageHero from '../components/primitives/PageHero';
import SectionHeading from '../components/primitives/SectionHeading';
import ImageCard from '../components/primitives/ImageCard';
import CtaStrip from '../components/sections/CtaStrip';
import TimelineBlock from '../components/sections/TimelineBlock';
import usePageSeo from '../hooks/usePageSeo';
import { pageConfigs } from '../data/pageConfigs';
import { makeFadeUp, makeStagger } from '../utils/motion';

function OurMenusPage() {
  const config = pageConfigs.menus;
  const reduceMotion = useReducedMotion();
  const fadeUp = makeFadeUp(reduceMotion);
  const stagger = makeStagger(0.12, 0, reduceMotion);

  const philosophy = config.sections.find((section) => section.type === 'philosophy');
  const collections = config.sections.find((section) => section.type === 'collections');
  const timeline = config.sections.find((section) => section.type === 'timeline');
  const pairings = config.sections.find((section) => section.type === 'pairings');
  const chef = config.sections.find((section) => section.type === 'chef');
  const cta = config.sections.find((section) => section.type === 'cta');

  usePageSeo(config.seo);

  return (
    <>
      <PageHero hero={config.hero} />

      <section className="section-pad">
        <div className="container-luxe">
          <motion.div
            className="glass-panel-strong grid gap-8 p-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <p className="section-label">Philosophy</p>
              <h2 className="mt-4 font-serif text-[36px] leading-[1.03] text-inkStrong sm:text-[48px]">{philosophy.title}</h2>
              <p className="mt-5 max-w-xl text-[14px] leading-[1.85] text-inkSoft">{philosophy.copy}</p>
            </motion.div>

            <motion.div variants={fadeUp} className="droplet-corner overflow-hidden border border-strokeSoft/70">
              <img src={collections.items[1].image} alt="Menu philosophy" className="h-[420px] w-full object-cover" loading="lazy" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe">
          <SectionHeading
            label="Collections"
            title={collections.title}
            subtitle="Three distinct culinary directions to match your celebration rhythm."
            shell="glass"
          />

          <motion.div
            className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            {collections.items.map((item) => (
              <ImageCard key={item.title} item={item} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe">
          <SectionHeading
            label="Tasting Journey"
            title={timeline.title}
            subtitle="A structured process from first consultation to final menu lock."
          />
          <TimelineBlock items={timeline.items} />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe">
          <div className="section-shell">
            <SectionHeading
              label="Pairings"
              title={pairings.title}
              subtitle="Layered beverage and dessert moments for a complete reception story."
            />
            <motion.ul
              className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              {pairings.items.map((item) => (
                <motion.li key={item} variants={fadeUp} className="liquid-chip !justify-start !rounded-2xl !px-5 !py-4 !text-[11px] !text-inkStrong">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="droplet-corner overflow-hidden border border-strokeSoft/70 bg-white/58 shadow-glass">
            <img src={chef.image} alt={chef.title} className="h-[420px] w-full object-cover" loading="lazy" />
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="section-shell text-left">
            <p className="section-label">Chef Curation</p>
            <h2 className="mt-4 font-serif text-[36px] leading-[1.03] text-inkStrong sm:text-[48px]">{chef.title}</h2>
            <p className="mt-5 max-w-xl text-[14px] leading-[1.85] text-inkSoft">{chef.copy}</p>
          </motion.div>
        </div>
      </section>

      <CtaStrip title={cta.title} subtitle={cta.subtitle} buttonText={config.cta.text} buttonHref={config.cta.href} />
    </>
  );
}

export default OurMenusPage;
