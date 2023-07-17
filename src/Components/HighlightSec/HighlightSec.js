import React from 'react'
import '../CSS/HighlightSec.css'
import HighlightCard from '../Cards/HighlightCard'
import Subheading from '../Subheading'

export default function HighlightSec() {
  return (
    <div className='highlights-container'>
      <Subheading text={"Highlights"} alignText={'center'}/>
      <div className="highlights-content">
      <HighlightCard icon={"client"} desc={"Join our community of 500+ satisfied clients who trust our recruitment platform"}/>
      <HighlightCard icon={"time"} desc={"Save up to 60% of your hiring time with our streamlined process"}/>
      <HighlightCard icon={"feedback"} desc={"95% of our clients reported improved hiring outcomes and satisfaction"}/>
      <HighlightCard icon={"increment"} desc={"Experience a 50% increase in hiring process efficiency with our intuitive platform"}/>
      <HighlightCard icon={"hire"} desc={"Over 1,000 companies have found top talent through our platform"}/>
      <HighlightCard icon={"global"} desc={"Connect with talent from over 50 countries worldwide."}/> 
      </div>
    </div>
  )
}
