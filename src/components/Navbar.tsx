
import React from 'react'
import NavIcons from './NavIcons'
import NavLinks from './NavLinks'
import NavMenuIcon from './NavMenuIcon'


const NavBar2 = () => {



   

  return (
      <div className='relative p-5 px-10 w-full min-h-[3.75rem] max-h-[5rem] border-b-[1px] border-b-mainDarkBlue border-solid'>
          <div className='flex jus items-center'>
           <NavMenuIcon />
              <NavLinks />
              <NavIcons />
          </div>
           
   </div>
  )
}

export default NavBar2