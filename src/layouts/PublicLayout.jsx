import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import DecorativeFloral from '../components/primitives/DecorativeFloral';
import { subpageRoutes } from '../data/pageConfigs';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SidePanel from '../components/SidePanel';

const HERO_BASE_ROUTES = new Set(['/', '/gallery', '/our-menus', '/blogs', '/venue', '/events', '/about-us', '/contact-us']);
const HERO_NAV_HOLD_RATIO = 0.45;

const normalizePath = (pathname) => (pathname === '/' ? '/' : pathname.replace(/\/+$/, ''));

function PublicLayout() {
  const location = useLocation();
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollRef = useRef(0);
  const heroHoldBoundaryRef = useRef(0);

  const normalizedPath = normalizePath(location.pathname);
  const hasHeroSection = HERO_BASE_ROUTES.has(normalizedPath) || subpageRoutes.includes(normalizedPath);

  useEffect(() => {
    const updateHeroBoundary = () => {
      if (!hasHeroSection) {
        heroHoldBoundaryRef.current = 0;
        return;
      }

      const heroSection = document.querySelector('main > section:first-of-type');
      const heroHeight = heroSection?.getBoundingClientRect().height ?? window.innerHeight;
      heroHoldBoundaryRef.current = Math.max(0, heroHeight * HERO_NAV_HOLD_RATIO);
    };

    const rafId = window.requestAnimationFrame(updateHeroBoundary);
    updateHeroBoundary();
    window.addEventListener('resize', updateHeroBoundary);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('resize', updateHeroBoundary);
    };
  }, [hasHeroSection, location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const delta = currentScroll - lastScrollRef.current;
      const heroHoldBoundary = hasHeroSection ? heroHoldBoundaryRef.current : 0;
      const inHeroHoldRange = hasHeroSection && currentScroll <= heroHoldBoundary;

      // Border shows as soon as user starts scrolling.
      setIsAtTop(currentScroll <= 0);

      if (inHeroHoldRange) {
        setIsNavbarVisible(true);
      } else if (currentScroll <= 20 || delta < -4) {
        setIsNavbarVisible(true);
      } else if (delta > 0) {
        setIsNavbarVisible(false);
      }

      lastScrollRef.current = currentScroll;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasHeroSection]);

  useLayoutEffect(() => {
    setIsPanelOpen(false);
    setIsNavbarVisible(true);
    setIsAtTop(true);
    lastScrollRef.current = 0;
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  useEffect(() => {
    if (!('scrollRestoration' in window.history)) {
      return undefined;
    }

    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isPanelOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPanelOpen]);

  return (
    <div className="relative overflow-x-hidden bg-bgBase text-inkStrong">
      <div className="blur-orb soft-drift -left-44 top-20 h-72 w-72" />
      <div className="blur-orb soft-drift right-[-8rem] top-[38%] h-80 w-80" />
      <div className="blur-orb soft-drift bottom-0 left-[30%] h-64 w-64" />

      <DecorativeFloral className="-left-14 top-[18%] h-64 w-44 floral-float opacity-30" />
      <DecorativeFloral className="-right-10 top-[59%] h-72 w-48 floral-float opacity-20" />

      <Navbar
        hasHeroSection={hasHeroSection}
        isAtTop={isAtTop}
        isVisible={isPanelOpen ? true : isNavbarVisible}
        onOpenMenu={() => setIsPanelOpen(true)}
      />
      <SidePanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />

      <main className={`${hasHeroSection ? 'pb-4' : 'pb-6 pt-[102px] md:pt-[112px]'} bg-bgBase`}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default PublicLayout;
