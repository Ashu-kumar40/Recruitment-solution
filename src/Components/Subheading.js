import React from 'react'

const custom = {
    "font-family": 'Passion One, cursive',
}

export default function Subheading({
    text,
    alignText
}) {
  return (
    <h1 
    className={`
    Subheading-content 
    text-[40px] 
    py-6 sm:py-2
    sm:text-xl
    w-full 
    text-neutral-600
    text-${alignText}
    `}
    style={custom}
    >
      {text}
    </h1>
  )
}
