import React from 'react';
import { CheckCircle, Star, Trophy, Users } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <CheckCircle size={32} className="text-purple-300" />,
      value: '100%',
      label: 'Satisfação',
      description: 'dos clientes satisfeitos',
    },
    {
      icon: <Trophy size={32} className="text-purple-300" />,
      value: '50+',
      label: 'Projetos',
      description: 'entregues com sucesso',
    },
    {
      icon: <Star size={32} className="text-purple-300" />,
      value: '5.0',
      label: 'Avaliação',
      description: 'média dos clientes',
    },
    {
      icon: <Users size={32} className="text-purple-300" />,
      value: '30+',
      label: 'Clientes',
      description: 'atendidos',
    },
  ];

  return (
    <section className="py-20 bg-[#0f0f0f]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-gradient-to-b from-[#23184d]/30 to-[#282524]/30 p-8 rounded-xl backdrop-blur-sm border border-white/5"
            >
              <div className="bg-[#4e1b92]/20 p-4 rounded-lg w-fit mb-6">
                {stat.icon}
              </div>

              <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#4e1b92] to-purple-300 bg-clip-text text-transparent">
                {stat.value}
              </h3>

              <h4 className="text-xl font-semibold mb-2">{stat.label}</h4>
              <p className="text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
