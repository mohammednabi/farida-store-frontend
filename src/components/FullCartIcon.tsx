"use client"
import React, { useContext, useState } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import Icon from './Icon';
import CartDrop2 from './CartDrop2';
import { CartContext } from '@/contexts/CartStoreContext';
import { observer } from 'mobx-react-lite';

const FullCartIcon = () => {
 const cart = useContext(CartContext)


  return (
      <div onMouseOver={cart.displayCartMenu} onMouseLeave={cart.hideCartMenu}>
          <div  >
              
          <Icon icon={<AiOutlineShoppingCart />} hasBorder={true} isCartIcon={true} count={cart.productsCount} />
          </div>
        
              
      <CartDrop2 />
         
      
      </div>
  )
}

export default observer( FullCartIcon)