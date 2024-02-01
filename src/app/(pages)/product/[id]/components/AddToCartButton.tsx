"use client"
import { StoreContext } from '@/contexts/StoreContext'
import { Button } from '@nextui-org/react'
import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const AddToCartButton = () => {

    const {cart} = useContext(StoreContext) 

  return (
      <div className='sticky top-[38rem] left-[89%] z-50 w-max'>
        <Button className=' h-16 bg-mainPink text-mainWhite w-max capitalize transition-all hover:bg-mainPink/90'
                  endContent={<AiOutlineShoppingCart />}
                  size='lg'
                  
                  onClick={cart.addProduct} radius='full'>add to cart</Button>
    </div>
  )
}

export default AddToCartButton