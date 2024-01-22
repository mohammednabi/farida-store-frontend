import React from 'react'
import NavIcons from './NavIcons'
import NavLinks from './NavLinks'
import { IoMenuOutline } from "react-icons/io5";
import Icon from './Icon';


const NavBar2 = () => {

   

  return (
      <div className='relative p-5 px-10 w-full min-h-[3.75rem] max-h-[5rem] border-b-[1px] border-b-mainDarkBlue border-solid'>
          <div className='flex jus items-center'>
              <Icon icon={<IoMenuOutline size={"1.5rem"}/>} />
              <NavLinks />
              <NavIcons />
          </div>
           
   </div>
  )
}

export default NavBar2