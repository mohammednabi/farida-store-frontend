"use client"
import { StoreContext } from "@/contexts/StoreContext";
import { CartStore } from "./cartStore";
import { UserDropStore } from "./userDropStore";

import React from 'react'
import { userStore } from "./userStore";
import { SideBarStore } from "./sidebarStore";
import { ProductsStore } from "./productsStore";
import { CartSidebarStore } from "./cartSidebarStore";


// cart store instance 

 const cartProducts = new CartStore()

// userDrop store instance

 const userDropInstance = new UserDropStore()

// user information store 

const userStoreInstance = new userStore()

// sidebar state store

const sidebarInstance = new SideBarStore()

// cart sidebar state store

const cartSidebarInstance = new CartSidebarStore()

// products store

const allProducts = new ProductsStore()

// ==========================================================
// this object is for all stores that will for all states

export const store ={
    cart: cartProducts,
    userDrop: userDropInstance,
    user: userStoreInstance,
    sidebar: sidebarInstance,
    cartSidebar:cartSidebarInstance,
products:allProducts
    
}

interface indexChildren {
    children:React.JSX.Element
}



// store context provider

const StoreContextProvider = ({children}:indexChildren) => {
  return (
      <StoreContext.Provider value={store}>
      {children}
      </StoreContext.Provider>   
  )
}

export default StoreContextProvider