"use client"
import { Button, Divider } from '@nextui-org/react'
import React from 'react'

interface footerProps {
    totalPrice:string
}

const CartSidebarFooter = ({totalPrice}:footerProps) => {
  return (
  <div>
              
          <Divider />
          <div className='p-5 flex flex-col gap-5'>
              <div className='flex justify-between items-center capitalize text-xl'>
                  <h1>total :</h1>
                  <h1 className='text-green-500'>{totalPrice} $</h1>
              </div>

              <Button
              radius='none'
                  className='bg-mainBlack text-mainWhite capitalize'>
                  complete your order
              </Button>
          </div>
          </div>
  )
}

export default CartSidebarFooter