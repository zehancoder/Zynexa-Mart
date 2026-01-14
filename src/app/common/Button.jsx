import React from "react";
import { cn } from "../../classReplace/replace";

function Button({ children, className }) {
  return (
    <button
      className={cn(
        " transition duration-300 text-white  cursor-pointer rounded-sm lg:rounded-md border border-transparent  md:text-[14px] text-[13px] lg:text-[15px] font-medium md:px-4 px-3  lg:px-5 py-0.5 md:py-1 lg:py-1.5 bg-[#FF6C00] ",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
