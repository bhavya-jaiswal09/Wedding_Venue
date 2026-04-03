import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import PageHero from '../components/primitives/PageHero';
import SectionHeading from '../components/primitives/SectionHeading';
import CtaStrip from '../components/sections/CtaStrip';
import usePageSeo from '../hooks/usePageSeo';
import { pageConfigs } from '../data/pageConfigs';
import { makeFadeUp, makeStagger } from '../utils/motion';

function BlogsPage() {
  const config = pageConfigs.blogs;
  const reduceMotion = useReducedMotion();
  const fadeUp = makeFadeUp(reduceMotion);
  const stagger = makeStagger(0.1, 0, reduceMotion);

  const featuredPost = config.sections.find((section) => section.type === 'featuredPost');
  const postsSection = config.sections.find((section) => section.type === 'posts');
  const trends = config.sections.find((section) => section.type === 'trends');
  const newsletter = config.sections.find((section) => section.type === 'newsletter');
  const cta = config.sections.find((section) => section.type === 'cta');

  const [topic, setTopic] = useState('All');
  const [email, setEmail] = useState('');
  const [newsletterMessage, setNewsletterMessage] = useState('');

  const filteredPosts = useMemo(() => {
    if (topic === 'All') {
      return postsSection.items;
    }

    return postsSection.items.filter((post) => post.tag === topic);
  }, [postsSection.items, topic]);

  usePageSeo(config.seo);

  const onNewsletterSubmit = (event) => {
    event.preventDefault();

    if (!email.trim() || !email.includes('@')) {
      setNewsletterMessage('Please enter a valid email address.');
      return;
    }

    setNewsletterMessage('Subscribed successfully. You will receive monthly insights.');
    setEmail('');
  };

  return (
    <>
      <PageHero hero={config.hero} />

      <section className="section-pad">
        <div className="container-luxe">
          <SectionHeading
            label="Featured"
            title={featuredPost.title}
            subtitle="Our latest editorial guidance for elevated celebrations."
            shell="glass"
          />

          <motion.article
            className="glass-panel-strong mt-10 grid overflow-hidden rounded-[2rem] border border-strokeSoft/70 lg:grid-cols-[1.15fr_0.85fr]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <img src={featuredPost.post.image} alt={featuredPost.post.title} className="h-[390px] w-full object-cover" loading="lazy" />
            <div className="p-8 lg:p-10">
              <p className="section-label text-gold">{featuredPost.post.tag}</p>
              <h3 className="mt-4 font-serif text-[33px] leading-[1.03] text-inkStrong">{featuredPost.post.title}</h3>
              <p className="mt-5 text-[14px] leading-[1.8] text-inkSoft">{featuredPost.post.excerpt}</p>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe">
          <SectionHeading label="Journal" title={postsSection.title} subtitle="Filter stories by planning intent and celebration focus." />

          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {postsSection.topics.map((topicItem) => (
              <motion.button
                key={topicItem}
                variants={fadeUp}
                onClick={() => setTopic(topicItem)}
                className={`liquid-chip ${
                  topic === topicItem ? '!border-gold/75 !bg-white/88 !text-gold !shadow-glow' : ''
                }`}
              >
                {topicItem}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {filteredPosts.map((post) => (
              <motion.article key={post.title} variants={fadeUp} className="group droplet-corner overflow-hidden border border-strokeSoft/65 bg-white/56 shadow-glass">
                <div className="h-[250px] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-luxe group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <p className="section-label text-gold">{post.tag}</p>
                  <h3 className="mt-3 font-serif text-[27px] leading-none text-inkStrong">{post.title}</h3>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe">
          <div className="section-shell">
            <SectionHeading label="Trends" title={trends.title} subtitle="Current directions shaping elegant wedding and event experiences." />
            <motion.div
              className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              {trends.items.map((item) => (
                <motion.div key={item} variants={fadeUp} className="liquid-chip !w-full !rounded-2xl !px-5 !py-4 !text-[11px] !text-inkStrong">
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe text-center">
          <SectionHeading label="Newsletter" title={newsletter.title} subtitle={newsletter.subtitle} shell="glass" />
          <motion.form
            onSubmit={onNewsletterSubmit}
            className="glass-panel-strong mx-auto mt-8 flex max-w-2xl flex-col gap-4 rounded-[1.8rem] p-5 sm:flex-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              className="input-line flex-1"
            />
            <button
              type="submit"
              className="min-h-12 rounded-full border border-gold bg-gold px-8 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-white shadow-[0_10px_26px_rgba(176,141,109,0.22)] transition-all duration-300 ease-luxe hover:border-goldDeep hover:bg-goldDeep"
            >
              Subscribe
            </button>
          </motion.form>
          {newsletterMessage ? <p className="mt-4 text-[13px] uppercase tracking-[0.16em] text-gold">{newsletterMessage}</p> : null}
        </div>
      </section>

      <CtaStrip title={cta.title} subtitle={cta.subtitle} buttonText={config.cta.text} buttonHref={config.cta.href} />
    </>
  );
}

export default BlogsPage;
