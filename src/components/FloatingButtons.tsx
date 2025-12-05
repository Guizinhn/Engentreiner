import React from 'react';
import { Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../providers/ReducedMotionProvider';
const FloatingButtons = () => {
  const {
    shouldReduceMotion
  } = useReducedMotion();
  const floatAnimation = {
    initial: {
      scale: 1
    },
    animate: shouldReduceMotion ? {} : {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }
    }
  };
  const tooltipVariants = {
    hidden: {
      opacity: 0,
      x: -10
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2
      }
    }
  };
  return <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-4">
      <motion.a href="https://www.instagram.com/engetrainer?igsh=cnVlMTEzMDFkZm9i&utm_source=qr" target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" aria-label="Instagram" initial="initial" animate="animate" variants={floatAnimation} whileHover={{
      scale: 1.1
    }} whileTap={{
      scale: 0.9
    }}>
        <Instagram size={24} className="text-white" />
        <motion.span className="absolute right-full mr-3 bg-black text-white text-sm py-1 px-3 rounded-lg whitespace-nowrap pointer-events-none" initial="hidden" variants={tooltipVariants} animate="hidden" whileHover="visible">
          Siga nosso Instagram
        </motion.span>
      </motion.a>
      <motion.a href="https://wa.me/5511996853405?text=Olá, %20gostaria%20de%20falar%20com%20um%20especialista%20da%20Engetrainer" target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" aria-label="WhatsApp" initial={{
      y: 100,
      opacity: 0
    }} animate={{
      y: 0,
      opacity: 1
    }} transition={{
      delay: 0.5,
      type: 'spring',
      stiffness: 200,
      damping: 15
    }} whileHover={{
      scale: 1.1
    }} whileTap={{
      scale: 0.9
    }}>
        <motion.div className="absolute -top-1 -right-1 w-5 h-5 bg-[#eb0808] rounded-full flex items-center justify-center text-white text-xs font-bold" animate={{
        scale: shouldReduceMotion ? 1 : [1, 1.2, 1]
      }} transition={{
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 1
      }}>
          1
        </motion.div>
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <motion.span className="absolute right-full mr-3 bg-black text-white text-sm py-1 px-3 rounded-lg whitespace-nowrap pointer-events-none" initial="hidden" variants={tooltipVariants} animate="hidden" whileHover="visible">
          Fale com um especialista
        </motion.span>
      </motion.a>
    </div>;
};
export default FloatingButtons;
