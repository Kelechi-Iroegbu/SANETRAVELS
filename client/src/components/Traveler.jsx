import React,{useState}from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


export default function traveler(props) {
    const {showTraveler,setShowTraveler} = props;
    const [travelersData, setTravelersData] = useState({adult: 2, children: 0, infant: 1})

function handleTravelers(e, type) {
    const {id} = e.target
    if(type=="decrement"){
        travelersData[id]>=1 &&
        setTravelersData({
            ...travelersData,
            [id]: travelersData[id]-1
        })                                                                              
    }
    else{
         setTravelersData({
            ...travelersData,
            [id]: travelersData[id]+1
        })
    }
  console.log(e.target.id, type)
}

const handleApply = ()=>{
    console.log('clicked')
    try {
        props.setPayload({
        ...props.payload,
        travelers:travelersData
    })
    console.log(props)
        
    } catch (error) {
        console.error(error)
    }
  
}

  return (
<div className = '  text-black -ml-34'>
<div className='w-[342px] p-4 gap-2 h-[262px] flex flex-col rounded-[5px] bg-[#FFFFFF]'>
 <div className='flex justify-between  bg-[#FFFFFF]'>
  <p> Adult <span>(12+)</span></p>
  <div className='flex gap-3'>
    <button id='adult' onClick={(event)=>handleTravelers(event,'decrement')}> - </button>
    <span> {travelersData.adult} </span>
    <button id='adult' onClick={(event)=>handleTravelers(event,'increment')}> + </button>
   </div>
</div>
<div className='flex justify-between  bg-[#FFFFFF]'>
  <p>Children <span>(2-3)</span></p>
  <div className='flex gap-3'>
    <button> - </button>
    <span></span>
    <button> + </button>
   </div>
</div>
<div className='flex justify-between  bg-[#FFFFFF]'>
  <p>Infact <span>(Under 2yrs)</span></p>
  <div className='flex gap-3'>
    <button> - </button>
    <span> 0 </span>
    <button> + </button>
   </div>
</div>
<button onClick={handleApply}>Apply</button>
</div>
</div>
  )
}
