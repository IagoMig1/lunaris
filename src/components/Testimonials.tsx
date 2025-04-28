import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
const Testimonials = () => {
  const testimonials = [{
    name: 'Carlos Silva',
    role: 'CEO, TechStart',
    content: 'A Lunaris transformou completamente nossa presença digital. O profissionalismo e qualidade do trabalho superaram todas as expectativas.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }, {
    name: 'Ana Santos',
    role: 'Diretora de Marketing, Inovare',
    content: 'Impressionante como conseguiram captar exatamente nossa visão e transformá-la em realidade. Os resultados foram além do esperado.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  }, {
    name: 'Pedro Mendes',
    role: 'Fundador, HealthTech',
    content: 'A dedicação e expertise técnica da equipe Lunaris são incomparáveis. Entregaram um produto que realmente faz diferença no mercado.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  }];
  return <section className="py-20 bg-[#121212] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div className="absolute w-[500px] h-[500px] rounded-full bg-[#4e1b92]/10 blur-[120px]" animate={{
        x: [0, 100, 0],
        y: [0, 50, 0]
      }} transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'linear'
      }} style={{
        top: '-10%',
        right: '-10%'
      }} />
        <motion.div className="absolute w-[500px] h-[500px] rounded-full bg-[#23184d]/10 blur-[120px]" animate={{
        x: [0, -100, 0],
        y: [0, -50, 0]
      }} transition={{
        duration: 25,
        repeat: Infinity,
        ease: 'linear'
      }} style={{
        bottom: '-10%',
        left: '-10%'
      }} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
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
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos{' '}
            <span className="bg-gradient-to-r from-[#4e1b92] to-purple-300 bg-clip-text text-transparent">
              Clientes Dizem
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Veja o impacto que nosso trabalho tem gerado nos negócios de nossos
            clientes.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <motion.div key={testimonial.name} className="bg-[#1a1a1a] p-8 rounded-xl border border-[#282524] relative group" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.2
        }} whileHover={{
          y: -5
        }}>
              <Quote className="text-purple-300 mb-4" size={32} />
              <p className="text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <motion.img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" whileHover={{
              scale: 1.1
            }} />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Quote className="text-purple-300/20" size={48} />
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;