import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contato = () => {
  const [statusFormulario, setStatusFormulario] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [dadosFormulario, setDadosFormulario] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const enviarFormulario = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusFormulario('loading');
    try {
      await emailjs.send('service_cc1uiy9', 'template_rp01wc5', {
        from_name: dadosFormulario.nome,
        from_email: dadosFormulario.email,
        subject: dadosFormulario.assunto,
        message: dadosFormulario.mensagem
      }, '3T4kw0p6ndOYvtYBv');
      setStatusFormulario('success');
      setDadosFormulario({
        nome: '',
        email: '',
        assunto: '',
        mensagem: ''
      });
      setTimeout(() => {
        setStatusFormulario('idle');
      }, 5000);
    } catch (error) {
      setStatusFormulario('error');
      setTimeout(() => {
        setStatusFormulario('idle');
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDadosFormulario(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-[#4e1b92]/20 text-purple-300 text-sm font-medium mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos{' '}
            <span className="bg-gradient-to-r from-[#4e1b92] to-purple-300 bg-clip-text text-transparent">
              Conversar
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tem um projeto em mente ou quer saber mais sobre nossos serviços?
            Adoraríamos ouvir você.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div className="lg:col-span-2 bg-[#1a1a1a] p-8 rounded-xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#4e1b92]/20 p-3 rounded-lg mr-4">
                  <MailIcon size={20} className="text-purple-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white">contato@itslunaris.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#4e1b92]/20 p-3 rounded-lg mr-4">
                  <PhoneIcon size={20} className="text-purple-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Telefone</p>
                  <p className="text-white">12 99725-1473</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#4e1b92]/20 p-3 rounded-lg mr-4">
                  <MapPinIcon size={20} className="text-purple-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Localização</p>
                  <p className="text-white">Caçapava - SP</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-3 bg-[#1a1a1a] p-8 rounded-xl relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>

            {statusFormulario === 'success' && (
              <motion.div className="absolute top-4 right-4 flex items-center bg-green-500/20 text-green-300 px-4 py-2 rounded-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle size={16} className="mr-2" />
                Mensagem enviada com sucesso!
              </motion.div>
            )}

            {statusFormulario === 'error' && (
              <motion.div className="absolute top-4 right-4 flex items-center bg-red-500/20 text-red-300 px-4 py-2 rounded-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <AlertCircle size={16} className="mr-2" />
                Erro ao enviar a mensagem. Tente novamente.
              </motion.div>
            )}

            <form onSubmit={enviarFormulario}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="nome" className="block text-sm text-gray-400 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    value={dadosFormulario.nome}
                    onChange={handleChange}
                    className="w-full bg-[#282524] border border-[#3a3a3a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#4e1b92] transition-colors"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={dadosFormulario.email}
                    onChange={handleChange}
                    className="w-full bg-[#282524] border border-[#3a3a3a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#4e1b92] transition-colors"
                    placeholder="Seu email"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="assunto" className="block text-sm text-gray-400 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="assunto"
                  value={dadosFormulario.assunto}
                  onChange={handleChange}
                  className="w-full bg-[#282524] border border-[#3a3a3a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#4e1b92] transition-colors"
                  placeholder="Assunto"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="mensagem" className="block text-sm text-gray-400 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  rows={5}
                  value={dadosFormulario.mensagem}
                  onChange={handleChange}
                  className="w-full bg-[#282524] border border-[#3a3a3a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#4e1b92] transition-colors resize-none"
                  placeholder="Sua mensagem"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="px-6 py-3 bg-[#4e1b92] hover:bg-[#5f2ba3] text-white font-medium rounded-lg transition-all flex items-center justify-center disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={statusFormulario === 'loading'}
              >
                <span>{statusFormulario === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}</span>
                <SendIcon size={16} className="ml-2" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
