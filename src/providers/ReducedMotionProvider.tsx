import React, { useEffect, useState, createContext, useContext } from 'react';
interface ReducedMotionContextProps {
  shouldReduceMotion: boolean;
}
const ReducedMotionContext = createContext<ReducedMotionContextProps>({
  shouldReduceMotion: false
});
export const useReducedMotion = () => useContext(ReducedMotionContext);
interface ReducedMotionProviderProps {
  children: React.ReactNode;
}
export const ReducedMotionProvider: React.FC<ReducedMotionProviderProps> = ({
  children
}) => {
  const [shouldReduceMotion, setShouldReduceMotion] = useState<boolean>(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setShouldReduceMotion(mediaQuery.matches);
    const handleChange = (event: MediaQueryListEvent) => {
      setShouldReduceMotion(event.matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);
  return <ReducedMotionContext.Provider value={{
    shouldReduceMotion
  }}>
      {children}
    </ReducedMotionContext.Provider>;
};