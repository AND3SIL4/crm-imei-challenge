import type React from 'react';

const InputComponent: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  ...params
}) => {
  return (
    <div className="mb-5">
      <input
        {...params}
        className="bg-black/15 text-gray-900 text-sm rounded-sm border-none block w-full p-2.5 active:border-none focus:outline-none"
        required
      />
    </div>
  );
};

export default InputComponent;
