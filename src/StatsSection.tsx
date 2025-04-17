import React from 'react';
// ... existing imports ...
export function StatsSection() {
  const stats = [{
    icon: <Users2Icon size={32} className="text-blue-600" />,
    number: '50+',
    label: 'Clientes Satisfeitos'
  }, {
    icon: <StarIcon size={32} className="text-blue-600" />,
    number: '100+',
    label: 'Projetos Concluídos'
  }, {
    icon: <CodeIcon size={32} className="text-blue-600" />,
    number: '3+',
    label: 'Anos de Experiência'
  }];
  return <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => <div key={index} className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 reveal-hidden" ref={useScrollReveal()}>
              {stat.icon}
              <h3 className="text-4xl font-black text-[#292929] mt-4 mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>)}
        </div>
      </div>
    </section>;
}