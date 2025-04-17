import React from 'react';
import { ArrowRightIcon, CodeIcon, DatabaseIcon, PieChartIcon } from 'lucide-react';
export function HeroSection() {
  return <section id="início" className="w-full py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        filter: 'grayscale(100%)'
      }}></div>
      </div>
      <div className="container mx-auto relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-7xl font-black text-[#292929] leading-tight mb-8">
              Soluções digitais{' '}
              <span className="text-blue-600">inovadoras</span> para o seu
              negócio
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              Desenvolvimento web, banco de dados e marketing digital para
              impulsionar sua presença online.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#292929] text-white font-bold py-4 px-8 rounded-md hover:bg-gray-800 transition-colors">
                Nossos serviços
              </button>
              <button className="bg-white border border-gray-200 text-[#292929] font-bold py-4 px-8 rounded-md flex items-center gap-2 hover:bg-gray-50 transition-colors">
                Saiba mais <ArrowRightIcon size={18} />
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80" alt="Digital Solutions" className="rounded-2xl shadow-lg w-full" />
          </div>
        </div>
      </div>
    </section>;
}