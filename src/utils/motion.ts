import { Variants } from 'framer-motion';
// Reusable motion variants
export const fadeIn: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};
export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};
export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};
export const staggerFast: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06
    }
  }
};
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};
export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.3,
    ease: 'easeOut'
  }
};
export const hoverLift = {
  y: -6,
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
  transition: {
    duration: 0.3,
    ease: 'easeOut'
  }
};
export const buttonTap = {
  scale: 0.98,
  transition: {
    duration: 0.1
  }
};
export const buttonHover = {
  scale: 1.03,
  boxShadow: '0 5px 15px rgba(235, 8, 8, 0.15)',
  transition: {
    duration: 0.3,
    ease: 'easeOut'
  }
};
export const progressLine: Variants = {
  hidden: {
    width: '0%'
  },
  visible: {
    width: '100%',
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};
export const floatY: Variants = {
  initial: {
    y: 0
  },
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut'
    }
  }
};
export const iconWiggle = {
  rotate: [0, -5, 5, -5, 0],
  transition: {
    duration: 0.4
  }
};