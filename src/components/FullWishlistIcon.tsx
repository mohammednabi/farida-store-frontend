"use client"
import Link from 'next/link'
import React, { useContext } from 'react'
import { FaRegHeart } from "react-icons/fa";
import Icon from './Icon';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '@/contexts/StoreContext';


const FullWishlistIcon = () => {

    const {wishlist} = useContext(StoreContext)



  return (
     <div>
          
          <Link href={"/wishlist"}>
          <Icon icon={<FaRegHeart  />} hasBorder={true}  showPop={true} count={wishlist.items.length} />
          </Link>
     </div>
          
 
  )
}

export default observer(FullWishlistIcon)