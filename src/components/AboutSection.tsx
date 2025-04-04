import React, { useEffect, useRef } from 'react';
import { Code2, Rocket, Users, Zap } from 'lucide-react';
const stats = [{
  icon: <Users className="h-6 w-6" />,
  value: '10+',
  label: 'Clientes Satisfeitos'
}, {
  icon: <Code2 className="h-6 w-6" />,
  value: '50+',
  label: 'Projetos Entregues'
}, {
  icon: <Rocket className="h-6 w-6" />,
  value: '1+',
  label: 'Anos de Experiência'
}, {
  icon: <Zap className="h-6 w-6" />,
  value: '24/7',
  label: 'Suporte Técnico'
}];
const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    cardRefs.current.forEach(card => {
      if (card) observer.observe(card);
    });
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      cardRefs.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);
  return <section id="about" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      <div className="container mx-auto relative z-10">
        <div ref={sectionRef} className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Sobre a Lunaris
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Somos uma equipe apaixonada por transformar visões em realidade
            digital, combinando criatividade e tecnologia para entregar soluções
            excepcionais.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div ref={el => cardRefs.current[0] = el} className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 opacity-0 translate-y-10 transition-all duration-700" style={{
          transitionDelay: '200ms'
        }}>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Nossa Missão
            </h3>
            <p className="text-gray-300 mb-4">
              Capacitar empresas através da tecnologia, fornecendo soluções
              digitais inovadoras que impulsionam o crescimento e o sucesso de
              nossos clientes.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-purple-400"></div>
                Excelência em cada projeto
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-purple-400"></div>
                Inovação constante
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-purple-400"></div>
                Compromisso com resultados
              </li>
            </ul>
          </div>
          <div ref={el => cardRefs.current[1] = el} className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 opacity-0 translate-y-10 transition-all duration-700" style={{
          transitionDelay: '400ms'
        }}>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Nossa Visão
            </h3>
            <p className="text-gray-300 mb-4">
              Ser referência em transformação digital, reconhecida pela
              excelência em soluções tecnológicas e pelo impacto positivo que
              geramos nos negócios de nossos clientes.
            </p>
            <div className="relative h-40 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
              <div className="relative z-10 h-full flex items-center justify-center">
                <span className="text-xl font-medium text-white text-center px-4">
                  "Transformando o futuro digital, hoje."
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => <div key={index} ref={el => cardRefs.current[index + 2] = el} className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 text-center
                transform hover:scale-105 transition-all duration-300 opacity-0 translate-y-10" style={{
          transitionDelay: `${(index + 3) * 200}ms`
        }}>
              <div className="flex justify-center mb-4 text-purple-400">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default AboutSection;