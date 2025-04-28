import React from 'react';
import { motion } from 'framer-motion';
import { Code, BarChart, Globe, Smartphone, Megaphone, LineChart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code size={32} className="text-purple-300" />,
      title: 'Desenvolvimento Web',
      description: 'Websites e aplicações web personalizados, construídos com as tecnologias mais recentes e melhores práticas.'
    },
    {
      icon: <Smartphone size={32} className="text-purple-300" />,
      title: 'Aplicativos Mobile',
      description: 'Aplicativos nativos e multiplataforma que oferecem experiências excepcionais aos usuários.'
    },
    {
      icon: <Globe size={32} className="text-purple-300" />,
      title: 'Presença Digital',
      description: 'Estratégias digitais completas para estabelecer e fortalecer sua presença online.'
    },
    {
      icon: <Megaphone size={32} className="text-purple-300" />,
      title: 'Marketing Digital',
      description: 'Campanhas de marketing focadas em resultados, aumentando sua visibilidade e conversões.'
    },
    {
      icon: <BarChart size={32} className="text-purple-300" />,
      title: 'Análise de Dados',
      description: 'Insights e análises para decisões orientadas por dados e otimização de performance.'
    },
    {
      icon: <LineChart size={32} className="text-purple-300" />,
      title: 'Estratégia de Crescimento',
      description: 'Planejamento estratégico e implementação para acelerar o crescimento e o sucesso do seu negócio.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-[#4e1b92]/20 text-purple-300 text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que{' '}
            <span className="bg-gradient-to-r from-[#4e1b92] to-purple-300 bg-clip-text text-transparent">
              Fazemos
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Soluções completas em tecnologia e marketing, feitas sob medida para atender às necessidades e objetivos específicos do seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1a1a] p-8 rounded-xl border border-[#282524] hover:border-[#4e1b92]/50 transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="bg-[#23184d]/20 p-4 rounded-lg w-fit mb-6 group-hover:bg-[#4e1b92]/30 transition-all"
                whileHover={{
                  rotate: [0, -10, 10, -5, 0],
                  transition: { duration: 0.6 }
                }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
