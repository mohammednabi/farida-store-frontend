"use client"
import { StoreContext } from '@/contexts/StoreContext'
import { Button, Divider } from '@nextui-org/react'
import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'

const TotalPrice = () => {

    const {cart} = useContext(StoreContext)

  return (
      <div className='flex flex-col w-full p-4 gap-5 capitalize'>
          <div className='bg-mainPink text-mainWhite rounded-lg'>
              <h1 className='text-center text-2xl font-bold py-[.3rem] p-1 capitalize'>total items</h1>
          </div>
          <div className='flex justify-between items-center '>
              <h1 className='text-xl'>items  :</h1>
              <h1 className='text-lg font-bold'>{cart.totalPrice.toFixed(2)} $</h1>
          </div>
          <Divider />
           <div className='flex justify-between items-center '>
              <h1 className='text-xl'>shipping  :</h1>
              <h1 className='text-lg font-bold'>not available now </h1>
          </div>
          <Divider /> 
             <div className='flex justify-between items-center '>
              <h1 className='text-xl'>total  :</h1>
              <h1 className='text-lg font-bold'>{cart.totalPrice.toFixed(2)} $</h1>
          </div>
  <Divider /> 
          <Button className='bg-mainBlack text-white text-xl capitalize' radius='sm'>
              complete your order
          </Button>
    </div>
  )
}

export default observer(TotalPrice)