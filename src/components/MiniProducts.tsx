import React from 'react'
import ProductsSlider from './ProductsSlider'

const MiniProducts = () => {
  return (
      <div className='min-h-[50vh] flex flex-col gap-10 w-auto  bg-mainGray p-10'>
          <h1 className='text-center font-bold capitalize text-6xl'>
              products
          </h1> 
          <ProductsSlider />
      </div>
  )
}

export default MiniProducts