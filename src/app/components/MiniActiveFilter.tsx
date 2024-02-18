"use client"
import React from 'react'

import { IoMdClose } from "react-icons/io";

interface MiniActiveFilterProps{
    filterTitle: string
    filterName:string
    deleteFilter:(filter:string)=>void
}




const MiniActiveFilter = ({ filterTitle,filterName, deleteFilter }: MiniActiveFilterProps) => {
    
const deleteTheFilter = () => {
    deleteFilter(filterName)
}

  return (
      <div className=' border-mainGray border-2 border-solid p-3 flex items-center gap-2 rounded-md'>
          <h1>{filterTitle }</h1>
          <IoMdClose className='text-xl text-mainPink cursor-pointer' onClick={deleteTheFilter} />
    </div>
  )
}

export default MiniActiveFilter