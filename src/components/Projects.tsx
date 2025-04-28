import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Site de Agendamento de Barbearia',
      category: 'Desenvolvimento Web',
      description: 'Plataforma para agendamento de horários em barbearias com integração de calendário e notificações automáticas.',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80'
    },
    {
      id: 2,
      title: 'Chatbot para Líder Despachante',
      category: 'Marketing Digital',
      description: 'Chatbot automatizado para agilizar o atendimento e renovação de documentos no Líder Despachante.',
      image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 3,
      title: 'Site para Tayada Viagens',
      category: 'Desenvolvimento Web',
      description: 'Site de viagens com busca avançada e pacotes personalizados para destinos turísticos.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    }
    
    
  ];

  return (
    <section id="projects" className="py-20 bg-[#0f0f0f]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-[#4e1b92]/20 text-purple-300 text-sm font-medium mb-4">
            Nosso Trabalho
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projetos{' '}
            <span className="bg-gradient-to-r from-[#4e1b92] to-purple-300 bg-clip-text text-transparent">
              em Destaque
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore nosso portfólio de projetos de sucesso que demonstram nossa
            expertise e compromisso com a excelência.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 select-none pointer-events-none"
                  draggable="false"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-purple-300 font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-5">{project.description}</p>
                <Link
                  to={`/project/${project.id}`}
                  className="inline-flex items-center text-purple-300 hover:text-purple-200 transition-colors"
                >
                  <span className="mr-2">Ver Detalhes</span>
                  <motion.span
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRightIcon size={16} />
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
