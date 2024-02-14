"use client"
import React, { useContext, useEffect, useState } from 'react'
import { Pagination } from "@nextui-org/react";
import { observer } from 'mobx-react-lite';
import { StoreContext } from '@/contexts/StoreContext';

const ProductsPagination = () => {

  const { products } = useContext(StoreContext)
  const [currentPage,setCurrentPage] = useState(1)



     useEffect(() => {
       products.setPaginationPage(currentPage)
  products.getAllProducts()
  
},[currentPage])

    return (
      <div className='flex justify-center items-center'>
            
        <Pagination
          showControls
          color='danger'
          size='lg'
          total={products.pagination.pageCount}
          initialPage={1}
          variant={"faded"}
        onChange={(page)=>setCurrentPage(page)}
        />
      </div>
  )
}

export default observer(ProductsPagination)