"use client"
import { Divider } from '@nextui-org/react';
import React from 'react'
import { IoMdClose } from "react-icons/io";


interface cartSidebarProps {
    close: any 
}

const CartSidebarHeader = ({close}:cartSidebarProps) => {
  return (
   <div>
              
          <div className='p-5 flex justify-between items-center'>
              <h1 className='text-xl font-bold capitalize'>shopping cart</h1>
<IoMdClose  className='text-2xl cursor-pointer font-bold ' onClick={close}/>
          </div>
          <Divider />
          </div>
  )
}

export default CartSidebarHeader