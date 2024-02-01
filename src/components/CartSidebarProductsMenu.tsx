"use client"
import React from 'react'
import CartSidebarProduct from './CartSidebarProduct'
import { Divider } from '@nextui-org/react'


const CartSidebarProductsMenu = () => {
  return (
      <div className='flex flex-col  gap-3 p-5 overflow-auto'>
          <CartSidebarProduct id='1' imageUrl='/fridge2.webp' price='500' title='fridge'/>
          <Divider />
          <CartSidebarProduct id='2' imageUrl='/tv product.webp' price='700' title='tv'/>
          <Divider />
          <CartSidebarProduct id='3' imageUrl='/fridge2.webp' price='500' title='fridge'/>
          <Divider />
          <CartSidebarProduct id='4' imageUrl='/fridge2.webp' price='500' title='fridge'/>
          <Divider />
          <CartSidebarProduct id='5' imageUrl='/fridge2.webp' price='500' title='fridge'/>
          <Divider />
          <CartSidebarProduct id='5' imageUrl='/fridge2.webp' price='500' title='fridge'/>
          <Divider />
          <CartSidebarProduct id='5' imageUrl='/fridge2.webp' price='500' title='fridge'/>
          <Divider />
          <CartSidebarProduct id='5' imageUrl='/fridge2.webp' price='500' title='fridge'/>
          <Divider />
          <CartSidebarProduct id='5' imageUrl='/fridge2.webp' price='500' title='fridge'/>
          <Divider />
          <CartSidebarProduct id='5' imageUrl='/fridge2.webp' price='500' title='fridge'/>
            

    </div>
  )
}

export default CartSidebarProductsMenu