import React, { useCallback, useEffect, useState } from 'react';

interface ScrollValue {
  scrollY: number;
}

export const ScrollContext = React.createContext<ScrollValue>({
  scrollY: 0,
});

const ScrollObserver: React.FC<any> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = useCallback(() => {
    if (window.scrollY < 200) {
      setScrollY(window.scrollY);
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollObserver;
