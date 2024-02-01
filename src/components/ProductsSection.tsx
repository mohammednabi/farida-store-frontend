"use client"
import React, { useContext, useEffect } from 'react'
import ProductCard from './ProductCard'
import ProductsPagination from './ProductsPagination'
import { StoreContext } from '@/contexts/StoreContext'
import { observer } from 'mobx-react-lite'
import { CircularProgress, Spinner } from '@nextui-org/react'

const ProductsSection = () => {

const {products} = useContext(StoreContext)

  useEffect(() => {
  products.getAllProducts()

  
},[products])
  
  return (
    <div className='flex flex-col gap-5'>

     {products.products ? <div className='w-full min-h-screen grid grid-cols-4 gap-10 px-28 py-0'>

   
        { products.products?.map((product) => (
  
          <ProductCard
            isSale
            id={product.id}
            key={product.id}
            title={product.title}
            image={product.images.thumbnail.url}
            rating={product.rating.averageRate}
            ratingsNumber={product.rating.ratings.length}
            prePrice={product.price.prePrice}
            currentPrice={product.price.currentPrice}
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
      <ProductsPagination />
    </div>
  )
}

export default observer( ProductsSection)