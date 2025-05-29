import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import ProjectDetail from './pages/ProjectDetail';

// Lazy-loaded components
const Hero = lazy(() => import('./components/Hero'));
const Stats = lazy(() => import('./components/Stats'));
const About = lazy(() => import('./components/About'));
const Technologies = lazy(() => import('./components/Technologies'));
const Projects = lazy(() => import('./components/Projects'));
const Services = lazy(() => import('./components/Services'));
const How = lazy(() => import('./components/HowWeWork'));
const Contact = lazy(() => import('./components/Contact'));

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }, [location.pathname]);
  return null;
}

export function App() {
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookieConsent');
    if (hasConsented) {
      setShowCookieConsent(false);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowCookieConsent(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-[#121212] text-white min-h-screen overflow-x-hidden">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Suspense fallback={<div className="text-center py-20">Carregando Hero...</div>}>
                    <Hero />
                  </Suspense>
                  <Suspense fallback={<div className="text-center py-20">Carregando estatísticas...</div>}>
                    <Stats />
                  </Suspense>
                  <Suspense fallback={<div className="text-center py-20">Carregando conteúdo...</div>}>
                    <About />
                    <Technologies />
                    <Projects />
                    <Services />
                    <How />
                    <Contact />
                  </Suspense>
                </>
              }
            />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </AnimatePresence>
        <Footer />
        {showCookieConsent && <CookieConsent onAccept={handleAcceptCookies} />}
      </div>
    </Router>
  );
}
