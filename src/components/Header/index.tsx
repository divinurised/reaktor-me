import { ReaktorLogo } from '../../public/assets/logos/ReaktorLogo';
import { AnimatedTitle } from '../AnimatedTitle';
import { navbarItems } from '../../utils/navbarContent';
import { useContext, useEffect, useRef, useState } from 'react';
import { ScrollContext } from '../../contexts/ScrollContext';

export const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const { scrollY } = useContext(ScrollContext);
  let progress = 0;

  const { current: elementContainer } = headerRef;

  if (elementContainer) {
    progress = Math.min(1, scrollY / elementContainer.clientHeight);
  }

  return (
    <header ref={headerRef} className="p-8 flex items-center justify-between">
      <a href="/" className="font-bold text-xl leading-6 px-8">
        Reaktor
      </a>
      <a href="/">
        <ReaktorLogo />
      </a>
      <nav>
        <ul className="flex gap-4">
          {navbarItems.map(item => (
            <li key={item.title} className="font-medium">
              <AnimatedTitle first={item.first} second={item.second} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
