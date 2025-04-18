import React from 'react';
// ... existing imports ...
export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="início" className="w-full py-24 md:py-32 px-4 relative overflow-hidden">
      {/* ... existing background code ... */}
      <div className="container mx-auto relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="md:w-1/2 reveal-hidden" ref={useScrollReveal()}>
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
              <button onClick={() => scrollToSection('serviços')} className="bg-[#292929] text-white font-bold py-4 px-8 rounded-md hover:bg-gray-800 transition-colors">
                Nossos serviços
              </button>
              <button onClick={() => scrollToSection('projetos')} className="bg-white border border-gray-200 text-[#292929] font-bold py-4 px-8 rounded-md flex items-center gap-2 hover:bg-gray-50 transition-colors">
                Ver projetos <ArrowRightIcon size={18} />
              </button>
            </div>
          </div>
          <div className="md:w-1/2 reveal-hidden" ref={useScrollReveal()}>
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80" alt="Digital Solutions" className="rounded-2xl shadow-lg w-full" />
          </div>
        </div>
      </div>
    </section>;
}