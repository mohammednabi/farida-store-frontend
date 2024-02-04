"use client"
import { StoreContext } from '@/contexts/StoreContext'
import React, { useContext, useEffect } from 'react'
import ProductCard from './ProductCard'
import { Spinner } from '@nextui-org/react'
import { observer } from 'mobx-react-lite'

const GridStyleView = () => {

    const { products } = useContext(StoreContext)
    
      useEffect(() => {
  products.getAllProducts()

  
},[products])

    return (
  <>
      {products.products ? <div className='w-full min-h-[200vh] grid grid-cols-4 gap-10 px-28 py-0'>

   
        { products.products?.map((product) => (
  
          <ProductCard
            isSale
            product={product}
           
            key={product.id}
          
          />

          
        ))}
        
       
      </div> : <div className='w-full min-h-[50vh] grid place-items-center   px-28 py-0'>
          <Spinner
            label='loading...'
            size='lg'
          className=''
            classNames={{
            circle1:"border-l-mainPink border-b-mainPink",
              circle2: "border-mainPink",
            wrapper:"w-40 h-40"
          }} />
       
            </div>}
            </>
  )
}

export default observer(GridStyleView)