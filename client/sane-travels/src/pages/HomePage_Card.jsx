import React from 'react'

export default function HomePage_Card(props) {
 
 console.log(props.data)
 
    return (
    <div className=' inline-block p-4  rounded-lg w-[380px] h-[400px] t-[262px] left-[115px] mt-9 bg-white border-none  '>
            <img src={props.data.locationImageUrl} className='rounded-lg'/>
            <h1>{props.data.city}</h1>
            <p>{props.data.country}</p>
            <button className='px-3 py-2 rounded-lg bg-[#E49D42]'>Send</button>
        
    </div>
  )
}
