import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button
      type="button"
      className="text-white bg-blue-400 hover:bg-blue-500 rounded-md font-bold px-4 py-2 w-full"
    >
      {children}
    </button>
  );
};

export default Button;
