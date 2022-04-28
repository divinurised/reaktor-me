import { AnimatedTitle } from '../AnimatedTitle';
import { footerMenuContent } from '../../utils/footerMenuContent';

export const FooterMenu = () => {
  return (
    <section className="w-full flex flex-col items-center pt-32">
      <div className="flex flex-col items-start gap-7">
        {footerMenuContent.map(item => (
          <AnimatedTitle
            first={item.first}
            second={item.second}
            className="text-5xl font-medium"
          />
        ))}
      </div>
    </section>
  );
};
