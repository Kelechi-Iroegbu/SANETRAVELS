import React from 'react'

export default function Booking_Card(props) {
  return (
    <div className="w-[850px] h-[250px] bg-[#FFFFFF] border-none">
       <div className=' flex pl-4 space-x-12 text-bluedianne-500'>
        <img src={props.data.logo} className='flex mb-10'/>
        <div className='w-[449px] h-[167px] flex items-center pt-10 flex-wrap flex justify-between' >
        <div className='flex space-x-3'>
        <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.63033 7.66889L4.57133 1.30409L6.30923 0.837891L12.5651 6.61589L17.3009 5.34689C17.6468 5.25428 18.0153 5.30285 18.3253 5.48193C18.6354 5.66101 18.8616 5.95592 18.9542 6.30179C19.0468 6.64766 18.9983 7.01615 18.8192 7.32621C18.6401 7.63626 18.3452 7.86248 17.9993 7.95509L4.52453 11.5641L3.82613 8.95589L4.04303 8.89739L6.26333 11.0979L3.89993 11.7315C3.70613 11.7835 3.50052 11.7692 3.31577 11.6909C3.13102 11.6126 2.97772 11.4749 2.88023 11.2995L0.519531 7.04609L1.82363 6.69689L4.04303 8.89739L8.63033 7.66799V7.66889ZM2.80013 14.3001H17.2001V16.1001H2.80013V14.3001Z" fill="#34DADC"/>
        </svg>
        <div className='flex-wrap text-[#34DADC]'>
         <h6>Depart</h6>
         <p className='text-[#18BDC2]'>{props.data.dateto}</p>
         <p className='text-[#197B85]'>{props.data.timeto}</p>
        </div>
        </div>

        <div className='text-center text-[#000000A6]/65'>
            <p className='border-b border-dashed border-[#34DADC] w-[187px]'>2h 35m</p>
            <p>Non-Stop</p>
        </div>
        
  
        <div className='flex space-x-3 '>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.42851 7.6229L7.09551 0.0791016L8.83521 0.545301L11.3642 8.6768L16.0991 9.9458C16.2704 9.99166 16.4309 10.0708 16.5716 10.1787C16.7123 10.2866 16.8303 10.4212 16.919 10.5747C17.0076 10.7282 17.0652 10.8977 17.0884 11.0735C17.1115 11.2492 17.0999 11.4278 17.054 11.5991C17.0082 11.7704 16.929 11.9309 16.8211 12.0716C16.7132 12.2122 16.5787 12.3303 16.4251 12.419C16.2716 12.5076 16.1021 12.5652 15.9264 12.5884C15.7506 12.6115 15.572 12.5999 15.4007 12.554L1.92591 8.9432L2.62431 6.335L2.84211 6.3935L3.66471 9.4085L1.30041 8.7758C1.10667 8.72367 0.93591 8.60829 0.815244 8.448C0.694579 8.28771 0.630932 8.0917 0.634413 7.8911L0.715413 3.0284L2.01951 3.3776L2.84211 6.3935L7.42851 7.6229ZM1.79991 15.2999H16.1999V17.0999H1.79991V15.2999Z" fill="#34DADC"/>
        </svg>

         <div className='flex-wrap text-[#34DADC]'>
         <h6>Depart</h6>
         <p className='text-[#18BDC2]'>{props.data.dateto}</p>
         <p className='text-[#197B85]'>{props.data.timeto}</p>
        </div>
        </div>
        <div className='border-t pt-5 mt-10 border-[#112211]/25'>
        <button className='w-[449px] h-[48px] rounded-sm bg-[#E49D42]/16 border border-[#E49D42] text-[#E49D42]'>Flight Details</button>
        </div>
        </div>
        <div className='pt-29'>
        <p className='text-[#112211] '>starting from</p>
        <p className='text-[#FF8682] font-weight:900 font-extrabold text-xl font-Montserrat'>#854,995</p>
        </div>
    </div>
    </div>
  )
}
