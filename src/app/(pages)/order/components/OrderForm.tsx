"use client"
import { Button, Input } from '@nextui-org/react'
import React from 'react'

const OrderForm = () => {
  return (
      <div className='flex flex-col items-center justify-center gap-10 w-5/12'>
          <h1>Please enter your order number in the box below and press the “Track Order” button to view its status.
              You can find the order number in the mail sent to you containing the order confirmation Receipt.</h1>

          <form className='gap-5 flex flex-col w-full '>
              <Input
                  label="Order number"
                  labelPlacement='outside'
                  placeholder='You will find it in your order confirmation message'
                  radius='none'
                  variant='bordered'
                  size='lg'
              className='w-full'
              />
                <Input
                  label="Receipt email"
                  labelPlacement='outside'
                  placeholder='The email you used to complete the order'
                   radius='none'
                  variant='bordered'
                  size='lg'
              className='w-full'
              />
              <Button
                  variant='solid'
                  radius='none'
                  className='bg-mainBlack text-mainWhite capitalize text-xl'>track order</Button>
</form>

    </div>
  )
}

export default OrderForm