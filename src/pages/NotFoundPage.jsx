import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div className="glass-panel-strong droplet-corner max-w-xl p-9 sm:p-12">
        <p className="section-label text-gold">404</p>
        <h1 className="mt-4 font-serif text-[44px] leading-[0.95] text-inkStrong sm:text-[60px]">Page Not Found</h1>
        <p className="mx-auto mt-5 max-w-xl text-[14px] leading-[1.8] text-inkSoft">
          The page you requested does not exist. Return to the homepage to continue exploring Veloura Estate.
        </p>
        <Link
          to="/"
          className="mt-9 inline-flex min-h-12 items-center justify-center rounded-full border border-gold bg-gold px-8 py-3 text-[11px] uppercase tracking-[0.22em] text-white shadow-[0_10px_26px_rgba(176,141,109,0.22)] transition-all duration-300 ease-luxe hover:border-goldDeep hover:bg-goldDeep"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}

export default NotFoundPage;
