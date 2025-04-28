import React from 'react';
import { motion } from 'framer-motion';
import { Boxes, BrainCircuit, Cloud, Code2, Database, Layout, Shield, Smartphone } from 'lucide-react';
const Technologies = () => {
  const techStacks = [{
    category: 'Frontend',
    icon: <Layout size={32} />,
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  }, {
    category: 'Backend',
    icon: <Database size={32} />,
    techs: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL']
  }, {
    category: 'Mobile',
    icon: <Smartphone size={32} />,
    techs: ['React Native', 'Expo', 'Android', 'iOS']
  }, {
    category: 'DevOps',
    icon: <Cloud size={32} />,
    techs: ['AWS', 'Docker', 'CI/CD', 'Git']
  }, {
    category: 'Segurança',
    icon: <Shield size={32} />,
    techs: ['JWT', 'OAuth', 'HTTPS', 'Criptografia']
  }, {
    category: 'UI/UX',
    icon: <Boxes size={32} />,
    techs: ['Figma', 'Adobe XD', 'Prototyping', 'Design System']
  }, {
    category: 'Inteligência Artificial',
    icon: <BrainCircuit size={32} />,
    techs: ['Machine Learning', 'APIs IA', 'Automação', 'Chatbots']
  }, {
    category: 'Clean Code',
    icon: <Code2 size={32} />,
    techs: ['SOLID', 'DRY', 'TDD', 'Code Review']
  }];
  return <section className="py-20 bg-[#0f0f0f]">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          <span className="inline-block px-4 py-1 rounded-full bg-[#4e1b92]/20 text-purple-300 text-sm font-medium mb-4">
            Nossa Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tecnologias que{' '}
            <span className="bg-gradient-to-r from-[#4e1b92] to-purple-300 bg-clip-text text-transparent">
              Dominamos
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Utilizamos as tecnologias mais modernas e robustas do mercado para
            entregar soluções de alta qualidade.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStacks.map((stack, index) => <motion.div key={stack.category} className="bg-[#1a1a1a] p-6 rounded-xl border border-[#282524] hover:border-[#4e1b92]/50 transition-all group" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} whileHover={{
          y: -5
        }}>
              <motion.div className="bg-[#23184d]/20 p-4 rounded-lg w-fit mb-4 group-hover:bg-[#4e1b92]/30 transition-all" whileHover={{
            rotate: [0, -10, 10, -5, 0]
          }} transition={{
            duration: 0.6
          }}>
                {stack.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">{stack.category}</h3>
              <div className="space-y-2">
                {stack.techs.map((tech, techIndex) => <motion.div key={tech} className="flex items-center space-x-2" initial={{
              opacity: 0,
              x: -10
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.3,
              delay: index * 0.1 + techIndex * 0.1
            }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span className="text-gray-300">{tech}</span>
                  </motion.div>)}
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Technologies;