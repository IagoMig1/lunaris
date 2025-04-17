import React, { useState } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react';
import emailjs from 'emailjs-com';
export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      }, 'YOUR_USER_ID');
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setStatus('error');
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };
  return <section id="contato" className="w-full py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="mb-12 text-center reveal-hidden" ref={useScrollReveal()}>
          <h2 className="text-3xl md:text-5xl font-black text-[#292929] mb-4">
            Entre em <span className="text-blue-600">Contato</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para transformar suas ideias em realidade. Entre em
            contato e vamos conversar sobre o seu projeto.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 bg-[#eaeaea] rounded-xl p-8 reveal-hidden" ref={useScrollReveal()}>
            <h3 className="text-2xl font-bold text-[#292929] mb-6">
              Envie uma mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* ... existing form fields with added value and onChange ... */}
              <input type="text" id="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Seu nome" required />
              {/* ... repeat for email and message ... */}
              <button type="submit" disabled={status === 'loading'} className="bg-[#292929] text-white font-bold py-3 px-6 rounded-md hover:bg-gray-800 transition-colors flex items-center gap-2 disabled:opacity-50">
                {status === 'loading' ? 'Enviando...' : 'Enviar mensagem'}{' '}
                <SendIcon size={18} />
              </button>
              {status === 'success' && <p className="text-green-600">Mensagem enviada com sucesso!</p>}
              {status === 'error' && <p className="text-red-600">
                  Erro ao enviar mensagem. Tente novamente.
                </p>}
            </form>
          </div>
          {/* ... rest of the contact section ... */}
        </div>
      </div>
    </section>;
}