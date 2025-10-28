import React, { useEffect, useState, Children } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotion } from '../providers/ReducedMotionProvider';

//import logo from '../images/logo_engetrainer-semFundo.png'
import logo from '../images/logo_engtrainerAtt.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');
  const {
    pathname,
    hash
  } = useLocation();
  const {
    shouldReduceMotion
  } = useReducedMotion();
  const {
    scrollY
  } = useScroll();
  const headerBackground = useTransform(scrollY, [0, 32], ['rgba(255, 255, 255, 0.9)', 'rgba(255, 255, 255, 0.98)']);
  const headerShadow = useTransform(scrollY, [0, 32], ['0 1px 2px rgba(0, 0, 0, 0.05)', '0 4px 12px rgba(0, 0, 0, 0.1)']);
  useEffect(() => {
    setActiveHash(hash);
  }, [hash]);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navVariants = {
    hidden: {
      opacity: 0,
      y: -10
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        ease: 'easeOut',
        duration: 0.5
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -10
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  const mobileNavVariants = {
    hidden: {
      opacity: 0,
      height: 0
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        when: 'beforeChildren',
        staggerChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2
      }
    }
  };
  return <motion.header className="sticky top-0 z-50 backdrop-blur-sm" style={{
    backgroundColor: shouldReduceMotion ? 'rgba(212, 212, 212, 0.98)' : headerBackground,
    boxShadow: shouldReduceMotion ? '0 4px 12px rgba(0, 0, 0, 0.1)' : headerShadow
  }} initial={false}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5
        }}>
            <Link to="/" className="text-2xl font-bold text-[#eb0808]">
              <img src={ logo } alt="" style={{ width: '10rem' }} />
            </Link>
          </motion.div>
          {/* Desktop Navigation */}
          <motion.nav className="hidden md:flex space-x-8" initial="hidden" animate="visible" variants={navVariants}>
            <motion.div variants={itemVariants}>
              <Link to="/" className={`text-[#2f2f2f] hover:text-[#eb0808] font-medium transition-colors relative ${pathname === '/' && !activeHash ? 'after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#eb0808]' : ''}`}>
                Início
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link to="/#sobre" className={`text-[#2f2f2f] hover:text-[#eb0808] font-medium transition-colors relative ${activeHash === '#sobre' ? 'after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#eb0808]' : ''}`}>
                Sobre
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link to="/#servicos" className={`text-[#2f2f2f] hover:text-[#eb0808] font-medium transition-colors relative ${activeHash === '#servicos' ? 'after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#eb0808]' : ''}`}>
                Serviços
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link to="/#depoimentos" className={`text-[#2f2f2f] hover:text-[#eb0808] font-medium transition-colors relative ${activeHash === '#depoimentos' ? 'after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#eb0808]' : ''}`}>
                Depoimentos
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link to="/#contato" className={`text-[#2f2f2f] hover:text-[#eb0808] font-medium transition-colors relative ${activeHash === '#contato' ? 'after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#eb0808]' : ''}`}>
                Contato
              </Link>
            </motion.div>
          </motion.nav>
          {/* Mobile Menu Button */}
          <motion.button onClick={toggleMenu} className="md:hidden text-[#2f2f2f] hover:text-[#eb0808]" whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.95
        }}>
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </motion.button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && <motion.nav className="md:hidden mt-4 flex flex-col space-y-4 py-4" initial="hidden" animate="visible" exit="exit" variants={mobileNavVariants}>
            <motion.div variants={itemVariants}>
              <Link to="/" className="text-[#2f2f2f] hover:text-[#eb0808] font-medium transition-colors block" onClick={() => setIsMenuOpen(false)}>
                Início
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link to="/#sobre" className="text-[#2f2f2f] hover:text-[#eb0808] font-medium transition-colors block" onClick={() => setIsMenuOpen(false)}>
                Sobre
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link to="/#servicos" className="text-[#2f2f2f] hover:text-[#eb0808] font-medium transition-colors block" onClick={() => setIsMenuOpen(false)}>
                Serviços
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link to="/#depoimentos" className="text-[#2f2f2f] hover:text-[#eb0808] font-medium transition-colors block" onClick={() => setIsMenuOpen(false)}>
                Depoimentos
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link to="/#contato" className="text-[#2f2f2f] hover:text-[#eb0808] font-medium transition-colors block" onClick={() => setIsMenuOpen(false)}>
                Contato
              </Link>
            </motion.div>
          </motion.nav>}
      </div>
    </motion.header>;
};
export default Header;