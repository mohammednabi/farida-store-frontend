"use client"
import React from 'react'
import ProductsTable from './ProductsTable'
import { Divider } from '@nextui-org/react'
import TotalPrice from './TotalPrice'
import CartFooter from './CartFooter'


const CartContent = () => {


  
  return (
    <div className='grid grid-cols-[3fr_auto_1fr] px-32 '>
      <div className='flex flex-col gap-2'>

        <ProductsTable />
        <Divider />
       <CartFooter />
      </div>
              <Divider  orientation='vertical'/>
              <TotalPrice />
</div>
  )
}

export default CartContent