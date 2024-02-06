"use client"
import Rating from '@/components/Rating'
import { StoreContext } from '@/contexts/StoreContext';
import { product } from '@/stores/productsStore';
import { Button, Image } from '@nextui-org/react'
import { observer } from 'mobx-react-lite';
import Link from 'next/link';
import React, { useContext } from 'react'
import { MdAddShoppingCart, MdDelete } from "react-icons/md";


interface wishlistItemProps{
  
    product:product
}

const WishListItem = ({ product }: wishlistItemProps) => {
    

     const {cart,wishlist} = useContext(StoreContext)

    const addToCart = () => {
        cart.addProduct({...product,quantity:1})
    }
    const removeFromWishlist = () => {
        wishlist.removeFromWishlist(product.id)
    }

  return (
    <div className='grid grid-cols-[auto_auto_auto_auto] gap-5 py-3'>
          <Link href={`/product/${product.id}`} className='w-64 h-64 flex items-center justify-center'>
              <Image src={product.images.thumbnail.url} alt='' className='w-full h-auto aspect-square object-contain'/>
</Link>
          <div className='flex flex-col gap-1  justify-center'>
              <Link href={`/product/${product.id}`}>
                  
              <h1 className='text-2xl capitalize line-clamp-3'>{product.title}</h1>
              </Link>
              <div className='flex items-center gap-2'>
              <Rating rating={product.rating.averageRate} size='2rem'/>
                  <h1>({product.rating.ratings.length })</h1>
              </div>
              <h1 className='text-xl capitalize text-mainBlack/50   w-full line-clamp-2'>{ product.description}</h1>
              
          </div>    
          <div className='grid place-items-center'>
              

              <h1 className='text-4xl font-bold capitalize text-green-500'>{product.price.currentPrice} $</h1>
          </div>

          <div className='flex flex-col gap-2   justify-center items-center '>
              <Button
                  radius='lg'


                  className='bg-mainBlack text-mainWhite px-10 py-8 capitalize text-2xl'
                  endContent={
                  <MdAddShoppingCart  className='text-mainWhite'/>
              }
              
              onClick={addToCart}
              >
                  add to cart
              </Button>
                <Button
                  radius='lg'


                  className='bg-red-500 text-mainWhite px-10 py-8 capitalize text-2xl w-full'
                  endContent={
                  <MdDelete className='text-mainWhite'/>
              }
                onClick={removeFromWishlist}
              >
                  delete
              </Button>
          </div>
    </div>
  )
}

export default observer(WishListItem)