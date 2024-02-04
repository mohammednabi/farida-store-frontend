"use client"
import React, { useContext } from 'react'
import CartSidebarProduct from './CartSidebarProduct'
import { Divider } from '@nextui-org/react'
import { StoreContext } from '@/contexts/StoreContext'
import { observer } from 'mobx-react-lite'


const CartSidebarProductsMenu = () => {

const {cart} = useContext(StoreContext)

  return (
    <div className='flex flex-col  gap-3 p-5 overflow-auto h-full w-full'>
      {cart.cartProducts.map((product) => (
        <div key={product.id} className='flex flex-col gap-3'>
          <CartSidebarProduct    product={product}/>

          <Divider />
        </div>
      ))}
            

    </div>
  )
}

export default observer(CartSidebarProductsMenu)