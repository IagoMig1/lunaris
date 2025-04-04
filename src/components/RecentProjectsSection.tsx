import React, { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
const projects = [{
  title: 'Plataforma de Chatbot',
  category: 'Desenvolvimento Web',
  description: 'Redesign completo e desenvolvimento de uma plataforma e-commerce com UX aprimorada e maior taxa de conversão.',
  imageUrl: 'https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS']
}, {
  title: 'Dashboard de Analytics Marketing',
  category: 'Análise de Dados',
  description: 'Dashboard personalizado para acompanhamento e otimização de desempenho de campanhas de marketing.',
  imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  tags: ['Visualização de Dados', 'Python', 'Tableau', 'Google Analytics']
}, {
  title: 'Aplicativo de Gestão Financeira',
  category: 'Desenvolvimento de Software',
  description: 'Aplicativo bancário móvel seguro e amigável com autenticação biométrica.',
  imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  tags: ['React Native', 'Firebase', 'Segurança', 'UX Design']
}, {
  title: 'Campanha de Mídia Social',
  category: 'Marketing Digital',
  description: 'Campanha multiplataforma de mídia social que aumentou a conscientização da marca em 45%.',
  imageUrl: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80',
  tags: ['Mídia Social', 'Estratégia de Conteúdo', 'Analytics', 'Branding']
}, {
  title: 'Sistema de Gestão de Estoque',
  category: 'Desenvolvimento de Software',
  description: 'Solução personalizada de gestão de estoque com rastreamento e relatórios em tempo real.',
  imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  tags: ['JavaScript', 'SQL', 'Integração API', 'Design Responsivo']
}, {
  title: 'Redesign de Site Corporativo',
  category: 'Desenvolvimento Web',
  description: 'Redesign moderno e responsivo de website para uma empresa de serviços financeiros.',
  imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  tags: ['HTML5', 'CSS3', 'JavaScript', 'SEO']
}];
const RecentProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);
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
    projectsRef.current.forEach(project => {
      if (project) observer.observe(project);
    });
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      projectsRef.current.forEach(project => {
        if (project) observer.unobserve(project);
      });
    };
  }, []);
  return <section id="projects" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto">
        <div ref={sectionRef} className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Projetos Recentes
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore nossos últimos trabalhos e veja como ajudamos nossos
            clientes a alcançar seus objetivos digitais.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <div key={index} ref={el => projectsRef.current[index] = el} className="opacity-0 translate-y-10 transition-all duration-700" style={{
          transitionDelay: `${index * 100}ms`
        }}>
              <ProjectCard {...project} />
            </div>)}
        </div>
      </div>
    </section>;
};
export default RecentProjectsSection;