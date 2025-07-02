import React from 'react'

export default function HomePage_Card(props) {
 
    return (
    <div className=' inline-block p-4  rounded-lg w-full h-[400px] mt-9 bg-white border-none  '>
            <img src={props.data.locationImageUrl} className='rounded-lg'/>
            <h1>{props.data.city}</h1>
            <p>{props.data.country}</p>
            <button className='px-3 py-2 rounded-lg bg-[#E49D42]'>Send</button>
        
    </div>
  )
}
