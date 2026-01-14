import React from 'react'
import { cn } from '../../classReplace/replace'

function Container({children, className }) {
  return (
    <div className={cn('max-w-[1700px] mx-auto px-3 py-2', className)}>
        {children}
    </div>
  )
}

export default Container