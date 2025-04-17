import React from 'react';

function Button({ text, type = 'button', onClick, className = '', disabled = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex justify-center items-center p-1 transition rounded-md text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
