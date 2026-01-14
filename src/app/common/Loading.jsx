import React, { useEffect } from "react";

function Loading() {

   
  return (
    <div className="bg-white fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] flex items-center justify-center">
      <div className="w-8 border-t-[#FF6C00] border-[5px] relative border-gray-700 h-8 rotate-loading rounded-[50%]">
        
      </div>
    </div>
  );
}

export default Loading;
