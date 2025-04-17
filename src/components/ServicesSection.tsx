import React from 'react';
import { CodeIcon, DatabaseIcon, LineChartIcon, LayoutIcon, SearchIcon, MessageSquareIcon } from 'lucide-react';
export function ServicesSection() {
  const services = [{
    icon: <CodeIcon size={28} className="text-blue-600" />,
    title: 'Desenvolvimento Web',
    description: 'Sites responsivos, landing pages e aplicações web com foco em usabilidade e performance.'
  }, {
    icon: <DatabaseIcon size={28} className="text-blue-600" />,
    title: 'Banco de Dados',
    description: 'Estruturação, otimização e manutenção de bancos de dados para suas aplicações.'
  }, {
    icon: <LineChartIcon size={28} className="text-blue-600" />,
    title: 'Marketing Digital',
    description: 'Estratégias personalizadas para aumentar sua presença online e atrair mais clientes.'
  }, {
    icon: <LayoutIcon size={28} className="text-blue-600" />,
    title: 'UI/UX Design',
    description: 'Interfaces modernas e intuitivas que proporcionam a melhor experiência para seus usuários.'
  }, {
    icon: <SearchIcon size={28} className="text-blue-600" />,
    title: 'SEO',
    description: 'Otimização para mecanismos de busca, garantindo melhor visibilidade para seu negócio.'
  }, {
    icon: <MessageSquareIcon size={28} className="text-blue-600" />,
    title: 'Consultoria',
    description: 'Orientação especializada para direcionar seus projetos digitais com eficiência.'
  }];
  return <section id="serviços" className="w-full py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-[#292929] mb-4">
            Nossos <span className="text-blue-600">Serviços</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Soluções completas para transformar sua presença digital com
            tecnologia de ponta e estratégias personalizadas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="mb-4 p-3 inline-block rounded-lg bg-gray-50">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#292929] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
}