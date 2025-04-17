import React from 'react';
import { CheckIcon } from 'lucide-react';
export function AboutSection() {
  const highlights = ['Empresa com 3 anos de experiência no mercado', 'Atendimento personalizado e direto', 'Soluções adaptadas ao seu negócio', 'Compromisso com qualidade e prazos'];
  return <section id="sobre" className="w-full py-20 px-4 bg-[#eaeaea]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative">
            <div className="w-full h-80 md:h-96 bg-[#292929] rounded-2xl relative z-10"></div>
            <div className="absolute w-full h-full top-4 left-4 border-2 border-gray-300 rounded-2xl z-0"></div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-black text-[#292929] mb-6">
              Sobre a <span className="text-blue-600">Lunáris</span>
            </h2>
            <p className="text-gray-600 mb-6">
              A Lunáris é uma empresa jovem e dinâmica de tecnologia, com 3 anos
              de atuação no mercado. Apesar do tamanho compacto, entregamos
              soluções robustas e personalizadas para cada cliente.
            </p>
            <p className="text-gray-600 mb-8">
              Nossa abordagem única combina agilidade, criatividade e
              conhecimento técnico para desenvolver projetos que realmente fazem
              diferença para nossos clientes.
            </p>
            <div className="space-y-3">
              {highlights.map((item, index) => <div key={index} className="flex items-center gap-3">
                  <div className="bg-blue-600 rounded-full p-1">
                    <CheckIcon size={16} className="text-white" />
                  </div>
                  <span className="text-gray-600">{item}</span>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}