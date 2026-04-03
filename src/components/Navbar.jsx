import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { megaMenuConfig, navItems } from '../data/pageConfigs';
import MegaDropdownPanel from './navigation/MegaDropdownPanel';
import CTAButton from './primitives/CTAButton';

function Navbar({ hasHeroSection = false, isAtTop = false, isVisible = true, onOpenMenu }) {
  const [activeHoverLabel, setActiveHoverLabel] = useState(null);
  const [dropdownAnchorX, setDropdownAnchorX] = useState(null);
  const openTimerRef = useRef(null);
  const closeTimerRef = useRef(null);
  const navRef = useRef(null);
  const navItemRefs = useRef({});
  const location = useLocation();
  const transparent = hasHeroSection && isAtTop;

  const activeMenuConfig = activeHoverLabel ? megaMenuConfig[activeHoverLabel] : null;

  const updateDropdownAnchor = (label) => {
    const navNode = navRef.current;
    const itemNode = navItemRefs.current[label];

    if (!navNode || !itemNode) {
      setDropdownAnchorX(null);
      return;
    }

    const navRect = navNode.getBoundingClientRect();
    const itemRect = itemNode.getBoundingClientRect();
    setDropdownAnchorX(itemRect.left - navRect.left + itemRect.width / 2);
  };

  const clearTimers = () => {
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }

    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  useEffect(() => {
    setActiveHoverLabel(null);
    setDropdownAnchorX(null);
    clearTimers();
  }, [location.pathname]);

  useEffect(
    () => () => {
      clearTimers();
    },
    [],
  );

  useEffect(() => {
    if (!activeHoverLabel) {
      return undefined;
    }

    const onResize = () => {
      updateDropdownAnchor(activeHoverLabel);
    };

    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [activeHoverLabel]);

  const onItemHover = (label) => {
    if (!megaMenuConfig[label]) {
      clearTimers();
      setActiveHoverLabel(null);
      setDropdownAnchorX(null);
      return;
    }

    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
    }

    openTimerRef.current = setTimeout(() => {
      updateDropdownAnchor(label);
      setActiveHoverLabel(label);
    }, 80);
  };

  const keepDropdownOpen = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const closeDropdownWithDelay = () => {
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }

    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }

    closeTimerRef.current = setTimeout(() => {
      setActiveHoverLabel(null);
      setDropdownAnchorX(null);
    }, 180);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 px-3 pt-2 transition-transform duration-700 ease-luxe md:px-5 md:pt-3 ${
        isVisible ? 'translate-y-0' : '-translate-y-[135%]'
      }`}
    >
      <nav
        ref={navRef}
        className={`mx-auto flex w-full max-w-[1470px] items-center justify-between gap-4 px-5 transition-all duration-500 ease-luxe md:px-8 ${
          transparent
            ? 'h-[98px] rounded-none border border-transparent bg-transparent text-white shadow-none md:h-[106px]'
            : 'h-[82px] rounded-[2.2rem] border border-strokeSoft/60 bg-white/84 text-inkStrong shadow-glass backdrop-blur-xl md:h-[86px]'
        }`}
        onMouseEnter={keepDropdownOpen}
        onMouseLeave={closeDropdownWithDelay}
      >
        <NavLink
          to="/"
          className={`shrink-0 font-serif leading-none tracking-[0.02em] transition-all duration-500 ${
            transparent
              ? 'text-[35px] text-white [text-shadow:0_3px_12px_rgba(0,0,0,0.48)] sm:text-[42px]'
              : 'text-[29px] text-inkStrong sm:text-[34px]'
          }`}
        >
          Veloura
        </NavLink>

        <ul className="hidden min-w-0 flex-1 items-center justify-center gap-3 xl:flex 2xl:gap-5">
          {navItems.map((item) => (
            <li
              key={item.path}
              ref={(node) => {
                if (node) {
                  navItemRefs.current[item.label] = node;
                } else {
                  delete navItemRefs.current[item.label];
                }
              }}
              onMouseEnter={() => onItemHover(item.label)}
            >
              <NavLink
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `nav-link !whitespace-nowrap !text-[12px] !tracking-[0.1em] 2xl:!text-[12px] 2xl:!tracking-[0.12em] ${
                    transparent ? '!text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.45)]' : '!text-inkStrong'
                  } ${isActive ? 'nav-link-active' : ''}`
                }
              >
                {item.label.split(' ').join('\u00a0')}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <CTAButton
            to="/contact-us"
            tone={transparent ? 'frosted' : 'primary'}
            size="md"
            className={`hidden xl:inline-flex ${
              transparent ? '!border-white/65 !bg-white/20 !text-white hover:!bg-white/30 hover:!text-white' : ''
            }`}
          >
            Book A Tour
          </CTAButton>

          <button
            aria-label="Open side panel"
            onClick={onOpenMenu}
            className={`group inline-flex min-h-11 min-w-11 items-center justify-center transition-all duration-300 ease-luxe ${
              transparent
                ? 'text-white hover:opacity-85'
                : 'text-inkStrong hover:text-gold'
            }`}
          >
            <span className="relative h-[11px] w-5">
              <span
                className={`absolute left-0 top-0 h-[1.4px] w-5 transition-all duration-300 ${
                  transparent ? 'bg-white' : 'bg-inkStrong group-hover:bg-gold'
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-[1.4px] w-5 transition-all duration-300 ${
                  transparent ? 'bg-white' : 'bg-inkStrong group-hover:bg-gold'
                }`}
              />
            </span>
          </button>
        </div>

        <MegaDropdownPanel
          menuConfig={activeMenuConfig}
          isOpen={Boolean(activeMenuConfig)}
          anchorX={dropdownAnchorX}
          onCloseIntent={closeDropdownWithDelay}
          onKeepOpen={keepDropdownOpen}
        />
      </nav>
    </header>
  );
}

export default Navbar;
