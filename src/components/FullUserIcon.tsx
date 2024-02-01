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

const {userDrop} = useContext(StoreContext)

  return (
    <div onMouseOver={userDrop.displayUserMenu} onMouseLeave={userDrop.hideUserMenu}>
       <Link href={ "/login"}>
          <Icon icon={<FaRegUser />} hasBorder={true}   />
    </Link>
        
     <UserDrop />
         
      
      </div >
  )
}

export default observer(FullUserIcon)