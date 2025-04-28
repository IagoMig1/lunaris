import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, CalendarIcon, UsersIcon, TagIcon, CheckCircleIcon } from 'lucide-react'

const ProjectDetail = () => {
  const {
    id
  } = useParams();
  const [project, setProject] = useState<any>(null);
  // Mock project data - in a real application, this would come from an API
  useEffect(() => {
    window.scrollTo(0, 0); // Rola para o topo da página
  }, [id]); // Executa toda vez que o `id` mudar
  
  useEffect(() => {
    // Simulate API call
    const projectData = {
      1: {
        title: 'Sistema de Agendamento para Barbearia',
        category: 'Desenvolvimento Web',
        client: 'Studio Barber 33',
        date: 'Março de 2025',
        description: 'O Sistema de Agendamento para Barbearia foi desenvolvido para facilitar o processo de agendamento de serviços para os clientes, com a possibilidade de escolher horários, serviços e estilistas de forma simples e rápida. A plataforma também oferece uma solução de pagamento integrada, permitindo que os clientes paguem diretamente no site.',
        challenges: 'O cliente precisava de uma solução que organizasse os agendamentos de forma eficiente, evitando overbooking e sobrecarga de trabalho. Além disso, foi necessário integrar um sistema de pagamentos e garantir a usabilidade em dispositivos móveis e desktop.',
        solution: 'Desenvolvemos uma plataforma responsiva com frontend em React, integrando funcionalidades de agendamento, pagamentos via Stripe e gerenciamento de horários e serviços. A interface foi projetada para ser intuitiva, facilitando a navegação tanto para clientes quanto para os profissionais da barbearia. O backend foi desenvolvido em Node.js, garantindo a sincronização em tempo real e a integridade dos dados.',
        results: ['Redução de 40% na sobrecarga de agendamentos manuais', 'Aumento de 25% na taxa de conversões de novos clientes', 'Melhoria na organização e fluxo de trabalho da equipe', 'Agendamentos mais rápidos e convenientes para os clientes'],
        technologies: ['React', 'Node.js', 'Stripe', 'Tailwind CSS', 'MongoDB'],
        image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
          'https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
          'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80'
        ]
      },
      
      2: {
        title: 'Chatbot para Líder Despachante',
        category: 'Desenvolvimento Web',
        client: 'Líder Despachante',
        date: 'Dezembro de 2024',
        description: 'O Chatbot para Líder Despachante foi desenvolvido para melhorar o atendimento ao cliente e automatizar o processo de coleta de informações. O chatbot permite que os clientes realizem consultas sobre serviços, iniciem protocolos, obtenham informações sobre documentos e sejam guiados no processo de forma rápida e eficiente, com integração ao sistema de agendamento e envio de mensagens automáticas.',
        challenges: 'O desafio foi criar um chatbot que fosse capaz de fornecer respostas precisas e automatizadas, mesmo em um mercado com grande demanda de informações, sem perder a personalização e a qualidade do atendimento. Era necessário garantir que a integração com o sistema de agendamento e protocolos fosse eficiente, além de manter uma experiência fluída tanto em dispositivos móveis quanto em desktop.',
        solution: 'Desenvolvemos o chatbot utilizando tecnologias como Node.js e integração com a plataforma de mensagens WhatsApp. A solução foi projetada para ser responsiva e intuitiva, com base em um banco de dados simples para armazenar respostas automatizadas. O chatbot também foi integrado ao sistema de agendamento para fornecer informações em tempo real e facilitar o início de protocolos de forma autônoma.',
        results: ['Redução de 50% no tempo de resposta ao cliente', 'Aumento de 30% na eficiência do atendimento ao cliente', 'Capacidade de atender a mais de 200 consultas por dia sem intervenção humana', 'Melhoria na satisfação dos clientes com atendimento mais rápido e prático'],
        technologies: ['Node.js', 'WhatsApp API', 'Supabase', 'Express', 'NLP'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        gallery: ['https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80', 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80']
      },
      
      3: {
        title: 'Site para Tayada Viagens',
        category: 'Desenvolvimento Web',
        client: 'Tayada Viagens',
        date: 'Janeiro de 2024',
        description: 'O site da Tayada Viagens foi desenvolvido para proporcionar uma experiência de navegação intuitiva e rápida para clientes que buscam destinos turísticos e pacotes de viagem. O site inclui funcionalidades de busca avançada, filtros de pacotes por tipo de viagem e personalização de ofertas, além de integração com plataformas de pagamento para facilitar a compra de pacotes diretamente pelo site.',
        challenges: 'O desafio foi criar uma plataforma moderna, responsiva e otimizada para dispositivos móveis, com uma interface amigável que facilitasse a busca e compra de pacotes turísticos. Além disso, o site precisava garantir a segurança nas transações online e oferecer uma navegação intuitiva para o público-alvo diversificado.',
        solution: 'Desenvolvemos um site responsivo utilizando HTML, CSS, JavaScript e integração com plataformas de pagamento seguras. A solução incluiu um sistema de busca dinâmico, com filtros de categorias de pacotes, e um processo de compra simplificado com integração de pagamentos via cartões e boleto bancário. O design foi focado em destacar as ofertas e criar uma experiência visual atraente para os visitantes.',
        results: ['Aumento de 25% nas vendas de pacotes online', 'Maior facilidade no processo de compra, com 40% de aumento na conversão', 'Melhoria na experiência do usuário, com redução de 30% na taxa de rejeição do site', 'Aumento significativo no tráfego do site, com 50% de visitantes novos'],
        technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'PayPal API', 'Stripe API'],
        image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        gallery: ['https://images.unsplash.com/photo-1551972873-b7e8754e8e26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80', 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1596558450268-9c27524ba856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80']
      }
      

    
    }[id as string];
    setProject(projectData);
  }, [id]);
  if (!project) {
    return <div className="min-h-screen flex items-center justify-center bg-[#121212]">
        <div className="w-16 h-16 border-4 border-[#4e1b92] border-t-transparent rounded-full animate-spin"></div>
      </div>;
  }
  return <div className="bg-[#121212] min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link to="/#projects" className="inline-flex items-center text-purple-300 hover:text-purple-200 transition-colors mb-8">
          <ArrowLeftIcon size={16} className="mr-2" />
          <span>Voltar</span>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <span className="inline-block px-4 py-1 rounded-full bg-[#4e1b92]/20 text-purple-300 text-sm font-medium mb-4">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              {project.title}
            </h1>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <div className="bg-[#4e1b92]/20 p-2 rounded-lg mr-3">
                  <CalendarIcon size={16} className="text-purple-300" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Data</p>
                  <p className="text-white">{project.date}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#4e1b92]/20 p-2 rounded-lg mr-3">
                  <UsersIcon size={16} className="text-purple-300" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Cliente</p>
                  <p className="text-white">{project.client}</p>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              {project.description}
            </p>
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Tecnologias Usadas</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, index: number) => <span key={index} className="bg-[#23184d]/50 text-purple-200 text-sm px-3 py-1 rounded-lg">
                    {tech}
                  </span>)}
              </div>
            </div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden select-none">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover pointer-events-none" draggable="false" />
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }}>
            <h2 className="text-2xl font-bold mb-6">O desafio</h2>
            <p className="text-gray-300 leading-relaxed">
              {project.challenges}
            </p>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }}>
            <h2 className="text-2xl font-bold mb-6"> Nossa solução </h2>
            <p className="text-gray-300 leading-relaxed">{project.solution}</p>
          </motion.div>
        </div>
        <motion.div className="mb-16" initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.5
      }}>
          <h2 className="text-2xl font-bold mb-6">Resultados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.results.map((result: string, index: number) => <div key={index} className="flex items-start bg-[#1a1a1a] p-4 rounded-lg">
                <CheckCircleIcon size={20} className="text-purple-300 mr-3 mt-0.5 shrink-0" />
                <p className="text-gray-300">{result}</p>
              </div>)}
          </div>
        </motion.div>

        
      </div>
    </div>;
};
export default ProjectDetail;