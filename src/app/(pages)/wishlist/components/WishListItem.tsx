"use client"
import Rating from '@/components/Rating'
import { Button, Image } from '@nextui-org/react'
import React from 'react'
import { MdAddShoppingCart, MdDelete } from "react-icons/md";


interface wishlistItemProps{
    id:string
    imageUrl: string
    title: string
    miniDescription: string
    price: string
    rating: number,
    reviews:number
}

const WishListItem = ({ id, imageUrl, miniDescription, price, rating, title,reviews }: wishlistItemProps) => {
    

    const addToCart = (id:string)=>{alert(`added to cart ${id}`)}
    const removeFromWishlist = (id:string)=>{alert(`removed from wish list ${id}`)}

  return (
    <div className='grid grid-cols-[auto_auto_auto_auto] gap-5'>
          <div className='w-64 h-64 flex items-center justify-center'>
              <Image src={imageUrl} alt='' className='w-full h-auto object-contain'/>
</div>
          <div className='flex flex-col gap-1  justify-center'>
              <h1 className='text-2xl capitalize'>{title}</h1>
              <div className='flex items-center gap-2'>
              <Rating rating={rating} size='2rem'/>
                  <h1>({reviews })</h1>
              </div>
              <h1 className='text-xl capitalize text-mainBlack/50  h-20 overflow-hidden w-full text-ellipsis'>{ miniDescription}</h1>
              
          </div>    
          <div className='grid place-items-center'>
              

              <h1 className='text-4xl font-bold capitalize text-green-500'>{price} $</h1>
          </div>

          <div className='flex flex-col gap-2   justify-center items-center '>
              <Button
                  radius='lg'


                  className='bg-mainBlack text-mainWhite px-10 py-8 capitalize text-2xl'
                  endContent={
                  <MdAddShoppingCart  className='text-mainWhite'/>
              }
              
              onClick={()=>{addToCart(id)}}
              >
                  add to cart
              </Button>
                <Button
                  radius='lg'


                  className='bg-red-500 text-mainWhite px-10 py-8 capitalize text-2xl w-full'
                  endContent={
                  <MdDelete className='text-mainWhite'/>
              }
                onClick={()=>{removeFromWishlist(id)}}
              >
                  delete
              </Button>
          </div>
    </div>
  )
}

export default WishListItem