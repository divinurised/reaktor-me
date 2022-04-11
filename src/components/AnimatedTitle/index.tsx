import type { AnimatedTitleProps } from './types';

export const AnimatedTitle = ({ first, second }: AnimatedTitleProps) => {
  return (
    <p className="group">
      <span className="group-hover:translate-y-[0.10rem] transition-transform cursor-pointer inline-block">
        {first}
      </span>
      <span className="group-hover:-translate-y-[0.10rem] transition-transform cursor-pointer inline-block">
        {second}
      </span>
    </p>
  );
};
