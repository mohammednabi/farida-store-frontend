"use client"
import React, { useContext, useEffect } from 'react'
import ProductCard from './ProductCard'
import ProductsPagination from './ProductsPagination'
import { StoreContext } from '@/contexts/StoreContext'
import { observer } from 'mobx-react-lite'

const ProductsSection = () => {

const {products} = useContext(StoreContext)

  useEffect(() => {
  products.getAllProducts()

  
},[products])
  
  return (
    <div className='flex flex-col gap-5'>

      <div className='w-full min-h-screen grid grid-cols-4 gap-10 px-28 py-0'>

   
        {products.products && products.products.map((product) => (
  
          <ProductCard key={product.id} title={product.title} image='/tv product.webp' rating={product.rating.averageRate} ratingsNumber={product.rating.ratings.length} prePrice={2000} currentPrice={product.price.currentPrice}/>

          
))}
        
       
      </div>
      <ProductsPagination />
    </div>
  )
}

export default observer( ProductsSection)