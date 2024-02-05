"use client"
import { StoreContext } from '@/contexts/StoreContext';
import { Button, Divider } from '@nextui-org/react';
import React, { useContext } from 'react'

import CartSidebarEmptyCart from './CartSidebarEmptyCart';
import CartSidebarHeader from './CartSidebarHeader';
import CartSidebarFooter from './CartSidebarFooter';
import CartSidebarProductsMenu from './CartSidebarProductsMenu';
import { observer } from 'mobx-react-lite';



const CartSideBarContent = () => {

    const {cartSidebar,cart} = useContext(StoreContext)


  return (
      <div className='flex flex-col justify-between h-full'>
          
      
          <CartSidebarHeader close={cartSidebar.hideWholeCartSidebar}/>

{ cart.productsCount ===0 ?<CartSidebarEmptyCart />
      :<CartSidebarProductsMenu />}
          
      <CartSidebarFooter  />
          
    </div>
  )
}

export default observer(CartSideBarContent)