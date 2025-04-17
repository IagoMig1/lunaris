import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ['Início', 'Serviços', 'Projetos', 'Sobre', 'Contato'];
  return <header className="sticky top-0 z-50 w-full bg-[#eaeaea] shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-[#292929] text-2xl font-black tracking-wider">
            LUNARIS<span className="text-blue-500">.</span>
          </span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-[#292929] font-medium hover:text-blue-600 transition-colors">
              {item}
            </a>)}
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#292929]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <nav className="md:hidden bg-[#eaeaea] py-4 px-4 border-t border-gray-200">
          <div className="flex flex-col space-y-4">
            {menuItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-[#292929] font-medium py-2 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                {item}
              </a>)}
          </div>
        </nav>}
    </header>;
}