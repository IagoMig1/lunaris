import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import How from './components/HowWeWork';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import ProjectDetail from './pages/ProjectDetail';
import Technologies from './components/Technologies';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
export function App() {
  const [showCookieConsent, setShowCookieConsent] = useState(true);
  useEffect(() => {
    const hasConsented = localStorage.getItem('cookieConsent');
    if (hasConsented) {
      setShowCookieConsent(false);
    }
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowCookieConsent(false);
  };
  return <Router>
      <div className="bg-[#121212] text-white min-h-screen overflow-x-hidden">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<main>
                  <Hero />
                  <Stats />
                  <About />
                  <Technologies />
                  <Projects />
                  <Services />
                  
                  < How />
           
                  <Contact />
                </main>} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </AnimatePresence>
        <Footer />
        {showCookieConsent && <CookieConsent onAccept={handleAcceptCookies} />}
      </div>
    </Router>;
}