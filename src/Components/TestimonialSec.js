import React from 'react'
import TestimonialCard from './Cards/TestimonialCard'
import Subheading from './Subheading'

export default function TestimonialSec() {
  return (
    <div className='test-sec-container common-container'>
      <Subheading text={"Testimonials"} alignText={"center"}/>
      <div className="test-sec-content common-content py-3">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  )
}
