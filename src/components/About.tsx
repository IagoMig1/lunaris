import React from 'react';
import { motion } from 'framer-motion';
import { UserIcon, CalendarIcon, BriefcaseIcon, RocketIcon } from 'lucide-react';

const Sobre = () => {
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 60
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-[#0f0f0f]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2
          }}
          variants={fadeInUp}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-[#4e1b92]/20 text-purple-300 text-sm font-medium mb-4">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quem é{' '}
            <span className="bg-gradient-to-r from-[#4e1b92] to-purple-300 bg-clip-text text-transparent">
              Lunaris
            </span>
            ?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Uma empresa de tecnologia e marketing com visão futurista, dedicada a
            ajudar negócios a prosperarem no cenário digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[{
            icon: <CalendarIcon size={24} className="text-purple-300" />,
            title: 'Fundada em 2024',
            description: 'Nasceu com a visão de transformar a forma como os negócios utilizam tecnologia e marketing.'
          }, {
            icon: <UserIcon size={24} className="text-purple-300" />,
            title: 'Agência Boutique',
            description: 'Uma operação especializada de uma única pessoa, oferecendo atenção personalizada e expertise focada.'
          }, {
            icon: <BriefcaseIcon size={24} className="text-purple-300" />,
            title: 'Tecnologia & Marketing',
            description: 'Expertise dupla em soluções tecnológicas de ponta e abordagens estratégicas de marketing.'
          }, {
            icon: <RocketIcon size={24} className="text-purple-300" />,
            title: 'Foco em Inovação',
            description: 'Explorando constantemente novas tecnologias e estratégias para manter os clientes à frente da concorrência.'
          }].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-[#23184d]/30 to-[#282524]/30 p-8 rounded-xl backdrop-blur-sm border border-white/5 hover:border-[#4e1b92]/30 transition-all"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2
              }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1
                  }
                }
              }}
              whileHover={{
                y: -10,
                transition: {
                  duration: 0.3
                }
              }}
            >
              <div className="bg-[#4e1b92]/20 p-3 rounded-lg w-fit mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sobre;
