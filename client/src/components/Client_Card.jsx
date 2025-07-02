import React from 'react'

export default function Client_Card(props) {
  return (
    <div className='inline-block p-4 rounded-[8px] w-[533px] gap-[25px] h-[289px] mt-9 bg-white border-[1px] border-[#F0F4FD]  '>
        <p>{props.data.text}</p>
        <div className='flex'>
        <img src={props.data.client_image} className='rounded-lg'/>
        <h2>{props.data.name}</h2>
        <h3>{props.data.portfolio}</h3>
        </div>

    </div>
  )
}
