"use client"
import React from 'react'
import { Pagination } from "@nextui-org/react";

const ProductsPagination = () => {
    return (
      <div className='flex justify-center items-center'>
            
    <Pagination showControls color='danger' size='lg' loop  total={10} initialPage={1} variant={"faded"} />
      </div>
  )
}

export default ProductsPagination