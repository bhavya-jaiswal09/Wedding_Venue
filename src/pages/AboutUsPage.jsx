import { Gem, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import PageHero from '../components/primitives/PageHero';
import SectionHeading from '../components/primitives/SectionHeading';
import ImageCard from '../components/primitives/ImageCard';
import CtaStrip from '../components/sections/CtaStrip';
import usePageSeo from '../hooks/usePageSeo';
import { pageConfigs } from '../data/pageConfigs';
import { makeFadeUp, makeStagger } from '../utils/motion';

const pillarIcons = [Sparkles, ShieldCheck, HeartHandshake, Gem];

function AboutUsPage() {
  const config = pageConfigs.about;
  const reduceMotion = useReducedMotion();
  const fadeUp = makeFadeUp(reduceMotion);
  const stagger = makeStagger(0.12, 0, reduceMotion);

  const manifesto = config.sections.find((section) => section.type === 'manifesto');
  const team = config.sections.find((section) => section.type === 'team');
  const partners = config.sections.find((section) => section.type === 'partners');
  const pillars = config.sections.find((section) => section.type === 'pillars');
  const milestones = config.sections.find((section) => section.type === 'milestones');
  const cta = config.sections.find((section) => section.type === 'cta');

  usePageSeo(config.seo);

  return (
    <>
      <PageHero hero={config.hero} />

      <section className="section-pad">
        <div className="container-luxe">
          <SectionHeading label="Manifesto" title={manifesto.title} subtitle={manifesto.copy} shell="glass" />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe">
          <SectionHeading label="Team" title={team.title} subtitle="Specialists in design, operations, and hospitality curation." />
          <motion.div
            className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            {team.items.map((member) => (
              <ImageCard key={member.title} item={member} aspect="h-[360px]" />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe">
          <div className="section-shell">
            <SectionHeading label="Partners" title={partners.title} subtitle="A selected network of luxury wedding and event collaborators." />
            <motion.div
              className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              {partners.items.map((partner) => (
                <motion.div key={partner} variants={fadeUp} className="liquid-chip !min-h-[112px] !w-full !rounded-2xl !px-4 !text-center !font-serif !text-[28px] !normal-case !tracking-normal !text-gold">
                  {partner}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe">
          <SectionHeading label="Craft Pillars" title={pillars.title} subtitle="Core principles guiding every celebration we host." />
          <motion.div
            className="mt-10 grid gap-5 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {pillars.items.map((pillar, idx) => {
              const Icon = pillarIcons[idx];
              return (
                <motion.article key={pillar.title} variants={fadeUp} className="droplet-corner border border-strokeSoft/70 bg-white/62 p-6 shadow-glass">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/45 bg-white/75">
                    <Icon strokeWidth={1.7} className="h-5 w-5 text-gold" />
                  </span>
                  <h3 className="mt-5 font-serif text-[28px] leading-none text-inkStrong">{pillar.title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.75] text-inkSoft">{pillar.copy}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe">
          <SectionHeading label="Milestones" title={milestones.title} subtitle="A snapshot of our journey and hosting standards." shell="glass" />

          <motion.div
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {milestones.items.map((metric) => (
              <motion.article key={metric.label} variants={fadeUp} className="droplet-corner border border-strokeSoft/70 bg-white/64 p-6 text-center shadow-glass">
                <p className="font-serif text-[46px] leading-none text-gold">{metric.value}</p>
                <p className="mt-3 text-[12px] uppercase tracking-[0.22em] text-inkSoft">{metric.label}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <CtaStrip title={cta.title} subtitle={cta.subtitle} buttonText={config.cta.text} buttonHref={config.cta.href} />
    </>
  );
}

export default AboutUsPage;
