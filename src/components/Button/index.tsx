import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <>
      <button
        className={`${className} py-4 px-12 border rounded-lg hover:bg-orange-100 transition-colors`}
        {...props}
      >
        {children}
      </button>
    </>
  );
};
