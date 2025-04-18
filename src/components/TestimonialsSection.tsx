import React from 'react';
import { StarIcon } from 'lucide-react';
export function TestimonialsSection() {
  const testimonials = [{
    name: 'Carlos Eduardo',
    role: 'Fundador | Studio Barber 33',
    image: '/carlos.jpg',
    text: 'A Lunaris superou todas as nossas expectativas. O projeto foi entregue no prazo e com excelente qualidade.'
  }, {
    name: 'Patricia Helena',
    role: 'Fundadora | Líder Despachante',
    image: '/pat.jpg',
    text: 'Profissionalismo e dedicação excepcionais. Recomendo fortemente os serviços da Lunaris.'
  }, {
    name: 'Pétala Lacerda',
    role: 'Ex Prefeita de Caçapava - SP',
    image: '/pet.jpg',
    text: 'Excelente parceria técnica. A equipe demonstrou grande conhecimento e comprometimento.'
  }];
  return <section className="w-full py-20 bg-[#eaeaea]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#292929] mb-4">
            O que nossos <span className="text-blue-600">clientes</span> dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é o nosso maior reconhecimento.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => <StarIcon key={i} size={16} className="text-yellow-400 fill-current" />)}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-[#292929]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}