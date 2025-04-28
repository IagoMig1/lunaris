import React, { Children } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon } from 'lucide-react';
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
const MobileMenu = ({
  isOpen,
  onClose
}: MobileMenuProps) => {
  const menuItems = [{
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
  }];
  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: '0%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants = {
    closed: {
      x: 50,
      opacity: 0
    },
    open: {
      x: 0,
      opacity: 1
    }
  };
  return <AnimatePresence>
      {isOpen && <>
          <motion.div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} onClick={onClose} />
          <motion.div className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-gradient-to-b from-[#23184d] to-[#282524] z-50 p-6 flex flex-col" variants={menuVariants} initial="closed" animate="open" exit="closed">
            <div className="flex justify-between items-center mb-8">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#4e1b92] to-purple-300 bg-clip-text text-transparent">
                LUNARIS
              </span>
              <button onClick={onClose} className="text-white">
                <XIcon size={24} />
              </button>
            </div>
            <nav className="flex flex-col space-y-6">
              {menuItems.map(item => <motion.a key={item.href} href={`#${item.href}`} className="text-xl text-white hover:text-purple-300 transition-colors" variants={itemVariants} onClick={onClose} whileTap={{
            scale: 0.95
          }}>
                  {item.text}
                </motion.a>)}
            </nav>
            <motion.div className="mt-auto pt-8 border-t border-white/20" variants={itemVariants}>
              <p className="text-sm text-white/70">
                Fundada em 2024
                <br />
                Lunaris Technology
              </p>
            </motion.div>
          </motion.div>
        </>}
    </AnimatePresence>;
};
export default MobileMenu;