import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useReducedMotion } from '../providers/ReducedMotionProvider';
import { fadeIn, fadeUp, floatY, buttonHover, buttonTap } from '../utils/motion';
import bgImage from '../images/imagemUm.png';

const HeroSection: React.FC = () => {
  const { shouldReduceMotion } = useReducedMotion();

  const scrollToContent = () => {
    const element = document.getElementById('sobre');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative bg-[#2f2f2f] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-hidden="true"
      />
      <motion.div
        className="relative container mx-auto px-4 py-24 md:py-36"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl">
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-6"
            variants={fadeUp}
          >
            Segurança, Qualidade e Expertise em Engenharia e Treinamentos
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-8 opacity-90"
            variants={fadeIn}
          >
            Desde 2010 oferecendo soluções completas em segurança do trabalho,
            consultoria técnica e treinamentos especializados
          </motion.p>

          <motion.a
            href="https://wa.me/5511996853405?text=Olá,%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Engetrainer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#eb0808] hover:bg-[#d10707] text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 transform hover:scale-105"
            variants={fadeUp}
            whileHover={shouldReduceMotion ? {} : buttonHover}
            whileTap={shouldReduceMotion ? {} : buttonTap}
          >
            Fale com um especialista
          </motion.a>
        </div>

        <motion.div
          className="absolute bottom-8 left-0 right-0 flex justify-center"
          initial="initial"
          animate="animate"
          variants={floatY}
          style={{ display: shouldReduceMotion ? 'none' : 'flex' }}
        >
          <motion.button
            onClick={scrollToContent}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronDown size={24} className="text-white" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
