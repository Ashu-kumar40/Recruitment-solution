import React from 'react'
import './CSS/subheading.css'

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
