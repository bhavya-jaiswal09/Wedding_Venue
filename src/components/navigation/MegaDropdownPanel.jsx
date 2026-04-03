import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

function MegaDropdownPanel({ menuConfig, isOpen, anchorX, onCloseIntent, onKeepOpen }) {
  const reduceMotion = useReducedMotion();
  const openTransition = reduceMotion ? { duration: 0.2, ease: 'linear' } : { duration: 0.8, ease: [0.4, 0, 0.2, 1] };
  const closeTransition = reduceMotion ? { duration: 0.16, ease: 'linear' } : { duration: 0.3, ease: [0.4, 0, 0.2, 1] };
  const panelHalfWidth = 270;
  const leftPosition = anchorX == null ? '50%' : `max(${panelHalfWidth}px, min(${anchorX}px, calc(100% - ${panelHalfWidth}px)))`;

  return (
    <AnimatePresence>
      {isOpen && menuConfig ? (
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.98 }}
          animate={
            reduceMotion
              ? { opacity: 1, transition: openTransition }
              : {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: openTransition,
                }
          }
          exit={
            reduceMotion
              ? { opacity: 0, transition: closeTransition }
              : { opacity: 0, y: 10, scale: 0.985, transition: closeTransition }
          }
          className="absolute top-[calc(100%+8px)] z-[70] hidden w-[min(540px,calc(100vw-36px))] -translate-x-1/2 overflow-hidden rounded-[20px] border border-white/70 bg-[#f8faf7]/92 shadow-[0_20px_44px_rgba(35,31,24,0.2)] backdrop-blur-2xl backdrop-saturate-150 xl:block"
          style={{ left: leftPosition }}
          onMouseEnter={onKeepOpen}
          onMouseLeave={onCloseIntent}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_14%,rgba(255,255,255,0.46),transparent_48%),radial-gradient(circle_at_80%_76%,rgba(255,255,255,0.22),transparent_42%)]" />
          <div className="relative z-10 px-4 py-4 sm:px-5 sm:py-5">
            <div className="flex items-start justify-between gap-4 border-b border-strokeSoft/65 pb-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1a1b1e]">{menuConfig.title}</p>
                <p className="mt-1.5 max-w-[320px] text-[12px] leading-[1.55] text-[#2f3338]">{menuConfig.subtitle}</p>
              </div>

              <NavLink
                to={menuConfig.preview.path}
                onClick={onCloseIntent}
                className="hidden rounded-full border border-strokeSoft/65 bg-white/88 px-3.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#24262b] transition-all duration-300 ease-luxe hover:border-gold/55 hover:text-gold sm:inline-flex"
              >
                Preview
              </NavLink>
            </div>

            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {menuConfig.links.slice(0, 4).map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={onCloseIntent}
                    className="group block rounded-[18px] border border-strokeSoft/45 bg-white/84 px-3.5 py-2.5 backdrop-blur-sm transition-all duration-300 ease-luxe hover:border-gold/35 hover:bg-white/92"
                  >
                    <p className="font-serif text-[18px] leading-[0.95] text-[#111216] transition-colors duration-300 group-hover:text-gold">
                      {link.label}
                    </p>
                    <p className="mt-1.5 text-[11px] leading-[1.42] text-[#2e3238]">{link.description}</p>
                  </NavLink>
                </li>
              ))}
            </ul>

            <NavLink
              to={menuConfig.preview.path}
              onClick={onCloseIntent}
              className="mt-3 flex items-center gap-2.5 rounded-[18px] border border-strokeSoft/70 bg-white/86 p-2.5 backdrop-blur-sm transition-all duration-300 ease-luxe hover:border-gold/45 hover:bg-white/94"
            >
              <div className="h-12 w-16 overflow-hidden rounded-lg">
                <img
                  src={menuConfig.preview.image}
                  alt={menuConfig.preview.caption}
                  className="h-full w-full object-cover transition-transform duration-500 ease-luxe hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              <div className="min-w-0">
                <p className="text-[9px] uppercase tracking-[0.16em] text-[#3a3f45]">Preview Story</p>
                <p className="mt-1 truncate font-serif text-[15px] leading-[1] text-[#111216]">{menuConfig.preview.caption}</p>
              </div>

              <span className="ml-auto text-[9px] font-semibold uppercase tracking-[0.14em] text-gold">Open</span>
            </NavLink>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default MegaDropdownPanel;
