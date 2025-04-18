import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react';

export function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSending(true);
    setSent(false);

    emailjs
      .sendForm(
        'service_jn83v5k',
        'template_j98zp7m',
        form.current,
        'yiefrTycBq4INGfjY'
      )
      .then(
        () => {
          setIsSending(false);
          setSent(true);
          form.current?.reset();
        },
        (error) => {
          console.error(error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <section id="contato" className="w-full py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-[#292929] mb-4">
            Entre em <span className="text-blue-600">Contato</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para transformar suas ideias em realidade. Entre em
            contato e vamos conversar sobre o seu projeto.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 bg-[#eaeaea] rounded-xl p-8">
            <h3 className="text-2xl font-bold text-[#292929] mb-6">
              Envie uma mensagem
            </h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">
                  Nome
                </label>
                <input type="text" name="name" id="name" required className="w-full px-4 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Seu nome" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                  Email
                </label>
                <input type="email" name="email" id="email" required className="w-full px-4 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="seu.email@exemplo.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">
                  Mensagem
                </label>
                <textarea name="message" id="message" rows={4} required className="w-full px-4 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Como podemos ajudar?"></textarea>
              </div>
              <button type="submit" disabled={isSending} className="bg-[#292929] text-white font-bold py-3 px-6 rounded-md hover:bg-gray-800 transition-colors flex items-center gap-2">
                {isSending ? 'Enviando...' : 'Enviar mensagem'} <SendIcon size={18} />
              </button>
              {sent && <p className="text-green-600 font-medium">Mensagem enviada com sucesso!</p>}
            </form>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-[#292929] mb-6">
              Informações de contato
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <MailIcon size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-[#292929]">Email</h4>
                  <p className="text-gray-600">contatolunaris@outlook.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <PhoneIcon size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-[#292929]">Telefone</h4>
                  <p className="text-gray-600">(12) 99725-1473</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <MapPinIcon size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-[#292929]">Localização</h4>
                  <p className="text-gray-600">R. Treze de Maio, 311 - Centro, Caçapava - SP, 12281-460</p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-[#292929] rounded-xl text-white">
              <h4 className="font-bold text-xl mb-2">Vamos trabalhar juntos!</h4>
              <p>
                Estou disponível para novos projetos e parcerias. Entre em
                contato para discutirmos como posso ajudar a impulsionar seu
                negócio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
