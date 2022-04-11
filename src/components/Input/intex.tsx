interface InputProps {
  label: string;
  required?: boolean;
}

export const Input = ({ label, required }: InputProps) => {
  return (
    <div className="flex flex-col mb-8 text-gray-150">
      <label htmlFor={label} className="mb-2">
        {label}
        {required && '*'}
      </label>
      <input
        id={label}
        className="border-b-[1px] bg-gray-0 focus:bg-white p-2 focus:outline-none transition-colors"
      />
    </div>
  );
};
