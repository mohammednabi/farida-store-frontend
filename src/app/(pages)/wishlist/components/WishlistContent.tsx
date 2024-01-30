"use client"
import { Divider } from '@nextui-org/react'
import React from 'react'
import WishListItem from './WishListItem'

const WishlistContent = () => {
  return (

    
      <div className='flex flex-col mt-10 px-20'>
          <div className='w-full bg-mainPink text-white p-5 flex items-center justify-center text-xl font-bold capitalize rounded-xl'>
              <h1>wish list items</h1>

          </div>
          <div className='flex flex-col gap-3'>
              <WishListItem />
              <Divider/>
          </div>

    </div>
  )
}

export default WishlistContent