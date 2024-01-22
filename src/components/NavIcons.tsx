
import React from 'react'



import { FaRegHeart } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import Icon from './Icon';
import FullCartIcon from './FullCartIcon';
import FullUserIcon from './FullUserIcon';



const NavIcons = () => {
  return (
      <div className='flex items-center gap-2' >
         
          <Icon icon={<AiOutlineSearch />} hasBorder={true}   />
        <FullUserIcon />
          <Icon icon={<FaRegHeart />} hasBorder={true}   />
         <FullCartIcon />
          
        
             
         
  </div>
  )
}

export default NavIcons