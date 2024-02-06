"use client"
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { TfiDropbox } from "react-icons/tfi";

const WishListIsEmpty = () => {
    const router = useRouter()
    
    const goToHomePage=()=>{router.push("/")}

  return (
      <div className='flex flex-col gap-5 justify-center items-center w-full h-72 pt-10'>
          <div className='flex flex-col items-center gap-2'>
          <TfiDropbox  className='text-[12rem] text-mainBlack/50'/>
              <h1 className='text-2xl text-mainBlack/50 capitalize'>your wishlist is empty</h1>
          </div>
          <Button className='bg-mainBlack text-xl text-mainWhite capitalize py-6 px-20' onClick={goToHomePage}>
              explore
          </Button>
    </div>
  )
}

export default WishListIsEmpty