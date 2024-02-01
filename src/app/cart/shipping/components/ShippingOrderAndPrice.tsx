"use client"
import { Divider } from '@nextui-org/react'
import React from 'react'
import ShippingRowDetails from './ShippingRowDetails'


const ShippingOrderAndPrice = () => {
  return (
      <div className='flex flex-col gap-5'>
          <h1 className='capitalize text-2xl font-bold'>your order</h1>

          <div className='flex flex-col gap-2'>
              

            

         <div className='grid grid-cols-[2fr_.5fr] gap-3 capitalize text-xl text-mainBlack/50 '>
              <h1>product</h1>
              <h1>total</h1>
              </div>
              <Divider />
              <ShippingRowDetails title='fridge' price='500$'/>
              <Divider />
                  <ShippingRowDetails title='fridge' price='500$'/>
           
              <Divider />
                <ShippingRowDetails title='fridge' price='500$'/>
              <Divider />
                  <ShippingRowDetails title='fridge' price='500$'/>
              <br />
              <Divider />
              <ShippingRowDetails title='total prices' price='20000$' titleStyle='font-bold capitalize ' priceStyle='text-red-500' titleSize='text-xl'/>
                 <Divider />
                  <ShippingRowDetails title='shipping' price='20$' titleStyle='font-bold capitalize ' priceStyle='text-emerald-500' titleSize='text-xl'/>
                 <Divider />
                  <ShippingRowDetails title='total' price='20020$' titleStyle='font-bold capitalize ' priceStyle='text-mainPink' titleSize='text-xl'/>
          </div>

    </div>
  )
}

export default ShippingOrderAndPrice