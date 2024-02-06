"use client"
import { Autocomplete, AutocompleteItem, Button, Input } from '@nextui-org/react'
import { useRouter } from 'next/navigation';
import React from 'react'

import { IoAddCircleOutline } from "react-icons/io5";
import { IoFilterOutline } from "react-icons/io5";


const WishListFliters = () => {

  const filters = [{ id: 1, type: "Default" }, { id: 2, type: "Rating" }, { id: 3, type: "Price" }, { id: 4, type: "Reviews" }, { id: 5, type: "A-Z" }]
  
    const router = useRouter()
    
    const goToHomePage=()=>{router.push("/")}


  return (
    <div className=' relative'>

      <div className='flex flex-col gap-10 fixed'>

      <Button
      endContent={<IoAddCircleOutline />}
      className='bg-mainBlack text-mainWhite p-5 py-8 text-2xl capitalize' onClick={goToHomePage}>
        add new item 
</Button>

      <Autocomplete
        label="Filters"
        placeholder='Filter by ->'
        defaultItems={filters}
        variant='faded'
        value={filters[0].type}
          startContent={<IoFilterOutline />}
          className='border-mainPink'
          color='success'
          classNames={{
       popoverContent:"bg-emerald-500 text-mainWhite "
          }}
      >
        {(item) => <AutocompleteItem key={item.id}>{ item.type}</AutocompleteItem>}
     </Autocomplete>
          </div>
    </div>
  )
}

export default WishListFliters