"use client"


import { userDropInstance } from "@/utils/stores"
import { UserDropStore } from "@/utils/stores/userDropStore"
import { createContext } from "react"
import React from 'react'


export const UserDropContext = createContext<UserDropStore>(userDropInstance)
interface Children {
    children:React.JSX.Element
}


const UserDropStoreContextProvider = ({children}:Children) => {
  return (
  <UserDropContext.Provider value={userDropInstance}>
    {children}
  </UserDropContext.Provider>
  )
}

export default UserDropStoreContextProvider