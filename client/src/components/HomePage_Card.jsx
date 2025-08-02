import React from 'react'

export default function HomePage_Card(props) {
 
    return (
    <div className=' inline-block p-4  rounded-lg w-full h-[400px] mt-9 bg-white border-none  '>
            <img src={props.data.locationImageUrl} className='rounded-lg  -mb-11 w-[347px] h-[176px]'/>
            <img src= {props.data.logo} className='rounded-b-full border-white -mb-7'/>
            <div className='flex justify-between font-poppins text-subPrimary '>
              <div className='text-black'>PRICE</div>
            <div className='flex justify-between space-x-4 -mb-10  text-[12px]  '>
            <h1>{props.data.city}</h1>
            <div className='bg-subPrimary rounded-full w-[24px] h-[24px] flex justify-center items-center'>
            <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.63009 7.66883L4.57109 1.30403L6.30899 0.83783L12.5649 6.61583L17.3007 5.34683C17.6466 5.25422 18.0151 5.30279 18.3251 5.48187C18.6352 5.66095 18.8614 5.95586 18.954 6.30173C19.0466 6.6476 18.998 7.01609 18.8189 7.32615C18.6399 7.6362 18.345 7.86242 17.9991 7.95503L4.52429 11.564L3.82589 8.95583L4.04279 8.89733L6.26309 11.0978L3.89969 11.7314C3.70589 11.7834 3.50028 11.7691 3.31553 11.6908C3.13078 11.6126 2.97748 11.4748 2.87999 11.2994L0.519287 7.04603L1.82339 6.69683L4.04279 8.89733L8.63009 7.66793V7.66883ZM2.79989 14.3H17.1999V16.1H2.79989V14.3Z" fill="white"/>
            </svg>
            </div>
            <p>{props.data.country}</p>
            </div>
            </div>
            <p className='pt-4 text-subPrimary text-[12px]'>{props.data.date}</p>
            <div className='flex justify-between pt-7'>
            <img src={props.data.flightlogo}/>
            <button className='w-[144px] h-[45px] text-family bg-secondary rounded-sm text-white'> Book Now </button>
            </div>
            
    </div>
  )
}
