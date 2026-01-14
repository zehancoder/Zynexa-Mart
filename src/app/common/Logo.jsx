import React from "react";
import { cn } from "../../classReplace/replace";
import { Link } from "react-router";

function Logo({ className }) {
  return (
    <Link
      to={"/"}
      className={cn(
        "md:text-2xl text-xl lg:text-3xl font-extrabold font-lexend",
        className
      )}
    >
      <span className="text-[#FF6C00]">Zynexa</span>{" "}
      <span className="text-white ">Mart</span>
    </Link>
  );
}

export default Logo;
