import { useEffect, useRef, useState } from "react";
import { Grid } from "@mui/material";
const totalItems = 14; // 7 columns × 2 rows
const items = Array.from({ length: totalItems });
const Modal=({open}) => {
    if (!open) return null
  return (
    <div>
        <div className = ' w-[976px] h-[342px] bg-red-200 '>
        <div className='flex justify-between border-b p-4'>
        <span>Fare Calender</span>
        <span className='border closeBtn'>x</span>
        </div>
        <div className='flex justify-center'>
        <div className='pt-15 flex-col'>
            <div>Departure</div>
        <div className="modalContainer w-[854px] h-[114px] bg-[#FFFFFF] rounded-sm ">
            <div className="p-4">
      <Grid container>
        {items.map((_, index) => (
          <Grid
            item
            xs={12 / 7}
            key={index}
            className="flex justify-center"
          >
            <div className="w-[120px] h-[72px] shadow flex items-center justify-center">
              Box {index + 1}
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
            
            
        </div>
        </div>
        </div>
    </div>
        

    </div>
  )
}

export default Modal
     