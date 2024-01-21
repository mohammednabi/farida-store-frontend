"use client"

import { CartContext } from '@/contexts/CartStoreContext'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import {motion} from "framer-motion"

const CartDrop2 = () => {

   const cart = useContext(CartContext)


  return (
      <motion.div
      initial = {{scaleY:0,opacity:0}}
      animate={{scaleY:cart.isCartMenuDisplayed?1:0,opacity:cart.isCartMenuDisplayed?1:0}}    

          

          className='origin-top flex flex-col gap-5 bg-mainGray min-w-[20rem] capitalize w-auto h-auto p-5  text-mainBlack absolute top-20 right-0 z-10'>
         <h1 className='text-xl'>cart ({cart.productsCount}) </h1>

          <div>
              
         <h2 className='text-mainBlack/50'>your cart is empty </h2>
         <Link href={"#"}>continue → </Link>
          </div>
         
   </motion.div>
  )
}

export default observer(CartDrop2) 