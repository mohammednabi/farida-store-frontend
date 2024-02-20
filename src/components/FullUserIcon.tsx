"use client"
import React, { useContext } from 'react'
import Icon from './Icon'
import { FaRegUser } from "react-icons/fa";
import UserDrop from './UserDrop';

import { motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '@/contexts/StoreContext';
import Link from 'next/link';

    


const FullUserIcon = () => {

  const { userDrop, user } = useContext(StoreContext)
  
   const uiCondition = ! user?.userData?.uid?.length ?? 0 > 0

  return (
    <div onMouseOver={userDrop.displayUserMenu} onMouseLeave={userDrop.hideUserMenu}>
       <Link href={uiCondition ?"/login":"user"}>
          <Icon icon={<FaRegUser />} hasBorder={true}   />
    </Link>
        
     <UserDrop />
         
      
      </div >
  )
}

export default observer(FullUserIcon)