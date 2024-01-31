"use client"
import React from 'react'
import WishlistContent from './WishlistContent'
import WishListFliters from './WishListFliters'
import { Divider } from '@nextui-org/react'

const WishListSections = () => {
  return (
      <div className='grid grid-cols-[3fr_auto_1fr] mt-10  px-20 gap-20'>
      <WishlistContent />
      <Divider orientation='vertical'/>
          <WishListFliters />
          
    </div>
  )
}

export default WishListSections