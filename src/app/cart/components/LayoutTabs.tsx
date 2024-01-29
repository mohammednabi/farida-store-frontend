"use client"
import React from 'react'
import CartTab from './CartTab'
import {Progress} from "@nextui-org/react";

const LayoutTabs = () => {
    return (
      <div className='flex flex-col gap-2 w-full h-auto px-32 py-3'>
            
      <div className='w-full  grid grid-cols-3 '>
          <CartTab step={1} title='shopping cart' description='View your items'/>
          <CartTab step={2} title='Shipping and payment' description='Add some details about you' opacity='opacity-50'/>
          <CartTab step={3} title='Confirmation' description='Review your orders' opacity='opacity-50'/>
      </div>
            <Progress
                aria-label="Loading..."
                value={100 / 3}
                size='sm'

radius='none'

                className="w-full"
                classNames={{
               indicator: "bg-gradient-to-r from-mainPink to-mainPink"
            }}
            />
      </div>
  )
}

export default LayoutTabs