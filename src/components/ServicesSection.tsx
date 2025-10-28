import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ShieldCheck, Users, FileText, Anchor, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { staggerContainer, fadeUp, hoverLift, iconWiggle } from '../utils/motion';
import { useReducedMotion } from '../providers/ReducedMotionProvider';
const ServicesSection = () => {
  const navigate = useNavigate();
  const [ref, controls] = useInView(0.1);
  const {
    shouldReduceMotion
  } = useReducedMotion();
  const handleNavigation = path => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  const services = [{
    icon: <BookOpen size={36} className="text-[#eb0808]" />,
    title: 'Treinamentos de operação',
    description: 'Capacitação técnica para operação de máquinas e equipamentos industriais.',
    link: '/treinamentos-de-operacao'
  }, {
    icon: <ShieldCheck size={36} className="text-[#eb0808]" />,
    title: 'Treinamentos de segurança',
    description: 'Cursos e treinamentos em NRs e procedimentos de segurança do trabalho.',
    link: '/treinamentos-de-seguranca'
  }, {
    icon: <Users size={36} className="text-[#eb0808]" />,
    title: 'Fornecimento de mão de obra',
    description: 'Profissionais especializados para as mais diversas funções técnicas.',
    link: '/fornecimento-de-mao-de-obra'
  }, {
    icon: <FileText size={36} className="text-[#eb0808]" />,
    title: 'Projetos e Laudos',
    description: 'Elaboração de projetos técnicos e laudos de conformidade com as normas.',
    link: '/projetos-e-laudos'
  }, {
    icon: <Anchor size={36} className="text-[#eb0808]" />,
    title: 'Içamentos especiais',
    description: 'Planejamento e execução de operações de içamento com segurança e precisão.',
    link: '/icamentos-especiais'
  }, {
    icon: <Truck size={36} className="text-[#eb0808]" />,
    title: 'Locação de equipamentos',
    description: 'Equipamentos de alta qualidade para suas operações e projetos.',
    link: '/locacao-de-equipamentos'
  }];
  return <section id="servicos" className="py-20 bg-gray-50">
      <motion.div className="container mx-auto px-4" ref={ref} initial="hidden" animate={controls} variants={staggerContainer}>
        <motion.div className="text-center mb-16" variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f2f2f] mb-4">
            Nossos Serviços
          </h2>
          <div className="w-20 h-1 bg-[#eb0808] mx-auto"></div>
          <p className="mt-6 text-lg text-[#2f2f2f] max-w-3xl mx-auto">
            Oferecemos soluções completas para as necessidades da sua empresa em
            treinamentos, consultoria e serviços de engenharia.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <motion.div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow" variants={fadeUp} whileHover={shouldReduceMotion ? {} : hoverLift}>
              <motion.div className="mb-6" whileHover={shouldReduceMotion ? {} : iconWiggle}>
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-[#2f2f2f] mb-3">
                {service.title}
              </h3>
              <p className="text-[#2f2f2f] mb-6">{service.description}</p>
              <motion.button onClick={() => handleNavigation(service.link)} className="inline-flex items-center text-[#eb0808] font-medium hover:underline" whileHover={{
            x: 5
          }} transition={{
            type: 'spring',
            stiffness: 400,
            damping: 10
          }}>
                Saiba mais
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </motion.button>
            </motion.div>)}
        </div>
      </motion.div>
    </section>;
};
export default ServicesSection;