import React from 'react';

export const Button = ({ children, className = '', variant = 'primary', ...props }) => {
  const baseStyles = 'px-6 py-2 rounded-md text-sm font-semibold focus:outline-none transition-colors';
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
