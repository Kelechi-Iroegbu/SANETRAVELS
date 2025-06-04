

import React from 'react'

export default function logoCard(props) {
console.log(props.data)
  return (
    <div className=' inline-block p-4  w-[1440px] h-[100px] t-[1001px] bg-[#F7F7F7]'>
        <img src={props.data.logo} />
    </div>
  )
}

