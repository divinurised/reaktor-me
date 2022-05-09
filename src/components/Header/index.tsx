import { useContext, useMemo, useRef } from 'react';
import { ReaktorLogo } from '../../assets/logos/ReaktorLogo';
import { ScrollContext } from '../../contexts/ScrollContext';
import { useTheme } from '../../hooks/useTheme';
import { navbarItems } from '../../utils/navbarContent';
import { AnimatedTitle } from '../AnimatedTitle';

export const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const { scrollY } = useContext(ScrollContext);
  const { setTheme } = useTheme();

  useMemo(() => {
    if (scrollY >= 100) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, [scrollY]);

  return (
    <header
      ref={headerRef}
      className="p-8 flex items-center justify-between bg-white dark:bg-gray-200 transition-colors"
    >
      <a
        href="/"
        className="font-bold text-xl leading-6 px-8 dark:text-white text-gray-200"
      >
        Reaktor
      </a>
      <a href="/">
        <ReaktorLogo />
      </a>
      <nav>
        <ul className="flex gap-4">
          {navbarItems.map(item => (
            <li
              key={item.title}
              className="font-medium dark:text-white text-gray-200"
            >
              <AnimatedTitle first={item.first} second={item.second} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
