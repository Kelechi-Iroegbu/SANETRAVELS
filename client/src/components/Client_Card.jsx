import React from 'react'


export default function Client_Card(props) {
  return (
    <div className='border w-[533px] h-[289px] flex justify-center items-center rounded-[8px] border-[#F0D097]'>
    <div className='inline-block p-4 rounded-[8px] w-[494px] gap-[25px] h-[249px]  bg-white border-[1px] border-[#F0F4FD] '>
        <p className='text-subPrimary'>{props.data.text}</p>
        <div className='flex space-x-5 items-center'>
        <img src={props.data.client_image} className='rounded-lg pt-8'/>
        <div className='flex-wrap space-y-2'>
        <h2>{props.data.name}</h2>
        <h3>{props.data.portfolio}</h3>
        </div>
        </div>

    </div>
    </div>
  )
}
