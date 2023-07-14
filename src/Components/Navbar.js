import React from 'react'
import { BtnFill, BtnOutlined } from './Btn'
import Logo from './Logo'

export default function Navbar() {
  return (
    <div className='w-full flex justify-center items-center border-b py-2 bg-white'>
      <div className=' min-w-[80%] md:min-w-full sm:px-3  sm:min-w-full flex justify-between items-center
      '>
        <div className="logo w-[190px] md:w-[130px] sm:min-w-[130px]:">
            <Logo />
        </div>
        <div className="items flex justify-center items-center gap-6">

            <div className="links flex  justify-center items-center gap-6 md:gap-3 text-sm md:text-sm">
                <a className='block sm:hidden' href="">Home</a>
                <a className='block sm:hidden'  href="">Features</a>
                <a className='block sm:hidden'  href="">Services</a>
                <BtnOutlined text={"Login"}/>
                <BtnFill text={"Register"}/>
            </div>
        </div>
      </div>
    </div>
  )
}
