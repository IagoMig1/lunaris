import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, XCircle, Loader } from 'lucide-react';
const ContactSection = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setFormStatus('loading');
    try {
      await emailjs.sendForm('service_jn83v5k', 'template_nq5n6s6', formRef.current, 'yiefrTycBq4INGfjY');
      setFormStatus('success');
      formRef.current.reset();
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus('error');
      setErrorMessage('Algo deu errado. Por favor, tente novamente.');
      setTimeout(() => {
        setFormStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };
  return <section id="contact" className="py-20 px-4 bg-gray-950 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Entre em Contato
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Tem um projeto em mente ou quer saber mais sobre nossos serviços?
            Envie-nos uma mensagem e entraremos em contato em breve.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <form ref={formRef} onSubmit={handleSubmit} className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Nome
                </label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white" placeholder="Seu nome" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white" placeholder="seu.email@exemplo.com" />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                Assunto
              </label>
              <input type="text" id="subject" name="subject" required className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white" placeholder="Como podemos ajudar?" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Mensagem
              </label>
              <textarea id="message" name="message" required rows={5} className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white resize-none" placeholder="Conte-nos sobre seu projeto..."></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button type="submit" disabled={formStatus === 'loading'} className={`px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg text-white font-medium
                flex items-center justify-center gap-2 transition-all duration-300 ${formStatus === 'loading' ? 'opacity-70 cursor-not-allowed' : 'hover:from-purple-700 hover:to-blue-600 transform hover:scale-105'}`}>
                {formStatus === 'idle' && <>
                    Enviar Mensagem <Send className="h-4 w-4" />
                  </>}
                {formStatus === 'loading' && <>
                    Enviando... <Loader className="h-4 w-4 animate-spin" />
                  </>}
                {formStatus === 'success' && <>
                    Enviado com Sucesso <CheckCircle className="h-4 w-4" />
                  </>}
                {formStatus === 'error' && <>
                    Tentar Novamente <XCircle className="h-4 w-4" />
                  </>}
              </button>
              {formStatus === 'success' && <span className="text-green-400 text-sm animate-fadeIn">
                  Mensagem enviada com sucesso!
                </span>}
              {formStatus === 'error' && <span className="text-red-400 text-sm animate-fadeIn">
                  Algo deu errado. Por favor, tente novamente.
                </span>}
            </div>
          </form>
        </div>
      </div>
    </section>;
};
export default ContactSection;