"use client"
import React, { useContext, useEffect, useState } from 'react'
import { Pagination } from "@nextui-org/react";
import { observer } from 'mobx-react-lite';
import { StoreContext } from '@/contexts/StoreContext';
import { useSearchParams } from 'next/navigation';

const ProductsPagination = () => {

  const { products } = useContext(StoreContext)
  const [currentPage,setCurrentPage] = useState(1)
  const searchParams = useSearchParams()
  
  const salesOnly = searchParams.get("salesonly")
  const sorting = searchParams.get("sort")
  const min_price = searchParams.get("min_price")
  const max_price = searchParams.get("max_price")
  const colorName = searchParams.get("color")


     useEffect(() => {
       products.setPaginationPage(currentPage)


       console.log("this is the search params values : " , searchParams)

       if (searchParams.size>0) {
        products.getProductsByFilters(sorting??"",salesOnly?true:false,colorName??"",min_price??"",max_price??"")
      }
       else {
         
         products.getAllProducts()

         
       }

  
      //  console.log("this is the search params from pagination : ", salesOnly)
       
// eslint-disable-next-line react-hooks/exhaustive-deps
},[currentPage,salesOnly,sorting,min_price,max_price,colorName])

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