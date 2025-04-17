import React from 'react';
import { ExternalLinkIcon } from 'lucide-react';
export function ProjectsSection() {
  const projects = [{
    title: 'E-commerce Platform',
    description: 'Plataforma completa de e-commerce com sistema de pagamentos integrado.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2089&q=80',
    category: 'Web Development'
  }, {
    title: 'Banking Dashboard',
    description: 'Dashboard moderno para análise de dados financeiros.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'UI/UX Design'
  }, {
    title: 'Marketing Analytics',
    description: 'Sistema de análise de dados para campanhas de marketing.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80',
    category: 'Data Analysis'
  }];
  return <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#292929] mb-4">
            Nossos <span className="text-blue-600">Projetos</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <div key={index} className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3]">
                <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm font-medium mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.description}</p>

                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}