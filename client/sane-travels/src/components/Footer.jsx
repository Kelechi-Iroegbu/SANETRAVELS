import React from 'react'
import { assets } from '../assets/assets'

export default function Footer() {
  return (
    <div className='relative bg-[#1D535D] h-[510px] w-[1440px] t-[540px] text-white p-15'>
        <article className=' grid grid-cols-2 border-b pb-20 pr-60 ]'>
          <div>
            <img class="float-none h-[63.37px] w-[63.37px] top-[81px] left-[116px] bg-[#000000] border rounded-full" src={assets.logo} alt=""/>
            <p className='pt-4'>  Sane Travel Agency was founded on the 3rd of October<br></br> 2020 and has remained at the top of it's game providing<br></br>comtemptorary alternatives in the travel industry, in <br></br> hotels,holiday packages tours,flights deals for clients.
          </p>
          </div>
          <div className='flex gap-50'>
            <div className=''>Support
              <ul className='pt-4 flex justify-center'>
                About Us
                Service
              </ul>
            </div>
              <div>Support
                <ul>
                  About Us
                </ul>
              </div>
                <div>Support
                  <ul>
                    Flight
                  </ul>
                </div>
          </div>
        </article>
        <div>
          <div>
            <img />
          </div>
        </div>
    </div>
  
  
  )
}
