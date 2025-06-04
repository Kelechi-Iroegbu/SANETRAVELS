import React from 'react'

export default function HomePage_OfferCard(props) {
 
 console.log(props.data)
 
    return (
    <div className=' inline-block p-4  w-[181px] h-[219px] t-[477px] left-[190px] mt-9 border-none  '>
            <img src={props.data.logoUrl}/>
            <h1>{props.data. title}</h1>
            <p>{props.data.text}</p>
        
    </div>
  )
}


