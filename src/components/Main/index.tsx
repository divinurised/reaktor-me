import { RiExternalLinkLine } from 'react-icons/ri';
import { mainContentItems } from '../../utils/mainContent';

export const Main = () => {
  return (
    <main className="grid grid-cols-3 justify-center px-16 gap-16 dark:bg-gray-200 dark:text-white transition-colors bg-white">
      {mainContentItems.map(item => (
        <div
          className="h-[600px] flex flex-col justify-end gap-4 cursor-pointer"
          key={item.description}
        >
          <img
            src={item.image}
            className="hover:-translate-y-[0.30rem] transition-transform"
          />
          <div className="h-24">
            <h3 className="mb-4 text-gray-100 font-serif">{item.title}</h3>
            <div className="flex items-start">
              <h4 className="text-[22px] leading-[28px]">{item.description}</h4>
              <RiExternalLinkLine
                size={20}
                className="flex-shrink-0 text-gray-100"
              />
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};
