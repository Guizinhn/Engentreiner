import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { fadeUp, buttonHover, buttonTap } from '../utils/motion';
import { useReducedMotion } from '../providers/ReducedMotionProvider';
const CTASection = () => {
  const [ref, controls] = useInView(0.3);
  const {
    shouldReduceMotion
  } = useReducedMotion();
  return <motion.section className="py-20 bg-[#2f2f2f] text-white" ref={ref} initial="hidden" animate={controls} variants={{
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}>
      <div className="container mx-auto px-4 text-center">
        <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" variants={fadeUp}>
          Precisa de um parceiro técnico de confiança?
        </motion.h2>
        <motion.p className="text-lg mb-10 max-w-2xl mx-auto" variants={fadeUp}>
          A Engetrainer está pronta para oferecer soluções personalizadas para
          sua empresa, com o mais alto padrão técnico e atendimento
          especializado.
        </motion.p>
        <motion.div className="flex flex-col sm:flex-row justify-center gap-4" variants={fadeUp}>
          <motion.a href="#contato" className="inline-block bg-[#eb0808] hover:bg-[#d10707] text-white font-medium py-3 px-8 rounded-md transition-colors duration-300" whileHover={shouldReduceMotion ? {} : buttonHover} whileTap={shouldReduceMotion ? {} : buttonTap}>
            Solicitar Orçamento
          </motion.a>
          <motion.div>
            <Link to="/#servicos" className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-[#2f2f2f] text-white font-medium py-3 px-8 rounded-md transition-colors duration-300">
              Ver Serviços
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>;
};
export default CTASection;