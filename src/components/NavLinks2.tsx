import Link from 'next/link'
import React from 'react'

const NavLinks2 = () => {
  return (
      <div className='capitalize flex flex-1 shrink   text-lg  '>
        <div className=' pl-36 flex flex-1 shrink  items-center justify-center gap-10'>
              <Link href={"#"} className='nav-link' >
          home
          </Link>
          <Link href={"#"} className='nav-link'>
          products
          </Link>
          <Link href={"#"} className='nav-link'>
          order
          </Link>
          <Link href={"#"} className='nav-link'>
          contact
          </Link>
        </div>
   </div>
  )
}

export default NavLinks2