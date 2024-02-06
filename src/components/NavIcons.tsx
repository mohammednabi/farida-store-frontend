"use client"
import React, { useContext } from 'react'



import { AiOutlineSearch } from "react-icons/ai";
import Icon from './Icon';
import FullCartIcon from './FullCartIcon';
import FullUserIcon from './FullUserIcon';
import { StoreContext } from '@/contexts/StoreContext';
import { observer } from 'mobx-react-lite';

import FullWishlistIcon from './FullWishlistIcon';



const NavIcons = () => {

  const {searchBox} = useContext(StoreContext)



  return (
      <div className='flex items-center gap-2' >
         
          <Icon icon={<AiOutlineSearch  />} hasBorder={true}   whenClick={searchBox.displayWholeSearchBox} />
      <FullUserIcon />
      <FullWishlistIcon />
         <FullCartIcon />
          
        
             
         
  </div>
  )
}

export default observer(NavIcons)