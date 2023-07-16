import React from 'react'
import '../CSS/HighlightSec.css'
import HighlightCard from '../Cards/HighlightCard'
import Subheading from '../Subheading'

export default function HighlightSec() {
  return (
    <div className='highlights-container'>
      <Subheading text={"Highlights"} alignText={'center'}/>
      <div className="highlights-content">
      <HighlightCard icon={"client"}/>
      <HighlightCard icon={"time"}/>
      <HighlightCard icon={"feedback"}/>
      <HighlightCard icon={"increment"}/>
      <HighlightCard icon={"hire"}/>
      <HighlightCard icon={"global"}/>
      </div>
    </div>
  )
}
