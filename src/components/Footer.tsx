import React from 'react';
import { InstagramIcon, LinkedinIcon, GithubIcon } from 'lucide-react';
export function Footer() {
  return <footer className="w-full bg-[#eaeaea] py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <span className="text-[#292929] text-2xl font-black tracking-wider">
              LUNÁRIS<span className="text-blue-600">.</span>
            </span>
            <p className="text-gray-600 mt-2 max-w-xs">
              Soluções digitais inovadoras para transformar sua presença online.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="p-2 bg-[#292929] text-white rounded-full hover:bg-gray-800 transition-colors">
              <InstagramIcon size={20} />
            </a>
            <a href="#" className="p-2 bg-[#292929] text-white rounded-full hover:bg-gray-800 transition-colors">
              <LinkedinIcon size={20} />
            </a>
            <a href="#" className="p-2 bg-[#292929] text-white rounded-full hover:bg-gray-800 transition-colors">
              <GithubIcon size={20} />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Lunáris. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors text-sm">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors text-sm">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>;
}