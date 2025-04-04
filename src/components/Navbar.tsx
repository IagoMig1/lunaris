import React, { useEffect, useState } from 'react';
import { Menu, X, MoonStar } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };
  return <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MoonStar className="h-8 w-8 text-purple-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Lunaris
              </span>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-purple-400 transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('about')} className="hover:text-purple-400 transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection('services')} className="hover:text-purple-400 transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-purple-400 transition-colors">
                Projetos
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-purple-400 transition-colors">
                Contato
              </button>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="p-2 text-gray-200 focus:outline-none z-50 relative">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 bg-gray-950/80 backdrop-blur-md z-40 md:hidden transition-opacity duration-300
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)} />
      <div className={`fixed top-0 right-0 w-64 h-full bg-gray-900 z-50 md:hidden
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-6 space-y-6 mt-16">
          <button onClick={() => scrollToSection('home')} className="text-left py-2 text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-2">
            Início
          </button>
          <button onClick={() => scrollToSection('about')} className="text-left py-2 text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-2">
            Sobre
          </button>
          <button onClick={() => scrollToSection('services')} className="text-left py-2 text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-2">
            Serviços
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-left py-2 text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-2">
            Projetos
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-2">
            Contato
          </button>
          <div className="pt-6 mt-6 border-t border-gray-800">
            <div className="text-sm text-gray-400">Precisa de ajuda?</div>
            <a href="mailto:contato@lunaris.com" className="mt-2 inline-block text-purple-400 hover:text-purple-300 transition-colors">
              contato@lunaris.com
            </a>
          </div>
        </div>
      </div>
    </>;
};
export default Navbar;