"use client"

import { CartStore } from "@/utils/stores/cartStore"
import { createContext } from "react"
import React from 'react'
import { cartProducts } from "@/utils/stores"

interface cartChildren {
    children:React.JSX.Element
}

export const CartContext = createContext<CartStore>(cartProducts)



const CartStoreContextProvider = ({children}:cartChildren) => {
  return (
      <CartContext.Provider value={cartProducts}>
      {children}
      </CartContext.Provider>
  )
}

export default CartStoreContextProvider