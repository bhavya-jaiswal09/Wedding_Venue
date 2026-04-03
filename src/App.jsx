import { Navigate, Route, Routes } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import AboutUsPage from './pages/AboutUsPage';
import BlogsPage from './pages/BlogsPage';
import ContactUsPage from './pages/ContactUsPage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import OurMenusPage from './pages/OurMenusPage';
import SubpageTemplate from './pages/SubpageTemplate';
import VenuePage from './pages/VenuePage';
import { subpageConfigs, subpageRoutes } from './data/pageConfigs';

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/our-menus" element={<OurMenusPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/venue" element={<VenuePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />

        {subpageRoutes.map((path) => (
          <Route key={path} path={path} element={<SubpageTemplate config={subpageConfigs[path]} />} />
        ))}

        <Route path="/home" element={<Navigate to="/" replace />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
