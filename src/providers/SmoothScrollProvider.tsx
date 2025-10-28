import React, { useEffect, useState, useRef, createContext } from 'react';
interface SmoothScrollContextProps {
  lenis: any | null;
}
export const SmoothScrollContext = createContext<SmoothScrollContextProps>({
  lenis: null
});
interface SmoothScrollProviderProps {
  children: React.ReactNode;
}
export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({
  children
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  // Simple scroll handler to track position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    // Set up scroll listener
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // Simplified mock of the lenis API for components that might use it
  const mockLenis = {
    on: () => {},
    off: () => {},
    destroy: () => {},
    stop: () => {},
    start: () => {},
    scrollTo: (target: string | number | HTMLElement, options = {}) => {
      let element: HTMLElement | null = null;
      if (typeof target === 'string') {
        element = document.querySelector(target);
      } else if (target instanceof HTMLElement) {
        element = target;
      }
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } else if (typeof target === 'number') {
        window.scrollTo({
          top: target,
          behavior: 'smooth'
        });
      }
    },
    // Basic position tracking
    scroll: scrollPosition
  };
  return <SmoothScrollContext.Provider value={{
    lenis: mockLenis
  }}>
      {children}
    </SmoothScrollContext.Provider>;
};