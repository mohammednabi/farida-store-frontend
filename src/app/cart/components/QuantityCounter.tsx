"use client"
import { StoreContext } from '@/contexts/StoreContext'
import { cartProduct } from '@/stores/generalTypes'
import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'

interface quantityCounterProps{
    product:cartProduct
}

const QuantityCounter = ({ product }: quantityCounterProps) => {
    
const {cart} = useContext(StoreContext)

    const [counter, setCounter] = useState(product.quantity)
    

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

    useEffect(() => {
        setCounter(product.quantity)
    },[product.quantity])

  return (
      <div className='flex items-center justify-center'>
          <button
              className='border-mainBlack/10 border-1 border-solid text-lg px-3 py-2 rounded-l-full transition-all hover:bg-mainBlack/5'
          onClick={increase}
          >
              +
          </button>
          <h1 className='border-mainBlack/10 border-1 border-solid text-xl px-5 py-2'>{counter}</h1>
          <button
              className='border-mainBlack/10 border-1 border-solid text-lg px-3 py-2 rounded-r-full transition-all hover:bg-mainBlack/5'
          onClick={decrease}
          >
              -
          </button>
    </div>
  )
}

export default observer( QuantityCounter)