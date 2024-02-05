import Link from 'next/link'
import React from 'react'

const EmptyCartDrop = () => {
  return (
     <div>
              
         <h2 className='text-mainBlack/50'>your cart is empty </h2>
         <Link href={"/"}>continue → </Link>
          </div>
  )
}

export default EmptyCartDrop