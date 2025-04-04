import React, { useEffect, useRef } from 'react';
import { LineChart, Code, Smartphone, TrendingUp, Database, Search, Layout, Laptop } from 'lucide-react';
const services = [{
  icon: <TrendingUp className="h-10 w-10 text-purple-400 group-hover:text-white transition-colors" />,
  title: 'Marketing Digital',
  description: 'Campanhas estratégicas que impulsionam o crescimento e engajamento em todos os canais digitais.'
}, {
  icon: <Layout className="h-10 w-10 text-purple-400 group-hover:text-white transition-colors" />,
  title: 'Desenvolvimento Web',
  description: 'Sites e aplicações web personalizadas que proporcionam experiências excepcionais aos usuários.'
}, {
  icon: <Code className="h-10 w-10 text-purple-400 group-hover:text-white transition-colors" />,
  title: 'Desenvolvimento de Software',
  description: 'Soluções de software personalizadas que resolvem desafios complexos de negócios.'
}, {
  icon: <LineChart className="h-10 w-10 text-purple-400 group-hover:text-white transition-colors" />,
  title: 'Análise de Dados',
  description: 'Transforme seus dados em insights acionáveis que impulsionam decisões de negócios.'
}, {
  icon: <Smartphone className="h-10 w-10 text-purple-400 group-hover:text-white transition-colors" />,
  title: 'Desenvolvimento Mobile',
  description: 'Aplicativos móveis nativos e multiplataforma para iOS e Android.'
}, {
  icon: <Search className="h-10 w-10 text-purple-400 group-hover:text-white transition-colors" />,
  title: 'Otimização SEO',
  description: 'Melhore sua visibilidade online e atraia mais tráfego qualificado para seu site.'
}, {
  icon: <Laptop className="h-10 w-10 text-purple-400 group-hover:text-white transition-colors" />,
  title: 'Design UI/UX',
  description: 'Interfaces bonitas e intuitivas que melhoram o engajamento e a satisfação do usuário.'
}, {
  icon: <Database className="h-10 w-10 text-purple-400 group-hover:text-white transition-colors" />,
  title: 'Gestão de Banco de Dados',
  description: 'Soluções eficientes de banco de dados que garantem que seus dados estejam seguros e acessíveis.'
}];
const ServicesSection = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
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
    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });
    return () => {
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);
  return <section id="services" className="py-20 px-4 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Nossos Serviços
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços digitais para ajudar seu
            negócio a prosperar no cenário digital.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => <div key={index} ref={el => cardsRef.current[index] = el} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700/50
                group hover:bg-gradient-to-br hover:from-purple-900/50 hover:to-blue-900/50 hover:border-purple-500/50
                transition-all duration-300 transform hover:scale-105 opacity-0 translate-y-10" style={{
          transitionDelay: `${index * 100}ms`
        }}>
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
                {service.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ServicesSection;