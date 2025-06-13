import React from 'react'
import { assets } from '../assets/assets'

export default function Header() {
  return (
    <div className="relative">
    <div className="flex items-center justify-center w-[fullpx] h-[40px]  bg-[#1D535D] p text-white">
      For emergency, kindly contact 08165629442 to follow-up your request
    </div>
    <div className="bg-[#E3EBFC] w-[fullpx] h-[64px] top-[40px] flex items-center">
      <div className= "flex absolute left-20">
        <img src= {assets.logo} alt=""/>
      </div>
      <div className="flex absolute left-230 flex-row space-x-4 ">
      <button className='text-[#E49D42]' >Login</button>
      <button className="bg-[#E49D42] p text-white px-4 py-2 rounded-sm">Create account</button>
      <div className ="flex flex-row space-x-4 absolute left-60 mt-1">
         <img src={assets.facebook} alt="" />
         <img src={assets.twitter} alt="" />
         <img src={assets.instagram} alt="" />
      </div>
      </div>
     
     


    </div>
    </div>
  )
}
