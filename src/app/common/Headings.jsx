import React from 'react'
import { cn } from '../../classReplace/replace';

function Headings1({className, children}) {
  return (
    <h1 className={cn("font-comforta text-gray-700 lg:text-2xl md:text-xl text-lg xl:text-[26px] font-extrabold", className)}>
        {children}
    </h1>
  )
}

export default Headings1;