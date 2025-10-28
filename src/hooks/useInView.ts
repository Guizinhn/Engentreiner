import { useEffect, useState } from 'react';
import { useAnimation, AnimationControls } from 'framer-motion';
import { useInView as useIntersectionView } from 'react-intersection-observer';
export function useInView(threshold: number = 0.2): [React.RefObject<HTMLElement>, AnimationControls, boolean] {
  const controls = useAnimation();
  const [ref, inView] = useIntersectionView({
    threshold,
    triggerOnce: true
  });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return [ref, controls, inView];
}