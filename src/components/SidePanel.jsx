import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { megaMenuConfig, navItems } from '../data/pageConfigs';

function SidePanel({ isOpen, onClose }) {
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocused = useRef(null);
  const reducedMotion = useReducedMotion();
  const [expandedMenu, setExpandedMenu] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      setExpandedMenu(null);
      return undefined;
    }

    previousFocused.current = document.activeElement;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab') {
        return;
      }

      const focusables = panelRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      );

      if (!focusables || focusables.length === 0) {
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previousFocused.current?.focus?.();
    };
  }, [isOpen, onClose]);

  const panelTransition = reducedMotion
    ? { duration: 0.2, ease: 'linear' }
    : { duration: 0.52, ease: [0.22, 1, 0.36, 1] };

  const toggleAccordion = (label) => {
    setExpandedMenu((prev) => (prev === label ? null : label));
  };

  const venueDetails = [
    { label: 'Address', value: '198 West 21st Street, New York, NY' },
    { label: 'Phone', value: '+1 234-567-8910' },
    { label: 'Email', value: 'concierge@velouraestate.com' },
    { label: 'Hours', value: 'Mon - Sat, 9:00 AM - 7:00 PM' },
  ];

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-[#1f160d]/45 backdrop-blur-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.28, ease: 'easeOut' } }}
            exit={{ opacity: 0, transition: { duration: 0.24, ease: 'easeOut' } }}
            onClick={onClose}
          />

          <motion.aside
            ref={panelRef}
            className="fixed right-0 top-0 z-50 h-full w-full overflow-y-auto rounded-l-[2rem] border-l border-strokeSoft/70 bg-white/78 px-8 pb-10 pt-8 shadow-deep backdrop-blur-2xl sm:w-[420px] sm:px-10 xl:w-[500px] xl:px-11"
            initial={{ x: '100%' }}
            animate={{ x: 0, transition: panelTransition }}
            exit={{ x: '100%', transition: panelTransition }}
            aria-modal="true"
            role="dialog"
            aria-label="Site Menu"
          >
            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Close menu panel"
              className="ml-auto flex min-h-11 min-w-11 items-center justify-center rounded-full border border-strokeSoft/70 text-inkStrong transition-all duration-300 ease-luxe hover:border-gold/70 hover:text-gold"
            >
              <X size={18} strokeWidth={1.7} />
            </button>

            <div className="relative mt-8 pb-16">
              <div className="glass-panel mx-auto flex h-36 w-36 items-center justify-center rounded-full text-center">
                <div>
                  <p className="section-label">Wedding Theme</p>
                  <p className="mt-2 font-serif text-4xl leading-none text-inkStrong">Veloura</p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-inkSoft/75">Celebrating Love</p>
                </div>
              </div>

              <p className="mt-10 font-serif text-[36px] leading-[1.05] text-inkStrong">An Estate Crafted for Forever</p>
              <p className="mt-4 text-[14px] leading-[1.7] text-inkSoft">
                A private luxury setting where ceremony, celebration, and hospitality blend into one refined wedding experience.
              </p>

              <div className="mt-8 space-y-3 xl:hidden">
                {navItems.map((item) => {
                  const menuConfig = megaMenuConfig[item.label];
                  const isExpanded = expandedMenu === item.label;

                  if (!menuConfig) {
                    return (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={onClose}
                        className={({ isActive }) =>
                          `liquid-chip !w-full !justify-start !rounded-2xl !px-4 !text-[11px] ${
                            isActive ? '!border-gold/75 !bg-white/85 !text-gold' : ''
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    );
                  }

                  return (
                    <div key={item.path} className="rounded-2xl border border-strokeSoft/70 bg-white/55">
                      <button
                        type="button"
                        onClick={() => toggleAccordion(item.label)}
                        className="flex w-full items-center justify-between px-4 py-3 text-left text-[11px] uppercase tracking-[0.2em] text-inkStrong"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-gold' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {isExpanded ? (
                          <motion.div
                            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                            animate={
                              reducedMotion
                                ? { opacity: 1, transition: { duration: 0.2, ease: 'linear' } }
                                : { opacity: 1, y: 0, transition: { duration: 0.34, ease: 'easeOut' } }
                            }
                            exit={
                              reducedMotion
                                ? { opacity: 0 }
                                : { opacity: 0, y: 10, transition: { duration: 0.22, ease: 'easeOut' } }
                            }
                            className="space-y-2 px-4 pb-4"
                          >
                            <NavLink
                              to={item.path}
                              onClick={onClose}
                              className="liquid-chip !w-full !justify-start !rounded-xl !px-3 !py-2 !text-[10px]"
                            >
                              All {item.label}
                            </NavLink>

                            {menuConfig.links.map((link) => (
                              <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={onClose}
                                className="block rounded-xl border border-transparent bg-white/30 px-3 py-2 transition-all duration-300 ease-luxe hover:border-gold/30 hover:bg-white/80"
                              >
                                <p className="font-serif text-[23px] leading-none text-inkStrong">{link.label}</p>
                                <p className="mt-1 text-[12px] leading-[1.45] text-inkSoft">{link.description}</p>
                              </NavLink>
                            ))}
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              <div className="glass-panel mt-9 rounded-[1.7rem] p-6 xl:mt-8">
                <p className="text-[13px] uppercase tracking-[0.22em] text-inkStrong">Venue Contact</p>
                <div className="mt-5 space-y-3.5 text-[14px] leading-[1.7] text-inkSoft">
                  {venueDetails.map((item) => (
                    <p key={item.label}>
                      <span className="mr-2 text-[12px] uppercase tracking-[0.18em] text-gold">{item.label}</span>
                      {item.value}
                    </p>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href="tel:+12345678910"
                    className="liquid-chip !min-h-10 !rounded-xl !px-4 !text-[10px]"
                  >
                    Call Venue
                  </a>
                  <a
                    href="https://maps.google.com/?q=198+West+21st+Street,+New+York,+NY"
                    target="_blank"
                    rel="noreferrer"
                    className="liquid-chip !min-h-10 !rounded-xl !px-4 !text-[10px]"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="mt-9 rounded-2xl border border-strokeSoft/60 bg-white/55 p-5 xl:mt-7">
                <p className="text-[11px] uppercase tracking-[0.2em] text-gold">Venue Concierge</p>
                <p className="mt-3 font-serif text-[27px] leading-none text-inkStrong">Veloura Estate</p>
                <p className="mt-2 text-[13px] leading-[1.6] text-inkSoft">
                  Dedicated assistance for tours, availability, and tailored wedding planning support.
                </p>
              </div>

              <svg
                className="pointer-events-none absolute -bottom-2 right-0 h-52 w-40 text-gold/35 opacity-30"
                viewBox="0 0 220 340"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M110 332C136 268 158 220 170 184C183 145 181 114 161 84C146 61 124 47 98 44"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M97 44C87 20 68 9 42 8C46 31 58 53 79 63C87 67 94 66 97 44Z" fill="currentColor" />
                <path d="M124 89C133 64 152 53 178 53C174 76 161 96 141 106C133 110 126 111 124 89Z" fill="currentColor" />
                <path d="M148 141C160 120 183 113 207 117C199 137 183 153 162 159C153 161 145 159 148 141Z" fill="currentColor" />
                <path d="M120 183C136 169 162 170 182 183C167 198 145 206 124 204C114 202 109 197 120 183Z" fill="currentColor" />
                <path d="M99 225C82 213 57 214 38 228C52 242 73 249 94 248C104 246 110 241 99 225Z" fill="currentColor" />
              </svg>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}

export default SidePanel;
