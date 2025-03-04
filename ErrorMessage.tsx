import React from 'react';

interface ErrorMessageProps {
  message: string;
  retry?: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, retry }) => {
  return (
    <div className="bg-red-900/20 border border-red-800 text-white p-4 rounded-md my-4">
      <p className="mb-2">{message}</p>
      {retry && (
        <button 
          onClick={retry}
          className="bg-red-800 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm"
        >
          Try Again
        </button>
      )}
    </div>
  );
};