"use client"
import { StoreContext } from '@/contexts/StoreContext'
import { Button } from '@nextui-org/react'
import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const AddToCartButton = () => {

    const {cart} = useContext(StoreContext) 

  return (
      <div className='fixed bottom-0 left-0 z-50 w-full'>
        <Button className=' py-2 bg-mainPink text-mainWhite text-xl w-full capitalize transition-all hover:bg-mainPink/90'
                  endContent={<AiOutlineShoppingCart />}
                  size='lg'
                  
                  onClick={cart.addProduct} radius='none'>add to cart</Button>
    </div>
  )
}

export default AddToCartButton