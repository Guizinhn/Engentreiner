import React, { useEffect, useState, useRef, Children } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { fadeIn, fadeUp } from '../utils/motion';
import { useReducedMotion } from '../providers/ReducedMotionProvider';
const TestimonialsSection = () => {
  const {
    shouldReduceMotion
  } = useReducedMotion();
  const [ref, controls] = useInView(0.2);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(!shouldReduceMotion);
  const autoPlayIntervalRef = useRef<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const testimonials = [{
    text: 'A Engetrainer foi essencial para a adequação da nossa equipe às normas de segurança. Os treinamentos foram práticos e eficientes.',
    name: 'Carlos Mendes',
    position: 'Gerente de Operações',
    company: 'Construtora ABC'
  }, {
    text: 'Contratamos os serviços de consultoria e ficamos impressionados com o conhecimento técnico e a rapidez no atendimento.',
    name: 'Ana Paula Silva',
    position: 'Diretora de RH',
    company: 'Indústria XYZ'
  }, {
    text: 'Os treinamentos da Engetrainer mudaram a cultura de segurança na nossa empresa. Recomendo fortemente.',
    name: 'Roberto Alves',
    position: 'Supervisor de Segurança',
    company: 'Metalúrgica MNO'
  }, {
    text: 'Profissionais extremamente capacitados. Os projetos foram entregues dentro do prazo e com excelente qualidade.',
    name: 'Mariana Costa',
    position: 'Coordenadora de Projetos',
    company: 'Engenharia DEF'
  }, {
    text: 'A locação de equipamentos da Engetrainer nos ajudou a cumprir prazos apertados com segurança e eficiência.',
    name: 'Fernando Gomes',
    position: 'Diretor de Operações',
    company: 'Construções RST'
  }, {
    text: 'Os laudos técnicos elaborados pela equipe da Engetrainer foram fundamentais para nossa certificação ISO.',
    name: 'Luciana Martins',
    position: 'Gerente de Qualidade',
    company: 'Indústria GHI'
  }, {
    text: 'Excelente suporte técnico e atendimento personalizado. Parceiros de negócio que fazem a diferença.',
    name: 'Paulo Ribeiro',
    position: 'Proprietário',
    company: 'Construtora JKL'
  }, {
    text: 'Os treinamentos in-company superaram nossas expectativas. Conteúdo atualizado e instrutores experientes.',
    name: 'Cristina Souza',
    position: 'Analista de Treinamento',
    company: 'Grupo UVW'
  }, {
    text: 'A operação de içamento especial foi realizada com extremo profissionalismo e segurança. Recomendo!',
    name: 'Rodrigo Lima',
    position: 'Engenheiro Chefe',
    company: 'Petroquímica PQR'
  }];
  const scrollPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      // Loop to the end
      setCurrentIndex(testimonials.length - 1);
    }
  };
  const scrollNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Loop to the beginning
      setCurrentIndex(0);
    }
  };
  // Handle autoplay
  useEffect(() => {
    if (isAutoPlaying && !shouldReduceMotion) {
      autoPlayIntervalRef.current = window.setInterval(() => {
        scrollNext();
      }, 4000) as unknown as number;
    }
    return () => {
      if (autoPlayIntervalRef.current !== null) {
        clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex, shouldReduceMotion]);
  // Stop autoplay on hover
  const handleMouseEnter = () => {
    if (!shouldReduceMotion) {
      setIsAutoPlaying(false);
    }
  };
  // Resume autoplay on mouse leave
  const handleMouseLeave = () => {
    if (!shouldReduceMotion) {
      setIsAutoPlaying(true);
    }
  };
  // Scroll the slider when currentIndex changes
  useEffect(() => {
    if (sliderRef.current) {
      const scrollPosition = currentIndex * (350 + 24); // card width + gap
      sliderRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);
  return <section id="depoimentos" className="py-20 bg-white">
      <motion.div className="container mx-auto px-4" ref={ref} initial="hidden" animate={controls} variants={{
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
        <motion.div className="text-center mb-16" variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f2f2f] mb-4">
            O que os clientes dizem
          </h2>
          <div className="w-20 h-1 bg-[#eb0808] mx-auto"></div>
        </motion.div>
        <motion.div className="relative" variants={fadeIn}>
          <motion.button onClick={scrollPrev} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100" aria-label="Scroll left" whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.95
        }}>
            <ChevronLeft size={24} className="text-[#2f2f2f]" />
          </motion.button>
          <div className="overflow-hidden" ref={sliderRef}>
            <div className="flex" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onTouchStart={handleMouseEnter} onTouchEnd={handleMouseLeave} style={{
            display: 'flex',
            transition: 'transform 0.5s ease'
          }}>
              {testimonials.map((testimonial, index) => <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_350px] px-3">
                  <motion.div className="bg-gray-50 p-6 rounded-lg shadow-md h-full" whileHover={{
                y: -5,
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
              }} transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20
              }}>
                    <div className="flex items-center mb-4">
                      <div className="w-2 h-8 bg-[#eb0808] mr-4"></div>
                      <p className="italic text-[#2f2f2f]">
                        "{testimonial.text}"
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-[#2f2f2f]">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </motion.div>
                </div>)}
            </div>
          </div>
          <motion.button onClick={scrollNext} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100" aria-label="Scroll right" whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.95
        }}>
            <ChevronRight size={24} className="text-[#2f2f2f]" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>;
};
export default TestimonialsSection;