"use client"
import { StoreContext } from '@/contexts/StoreContext'
import { Button, Input } from '@nextui-org/react'
import React, { useContext } from 'react'
import { BiSend } from 'react-icons/bi'
import { MdDeleteForever } from 'react-icons/md'



const CartFooter = () => {

const {cart} = useContext(StoreContext)

  return (
      <div className='flex justify-between items-center px-5'>
          <Input
              type='text'
              placeholder='promo code'
              radius='sm'
              variant='bordered'
         className='w-1/3'
              endContent={
                  <div className='text-2xl cursor-pointer'>
                      <BiSend />
                  </div>
              }
              
          />

          <div className='flex items-center gap-5'>
              
              <div className='flex gap-2 items-center cursor-pointer capitalize'
              onClick={cart.deleteAllProducts}
              >
                  <h1>remove all </h1>
                  <MdDeleteForever className='text-2xl' />
              </div>
              
              <Button
              radius='sm'
                  className='bg-mainBlack text-mainWhite capitalize px-10 '>
                  update
              </Button>

          </div>

    </div>
  )
}

export default CartFooter