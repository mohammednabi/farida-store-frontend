"use client"
import { StoreContext } from "@/contexts/StoreContext";
import { CartStore } from "./cartStore";
import { UserDropStore } from "./userDropStore";

import React from 'react'
import { userStore } from "./userStore";

// cart store instance 

 const cartProducts = new CartStore()

// userDrop store instance

 const userDropInstance = new UserDropStore()


const userStoreInstance = new userStore()

// ==========================================================
// this object is for all stores that will for all states

export const store ={
    cart: cartProducts,
    userDrop: userDropInstance,
    user :userStoreInstance
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