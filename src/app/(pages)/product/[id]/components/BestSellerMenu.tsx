"use client"
import React from 'react'
import BestProduct from './BestProduct'
import { Divider } from '@nextui-org/react'

const BestSellerMenu = () => {

    const products:number[] =[1,1,1,1,1,1,1,1,1,1,1,1,1]

  return (
      <div className='w-full min-h-screen border-2 border-mainGray border-solid'>
          {products.map((p,i) => (
              
              <div key={i}>
                  
                  <BestProduct id={`${i}`} imageUrl='/fridge2.webp' title='Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops' price={500} prePrice={800} />
                  <Divider />
              </div>
          ))}
    </div>
  )
}

export default BestSellerMenu