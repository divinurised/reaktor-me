import { footerMenuContent } from '../../utils/footerMenuContent';
import { AnimatedTitle } from '../AnimatedTitle';

export const FooterMenu = () => {
  return (
    <section className="w-full flex flex-col items-center pt-32">
      <div className="flex flex-col items-start gap-7">
        {footerMenuContent.map(item => (
          <AnimatedTitle
            key={item.first}
            first={item.first}
            second={item.second}
            className="text-5xl font-medium"
          />
        ))}
      </div>
    </section>
  );
};
