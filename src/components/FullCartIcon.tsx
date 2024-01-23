"use client"
import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import Icon from './Icon';

import CartDrop from './Cartdrop';



import { observer } from 'mobx-react-lite';

import { StoreContext } from '@/contexts/StoreContext';

const FullCartIcon = () => {
 const {cart} = useContext(StoreContext)


  return (
      <div onMouseOver={cart.displayCartMenu} onMouseLeave={cart.hideCartMenu}>
          <div  >
              
          <Icon icon={<AiOutlineShoppingCart />} hasBorder={true} showPop={true} count={cart.productsCount} />
          </div>
        
              
      <CartDrop />
         
      
      </div>
  )
}

export default observer( FullCartIcon)