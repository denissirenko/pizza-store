import React from 'react';

const Button = ({ onClick, className, outline, children }) => {
  return (
    <button className="button button--cart" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
