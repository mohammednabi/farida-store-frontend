"use client"
import React, { useContext, useEffect } from 'react'
import BestProduct from './BestProduct'
import { Divider } from '@nextui-org/react'
import { StoreContext } from '@/contexts/StoreContext'
import { observer } from 'mobx-react-lite'

const BestSellerMenu = () => {

    // const products: number[] = [1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    
    const {products} = useContext(StoreContext)

    useEffect(()=>{
        products.getBestSellerProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
      <div className='w-full h-auto border-2 border-mainGray border-solid'>
          {products.bestSellerProducts.map((p) => (
              
              <div key={p.id}>
                  
                  <BestProduct
                      id={`${p.id}`}
                      imageUrl={`${process.env.NEXT_PUBLIC_HOST}${p.attributes.thumbnail.data.attributes.url}`}
                      title={p.attributes.title}
                      price={p.attributes.price}
                      prePrice={products.getPriceAfterDiscount(p.attributes.discount.data,p.attributes.price)??0} />
                  <Divider />
              </div>
          ))}
    </div>
  )
}

export default observer(BestSellerMenu)