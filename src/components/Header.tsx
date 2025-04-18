import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="sticky top-0 z-50 w-full bg-[#eaeaea] shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-[#292929] text-2xl font-black tracking-wider">
          
          <img src="/lunaris.png" alt="Lunaris Logo" className="h-5 mx-auto md:mx-0 mb-2" />
          </span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Início', 'Serviços', 'Sobre', 'Contato'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-[#292929] font-medium hover:text-blue-500 transition-colors">
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
            {['Início', 'Serviços', 'Sobre', 'Contato'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-[#292929] font-medium py-2 hover:text-purple-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
                {item}
              </a>)}
            <button className="bg-[#292929] text-white font-bold py-2 px-6 rounded-md hover:bg-gray-800 transition-colors w-full">
              Orçamento
            </button>
          </div>
        </nav>}
    </header>;
}