"use client"
import React, { useContext } from 'react'



import { FaRegHeart } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import Icon from './Icon';
import FullCartIcon from './FullCartIcon';
import FullUserIcon from './FullUserIcon';
import { StoreContext } from '@/contexts/StoreContext';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/navigation';



const NavIcons = () => {

  const {searchBox} = useContext(StoreContext)
const router = useRouter()

  const goToWishListPage = () => {
    router.push("/wishlist")
  }

  return (
      <div className='flex items-center gap-2' >
         
          <Icon icon={<AiOutlineSearch  />} hasBorder={true}   whenClick={searchBox.displayWholeSearchBox} />
        <FullUserIcon />
          <Icon icon={<FaRegHeart onClick={goToWishListPage} />} hasBorder={true} whenClick={goToWishListPage} />
         <FullCartIcon />
          
        
             
         
  </div>
  )
}

export default observer(NavIcons)