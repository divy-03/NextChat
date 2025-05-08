// components/Button.js
import React from "react";
import clsx from "clsx";

const Button = ({ children, className, variant = "default", ...props }) => {
  const baseStyles = "px-4 py-2 rounded-md text-sm font-medium transition";
  const variants = {
    default: "bg-black text-white hover:bg-gray-800",
    outline: "border border-gray-300 text-black hover:bg-gray-100",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
