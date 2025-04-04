import React, { useEffect, useRef } from 'react';
import GalaxyBackground from './GalaxyBackground';
import { ChevronDown } from 'lucide-react';
const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const {
        clientX,
        clientY
      } = e;
      const {
        width,
        height,
        top,
        left
      } = sectionRef.current.getBoundingClientRect();
      const x = (clientX - left - width / 2) / 25;
      const y = (clientY - top - height / 2) / 25;
      const content = sectionRef.current.querySelector('.hero-content') as HTMLElement;
      if (content) {
        content.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return <section id="home" ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <GalaxyBackground />
      <div className="hero-content relative z-10 text-center px-4 transition-transform duration-300 ease-out">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Lunaris
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-300">
          Transformando ideias em realidade digital através de marketing,
          desenvolvimento e análise de dados
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => document.getElementById('services')?.scrollIntoView({
          behavior: 'smooth'
        })} className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white font-medium 
            hover:from-purple-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Nossos Serviços
          </button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({
          behavior: 'smooth'
        })} className="px-8 py-3 bg-transparent border border-purple-400 rounded-full text-white font-medium 
            hover:bg-purple-900/20 transition-all duration-300 transform hover:scale-105">
            Entre em Contato
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10" onClick={() => document.getElementById('services')?.scrollIntoView({
      behavior: 'smooth'
    })}>
        <ChevronDown className="h-8 w-8 text-purple-400" />
      </div>
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-blue-400 opacity-70 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-purple-500 opacity-60 animate-pulse" style={{
      animationDelay: '1s'
    }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-indigo-400 opacity-70 animate-pulse" style={{
      animationDelay: '1.5s'
    }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-blue-500 opacity-60 animate-pulse" style={{
      animationDelay: '0.5s'
    }}></div>
    </section>;
};
export default HeroSection;