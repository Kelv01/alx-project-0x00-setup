import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <div className="flex p-2 gap-3 justify-items-center">
      <button className={`px-3 py-1 bg-gray-600 text-white ${styles}`}>
        {title}
      </button>
    </div>
  );
};

export default Button;
