import { ReaktorLogo } from '../../public/assets/logos/ReaktorLogo';
import { AnimatedTitle } from '../AnimatedTitle';
import { navbarItems } from '../utils/navbarContent';

export const Header = () => {
  return (
    <header className="p-8 flex items-center justify-between">
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
