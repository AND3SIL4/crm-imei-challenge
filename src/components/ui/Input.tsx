import type React from 'react';

const InputComponent: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  ...params
}) => {
  return (
    <div className="mb-5">
      <input
        {...params}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>
  );
};

export default InputComponent;
