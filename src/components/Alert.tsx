import React from 'react';

interface AlertProps {
  type: 'success' | 'warning' | 'error';
  message: string;
}

const Alert: React.FC<AlertProps> = ({ type, message }) => {
  let colorClass = '';

  switch (type) {
    case 'success':
      colorClass = 'bg-green-500 text-white';
      break;
    case 'warning':
      colorClass = 'bg-yellow-500 text-black';
      break;
    case 'error':
      colorClass = 'bg-red-500 text-white';
      break;
    default:
      colorClass = 'bg-gray-500 text-white';
      break;
  }

  return (
    <div className={`p-2 rounded ${colorClass}`}>
      {message}
    </div>
  );
};

export default Alert;
