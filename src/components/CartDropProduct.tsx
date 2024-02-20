"use client"

import { StoreContext } from '@/contexts/StoreContext'
import { cartProductType } from '@/stores/specificTypes/cartProductType'

import { Image } from '@nextui-org/react'
import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { CgClose } from 'react-icons/cg'

interface cartDropProductProps{
    product : cartProductType
}

const CartDropProduct = ({product}:cartDropProductProps) => {

    
    
     const [counter, setCounter] = useState(product.quantity)

   const  {cart} = useContext(StoreContext)
    
    const increase = () => {
        setCounter((c) => c + 1)
        cart.changeQuantity(product.id,counter+1)

    }
    const decrease = () => {
        if (counter > 1) {
            setCounter((c) => c - 1)
            cart.changeQuantity(product.id,counter-1)
    
        } else {
            return
        }

    }
const deleteItem =()=>{

cart.deleteProduct(product.id)
}

  useEffect(() => {
        setCounter(product.quantity)
    },[product.quantity])
    

  return (
      <div className='grid grid-cols-[1fr_2fr_.5fr] w-full items-center gap-3'>
          <div className='w-full aspect-square'>
              
              <Image src={product.imgSrc} alt='' className='w-full h-full object-contain'/>
          </div>
          <div className='flex flex-col gap-1'>
              <h1 className='text-xl capitalize line-clamp-1'>{product.title }</h1>
              <h1 className='text-lg text-mainPink font-bold'>{product.price }$</h1>
              <div className='flex items-center justify-between'>
                  
              <div key={"counter"} className='flex items-center'>
                  <button className='p-1 text-lg border-mainBlack border-1 border-solid ' onClick={increase}>+</button>
                      <h1 className='text-lg p-1 px-2 border-y-1 border-mainBlack border-solid'>{counter}</h1>
                  <button className='p-1 text-lg border-mainBlack border-1 border-solid ' onClick={decrease}>-</button>
                  </div>
                  
                  <h1 className='text-xl font-bold text-emerald-500'> {(product.price * product.quantity).toFixed(2) }$</h1>

              </div>
          </div>
          <div className='flex flex-col items-start cursor-pointer' onClick={deleteItem}>
              <CgClose  className='text-2xl'/>
</div>


    </div>
  )
}

export default observer(CartDropProduct)