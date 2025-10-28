import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { useReducedMotion } from '../providers/ReducedMotionProvider';
const ScrollProgressBar: React.FC = () => {
  const {
    scrollYProgress
  } = useScroll();
  const {
    shouldReduceMotion
  } = useReducedMotion();
  if (shouldReduceMotion) {
    return null;
  }
  return <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#eb0808] origin-left z-50" style={{
    scaleX: scrollYProgress,
    opacity: scrollYProgress
  }} />;
};
export default ScrollProgressBar;