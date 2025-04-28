import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import MobileMenu from './MobileMenu';
import logo from "../../assets/logo.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <>
      <motion.header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#121212]/80 backdrop-blur-md py-3' : 'bg-transparent py-5'}`} initial={{
      y: -100
    }} animate={{
      y: 0
    }} transition={{
      duration: 0.5
    }}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <motion.div whileHover={{
              scale: 1.05
            }} transition={{
              type: 'spring',
              stiffness: 400,
              damping: 10
            }}>
               <span className="text-2xl font-bold bg-gradient-to-r from-[#4e1b92] to-purple-300 bg-clip-text text-transparent">
               <img
  src={logo} // Caminho para o logo.png
  alt="Logo"
  className="w-12 h-12 md:w-16 md:h-16 object-contain"
/>


</span>

              </motion.div>
            </Link>
            <nav className="hidden md:flex items-center space-x-10">
              {[{
              text: 'Início',
              href: 'home'
            }, {
              text: 'Sobre',
              href: 'about'
            }, {
              text: 'Serviços',
              href: 'services'
            }, {
              text: 'Projetos',
              href: 'projects'
            }, {
              text: 'Contato',
              href: 'contact'
            }].map(item => <motion.a key={item.href} href={`#${item.href}`} className="text-sm text-white/80 hover:text-white transition-colors relative group" whileHover={{
              y: -2
            }} transition={{
              duration: 0.2
            }}>
                  {item.text}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>)}
            </nav>
            <button className="md:hidden text-white/80 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(true)}>
              <MenuIcon size={24} />
            </button>
          </div>
        </div>
      </motion.header>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>;
};
export default Header;