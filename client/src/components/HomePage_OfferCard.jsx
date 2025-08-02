import React from 'react'

export default function HomePage_OfferCard(props) {
 
    return (
    <div className=' inline-block p-4  w-[181px] h-[219px] t-[477px] left-[190px] mt-9 border-none  '>
            <div className='flex justify-center'>
            <img src={props.data.logoUrl}/>
            </div>
            <div className='pt-10'>
            <h1 className='font-poppins font-semibold text-center pb-4'>{props.data. title}</h1>
            <p className='font-poppins text-subPrimary text-center '>{props.data.text}</p>
            </div>
        
    </div>
  )
}


