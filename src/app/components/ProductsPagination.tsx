"use client"
import React, { useContext, useEffect, useState } from 'react'
import { Pagination } from "@nextui-org/react";
import { observer } from 'mobx-react-lite';
import { StoreContext } from '@/contexts/StoreContext';
import { useParams, useSearchParams,useRouter, usePathname } from 'next/navigation';


const ProductsPagination = () => {

  const { products,filter } = useContext(StoreContext)
  const [currentPage,setCurrentPage] = useState(1)
  const searchParams = useSearchParams()
  const urlParams = useParams()
  const router = useRouter()
  const pathname = usePathname()
  
  const salesOnly = searchParams.get("salesonly")
  const sorting = searchParams.get("sort")
  const min_price = searchParams.get("min_price")
  const max_price = searchParams.get("max_price")
  const colorName = searchParams.get("color")
  const searchQuery = searchParams.get("q")


     useEffect(() => {
       products.setPaginationPage(currentPage)

       
       console.log("this is the route of this page : ", pathname)
       console.log("is this route search route : ", pathname==="/search")
       console.log("this is search query  : ", searchQuery)

       console.log("this is the search params values : " , searchParams)
       console.log("this is the url params values : " , urlParams)
       console.log("this is the url params values : " , urlParams.name)

       


       if ((searchParams.size>0 && pathname !== "/search") || urlParams.name) {

      
      
        
        products.getProductsByFilters(sorting ?? "", salesOnly ? true : false, colorName ?? "", min_price ?? "", max_price ?? "",urlParams.name  as string,"")
        
        
        filter.hideWholeFilterSidebar()
        
      }
      
      else if (pathname === "/search") {
       
          products.getProductsByFilters(sorting ?? "", salesOnly ? true : false, colorName ?? "", min_price ?? "", max_price ?? "",undefined as unknown as string,searchQuery??"")
         filter.hideWholeFilterSidebar()
        }
        else {
       
          
         products.getAllProducts()

         filter.hideWholeFilterSidebar()
       }

  
      //  console.log("this is the search params from pagination : ", salesOnly)
       
// eslint-disable-next-line react-hooks/exhaustive-deps
},[currentPage,salesOnly,sorting,min_price,max_price,colorName,urlParams.name,searchQuery])

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