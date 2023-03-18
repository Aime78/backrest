import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import Home from './pages/HomePage/HomePage';
import ServicePage from './pages/ServicesPage/ServicePage';
import WorkPage from './pages/WorkPage/WorkPage';
import appRoutes from './routes/routes';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path={appRoutes.HOME} element={<Home />} />
        <Route path={appRoutes.WORK} element={<WorkPage />} />
        <Route path={appRoutes.ABOUT} element={<AboutUsPage />} />
        <Route path={appRoutes.SERVICES} element={<ServicePage />} />
        <Route path={appRoutes.CONTACT} element={<ContactUsPage />} />
      </Routes>
    </div>
  );
}

export default App;
