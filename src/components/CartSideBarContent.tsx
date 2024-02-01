"use client"
import { StoreContext } from '@/contexts/StoreContext';
import { Button, Divider } from '@nextui-org/react';
import React, { useContext } from 'react'

import CartSidebarEmptyCart from './CartSidebarEmptyCart';
import CartSidebarHeader from './CartSidebarHeader';
import CartSidebarFooter from './CartSidebarFooter';
import CartSidebarProductsMenu from './CartSidebarProductsMenu';



const CartSideBarContent = () => {

    const {cartSidebar} = useContext(StoreContext)
const empty = false

  return (
      <div className='flex flex-col justify-between h-full'>
          
          <CartSidebarHeader close={cartSidebar.hideWholeCartSidebar}/>

{ empty ?<CartSidebarEmptyCart />
      :<CartSidebarProductsMenu />}
          
<CartSidebarFooter totalPrice='1000'/>
          
    </div>
  )
}

export default CartSideBarContent