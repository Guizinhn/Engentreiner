import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from '../utils/motion';
import { useReducedMotion } from '../providers/ReducedMotionProvider';

// 👉 Altere para o número oficial do WhatsApp (apenas dígitos, com DDI + DDD)
// Ex.: 55 (Brasil) + 11 (DDD SP) + número
const WHATSAPP_NUMBER = '5511996853405';

// Helpers -------------------------------------------------------------
const onlyDigits = (v: string) => v.replace(/\D+/g, '');

function buildWhatsAppMessage(data: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
}) {
  const name = data.name.trim();
  const email = data.email.trim();
  const phone = onlyDigits(data.phone);
  const company = (data.company || '').trim();
  const msg = data.message.trim();

  const linhas: string[] = [];
  linhas.push(`Olá! Gostaria de atendimento.`);

  if (name) linhas.push(`• Nome: ${name}`);
  if (company) linhas.push(`• Empresa: ${company}`);
  if (email) linhas.push(`• E-mail: ${email}`);
  if (phone) linhas.push(`• Telefone/WhatsApp: ${phone}`);

  if (msg) {
    linhas.push('—');
    linhas.push('Resumo da necessidade:');
    linhas.push(msg);
  }

  linhas.push('—');
  linhas.push('Enviado via formulário do site.');

  return linhas.join('\n');
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [ref, controls] = useInView(0.2);
  const { shouldReduceMotion } = useReducedMotion();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação mínima
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      alert('Por favor, preencha Nome, E-mail e Telefone.');
      return;
    }

    const texto = buildWhatsAppMessage(formData);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;

    // Abre o WhatsApp em nova aba (Web ou App)
    window.open(waUrl, '_blank');
  };

  const inputVariants = {
    focus: {
      scale: 1.01,
      boxShadow: '0 0 0 2px rgba(235, 8, 8, 0.3)',
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    }
  } as const;

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <motion.div
        className="container mx-auto px-4"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
      >
        <motion.div className="text-center mb-16" variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f2f2f] mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-[#eb0808] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <motion.div variants={fadeRight}>
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-[#2f2f2f] font-medium mb-2">
                  Nome
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eb0808]"
                  required
                  placeholder="Como prefere ser chamado(a)?"
                  whileFocus={shouldReduceMotion ? {} : (inputVariants as any).focus}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-[#2f2f2f] font-medium mb-2">
                  E-mail
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eb0808]"
                  required
                  placeholder="seuemail@empresa.com"
                  whileFocus={shouldReduceMotion ? {} : (inputVariants as any).focus}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-[#2f2f2f] font-medium mb-2">
                  Telefone / WhatsApp
                </label>
                <motion.input
                  type="tel"
                  id="phone"
                  name="phone"
                  inputMode="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eb0808]"
                  required
                  placeholder="(11) 9 9999-9999"
                  whileFocus={shouldReduceMotion ? {} : (inputVariants as any).focus}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="company" className="block text-[#2f2f2f] font-medium mb-2">
                  Empresa (opcional)
                </label>
                <motion.input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eb0808]"
                  placeholder="Sua empresa / projeto"
                  whileFocus={shouldReduceMotion ? {} : (inputVariants as any).focus}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-[#2f2f2f] font-medium mb-2">
                  Mensagem
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eb0808]"
                  required
                  placeholder="Descreva de forma objetiva o que você precisa."
                  whileFocus={shouldReduceMotion ? {} : (inputVariants as any).focus}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-[#eb0808] hover:bg-[#d10707] text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02, backgroundColor: '#d10707' }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                aria-label="Abrir conversa no WhatsApp com os dados informados"
              >
                Quero ser atendido
              </motion.button>

              {/* Dica sutil de privacidade/uso do WhatsApp */}
              <p className="text-xs text-gray-500 mt-3">
                Ao clicar, você será redirecionado(a) ao WhatsApp com uma mensagem pré-preenchida.
              </p>
            </motion.form>
          </motion.div>

          {/* Informações de contato */}
          <motion.div className="flex flex-col justify-center" variants={fadeLeft}>
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-[#2f2f2f] mb-6">Informações de Contato</h3>
              <motion.div
                className="space-y-6"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
              >
                <motion.div className="flex items-start" variants={fadeUp} whileHover={{ x: 5 }}>
                  <div className="mr-4 mt-1">
                    <Phone size={24} className="text-[#eb0808]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#2f2f2f]">Telefones</p>
                    <p className="text-[#2f2f2f]">(11) 3681-3768 | (11) 99685-3405</p>
                  </div>
                </motion.div>

                <motion.div className="flex items-start" variants={fadeUp} whileHover={{ x: 5 }}>
                  <div className="mr-4 mt-1">
                    <Mail size={24} className="text-[#eb0808]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#2f2f2f]">E-mail</p>
                    <p className="text-[#2f2f2f]">comercial@engetrainer.com.br</p>
                  </div>
                </motion.div>

                <motion.div className="flex items-start" variants={fadeUp} whileHover={{ x: 5 }}>
                  <div className="mr-4 mt-1">
                    <MapPin size={24} className="text-[#eb0808]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#2f2f2f]">Endereço</p>
                    <p className="text-[#2f2f2f]">R. Machado de Assis, 797, Sala 110 - Centro Osasco, SP</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <motion.div variants={fadeUp}>
              <h3 className="text-2xl font-bold text-[#2f2f2f] mb-6">Horário de Atendimento</h3>
              <p className="text-[#2f2f2f] mb-2">Segunda a Sexta: 08:00 - 18:00</p>
              <p className="text-[#2f2f2f]">Sábado: 09:00 - 13:00</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
