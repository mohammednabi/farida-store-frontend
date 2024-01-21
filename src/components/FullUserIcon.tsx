"use client"
import React, { useContext } from 'react'
import Icon from './Icon'
import { FaRegUser } from "react-icons/fa";
import UserDrop from './UserDrop';
import { UserDropContext } from '@/contexts/UserDropStoreContext';
import { motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';
    
const FullUserIcon = () => {

const userDrop = useContext(UserDropContext)

  return (
     <div onMouseOver={userDrop.displayUserMenu} onMouseLeave={userDrop.hideUserMenu}>
          <Icon icon={<FaRegUser />} hasBorder={true}   />
        
     <UserDrop />
         
      
      </div >
  )
}

export default observer(FullUserIcon)