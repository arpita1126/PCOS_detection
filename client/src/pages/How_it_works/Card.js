import React from 'react';

export const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children }) => {
  return (
    <div className="px-6 py-4 bg-gray-100 border-b border-gray-300">
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = '' }) => {
  return (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children }) => {
  return (
    <h2 className="text-xl font-semibold text-gray-800">
      {children}
    </h2>
  );
};

export const CardDescription = ({ children }) => {
  return (
    <p className="text-sm text-gray-600 mt-2">
      {children}
    </p>
  );
};
