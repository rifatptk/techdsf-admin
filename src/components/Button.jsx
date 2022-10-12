import React from 'react';

const Button = ({ text, background, color, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{ background: background || '#0058FF', color: color || '#fff' }}
      className={`text-[12px] px-[12px] py-[8px] rounded cursor-pointer hover:brightness-90 transition-all`}
    >
      {text}
    </div>
  );
};

export default Button;
