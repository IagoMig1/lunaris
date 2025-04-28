import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Search, PenTool, Code2, Rocket, MessageCircle, LineChart, Heart } from 'lucide-react';

const ComoTrabalhamos = () => {
  const steps = [{
    icon: <MessageCircle size={32} className="text-purple-300" />,
    title: 'Descoberta',
    description: 'Reunião inicial para entender suas necessidades e objetivos do projeto.',
    delay: 0
  }, {
    icon: <Search size={32} className="text-purple-300" />,
    title: 'Análise',
    description: 'Pesquisa aprofundada e análise de requisitos técnicos.',
    delay: 0.1
  }, {
    icon: <PenTool size={32} className="text-purple-300" />,
    title: 'Planejamento',
    description: 'Desenvolvimento de estratégia e cronograma detalhado.',
    delay: 0.2
  }, {
    icon: <Code2 size={32} className="text-purple-300" />,
    title: 'Desenvolvimento',
    description: 'Implementação com foco em qualidade e melhores práticas.',
    delay: 0.3
  }, {
    icon: <LineChart size={32} className="text-purple-300" />,
    title: 'Testes',
    description: 'Testes rigorosos e otimizações de performance.',
    delay: 0.4
  }, {
    icon: <Rocket size={32} className="text-purple-300" />,
    title: 'Lançamento',
    description: 'Implementação suave e monitoramento inicial.',
    delay: 0.5
  }, {
    icon: <Heart size={32} className="text-purple-300" />,
    title: 'Suporte',
    description: 'Suporte contínuo e melhorias incrementais.',
    delay: 0.6
  }];

  return (
    <section className="py-20 bg-[#121212] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-[#4e1b92]/10 blur-[120px]"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            top: '-10%',
            right: '-10%'
          }}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-[#4e1b92]/20 text-purple-300 text-sm font-medium mb-4">
            Metodologia
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como
            <span className="bg-gradient-to-r from-[#4e1b92] to-purple-300 bg-clip-text text-transparent">
              {' '}
              Trabalhamos
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Nossa abordagem sistemática garante resultados excepcionais em cada
            projeto
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Grid para 4 colunas em telas grandes e 1 ou 2 em telas menores */}
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="w-full"
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: step.delay
              }}
            >
              <motion.div
                className="bg-[#1a1a1a] p-6 rounded-xl border border-[#282524] hover:border-[#4e1b92]/50 transition-all inline-block"
                whileHover={{
                  y: -5
                }}
              >
                <div className="flex items-center gap-4 justify-center">
                  <div className="bg-[#23184d]/20 p-4 rounded-lg">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoTrabalhamos;
