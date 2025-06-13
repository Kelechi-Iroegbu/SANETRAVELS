import React from 'react'
import ReactFlagsSelect from "react-flags-select";
import { useState } from 'react'

export default function Text(props) {
        const {selected,setSelected} = props

  return (
    <div>
        <ReactFlagsSelect
        selected={selected}
        onSelect={(code) => setSelected(code)}
        searchable/>
    </div>
  )
}

