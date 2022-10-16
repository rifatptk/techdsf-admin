const Button = ({ text, onClick, active }) => {
  return (
    <div
      onClick={onClick}
      className={`text-[12px] px-[12px] py-[8px] rounded cursor-pointer hover:brightness-90 transition-all ${
        active ? 'bg-theme-blue text-white' : 'bg-white text-theme-black'
      }`}
    >
      {text}
    </div>
  );
};

export default Button;
