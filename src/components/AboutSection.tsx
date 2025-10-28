import React from 'react';
import { Award, MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { staggerContainer, fadeUp, hoverLift, iconWiggle } from '../utils/motion';
import { useReducedMotion } from '../providers/ReducedMotionProvider';
import CountUp from 'react-countup';
const AboutSection = () => {
  const [ref, controls, inView] = useInView(0.2);
  const {
    shouldReduceMotion
  } = useReducedMotion();
  const stats = [{
    icon: <Award size={32} className="text-white" />,
    title: '+10 anos de experiência',
    description: 'Tradição e confiabilidade no mercado de engenharia e treinamentos.'
  }, {
    icon: <MapPin size={32} className="text-white" />,
    title: 'Atuação em todo o Brasil',
    description: 'Levamos nossas soluções para empresas em todo o território nacional.'
  }, {
    icon: <Users size={32} className="text-white" />,
    title: 'Equipe técnica qualificada',
    description: 'Profissionais especializados e constantemente atualizados.'
  }];
  return <section id="sobre" className="py-20 bg-white">
      <motion.div className="container mx-auto px-4" ref={ref} initial="hidden" animate={controls} variants={staggerContainer}>
        <motion.div className="text-center mb-16" variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f2f2f] mb-4">
            Sobre a Engetrainer
          </h2>
          <div className="w-20 h-1 bg-[#eb0808] mx-auto"></div>
        </motion.div>
        <motion.div className="max-w-3xl mx-auto text-center mb-16" variants={fadeUp}>
          <p className="text-lg text-[#2f2f2f] mb-6">
            Desde 2010, a Engetrainer tem se destacado no mercado oferecendo
            soluções completas em engenharia, segurança do trabalho e
            treinamentos especializados. Nossa missão é garantir a segurança e
            eficiência operacional dos nossos clientes através de um atendimento
            técnico de excelência, experiência prática e foco em resultados.
          </p>
          <p className="text-lg text-[#2f2f2f]">
            Com uma equipe altamente qualificada, desenvolvemos projetos
            personalizados que atendem às necessidades específicas de cada
            cliente, sempre em conformidade com as normas técnicas e
            regulamentações vigentes.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => <motion.div key={index} className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow" variants={fadeUp} whileHover={shouldReduceMotion ? {} : hoverLift}>
              <motion.div className="w-16 h-16 bg-[#eb0808] rounded-full flex items-center justify-center mx-auto mb-6" whileHover={shouldReduceMotion ? {} : iconWiggle}>
                {stat.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-[#2f2f2f] mb-2">
                {inView && !shouldReduceMotion && stat.title.includes('+10') ? <>
                    +<CountUp end={10} duration={2} /> anos de experiência
                  </> : stat.title}
              </h3>
              <p className="text-[#2f2f2f]">{stat.description}</p>
            </motion.div>)}
        </div>
      </motion.div>
    </section>;
};
export default AboutSection;