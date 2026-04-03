import { useId } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../data/pageConfigs';
import { makeFadeUp, makeStagger } from '../utils/motion';

const footerColumns = [
  {
    title: 'VENUE INFO',
    items: ['198 West 21st Street, New York, NY', '+1 234-567-8910', 'concierge@velouraestate.com'],
  },
  {
    title: 'QUICK LINKS',
    links: navItems,
  },
  {
    title: 'WEDDING SERVICES',
    items: ['Venue Tours', 'Ceremony Planning', 'Reception Styling', 'Catering & Menus'],
  },
  {
    title: 'SUPPORT',
    items: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Private event inquiries', 'Dedicated planner assistance'],
  },
];

function Footer() {
  const ringId = useId();
  const reduceMotion = useReducedMotion();
  const fadeUp = makeFadeUp(reduceMotion);
  const stagger = makeStagger(0.08, 0, reduceMotion);

  return (
    <footer className="relative mt-[42px] border-t border-strokeSoft/60 bg-[linear-gradient(180deg,#eef4fd_0%,#e8f0fb_58%,#e3ecf8_100%)] pb-[26px] pt-[78px] shadow-[0_-10px_36px_rgba(86,112,145,0.08)] md:pt-[88px]">
      <div className="relative mx-auto w-full max-w-[1560px] px-4 sm:px-[21px] lg:px-[42px]">
        <motion.div
          className="relative pb-[26px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          variants={stagger}
        >
          <motion.div
            variants={fadeUp}
            className="relative mx-auto -mt-[135px] flex h-[114px] w-[114px] items-center justify-center rounded-full border border-strokeSoft/55 bg-[#f6f9ff] text-center md:-mt-[145px]"
          >
            <svg viewBox="0 0 220 220" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <defs>
                <path id={`${ringId}-top`} d="M 34 110 A 76 76 0 0 1 186 110" />
                <path id={`${ringId}-bottom`} d="M 186 110 A 76 76 0 0 1 34 110" />
              </defs>
              <text fill="rgba(20,20,20,0.62)" fontFamily="'Manrope', sans-serif" fontSize="6.6" letterSpacing="3.2">
                <textPath href={`#${ringId}-top`} startOffset="50%" textAnchor="middle">
                  WEDDING THEME
                </textPath>
              </text>
              <text fill="rgba(20,20,20,0.62)" fontFamily="'Manrope', sans-serif" fontSize="6.6" letterSpacing="2.8">
                <textPath href={`#${ringId}-bottom`} startOffset="50%" textAnchor="middle">
                  CELEBRATING LOVE
                </textPath>
              </text>
            </svg>

            <span className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[10px] text-inkStrong/60">•</span>
            <span className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[10px] text-inkStrong/60">•</span>
            <p className="relative z-10 font-serif text-[46px] leading-none text-inkStrong">Veloura</p>
          </motion.div>

          <div className="relative z-10 mt-9 grid gap-x-[26px] gap-y-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-x-[62px]">
            {footerColumns.map((column) => (
              <motion.div key={column.title} variants={fadeUp}>
                <h3 className="text-[10px] font-normal uppercase tracking-[0.3em] text-inkStrong/90">{column.title}</h3>
                {column.links ? (
                  <ul className="mt-[10px] space-y-[5px] text-[14px] font-light leading-[1.56] text-inkSoft">
                    {column.links.map((item) => (
                      <li key={item.path}>
                        <NavLink to={item.path} className="font-light transition-colors duration-300 hover:text-gold">
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="mt-[10px] space-y-[5px] text-[14px] font-light leading-[1.56] text-inkSoft">
                    {column.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            className="relative z-10 mt-[26px] border-t border-strokeSoft/60 pt-[18px] text-center text-[10px] font-light text-inkSoft sm:text-[11px]"
          >
            Privacy Policy - Terms - ©2026 Veloura Estate. All Rights Reserved.
          </motion.div>
        </motion.div>
      </div>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className="absolute bottom-[21px] right-[18px] inline-flex h-9 w-9 items-center justify-center border border-inkStrong/45 bg-transparent text-inkStrong transition-colors duration-300 hover:border-gold hover:text-gold"
      >
        <ChevronUp size={12} strokeWidth={1.9} />
      </button>
    </footer>
  );
}

export default Footer;
