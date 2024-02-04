"use client"
import NextImage from 'next/image'
import React, { useContext } from 'react'


import { StoreContext } from '@/contexts/StoreContext';
import { Button, Image } from '@nextui-org/react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import Icon from '../../components/Icon';
import Rating from '../../components/Rating';
import Link from 'next/link';
import { product } from '@/stores/productsStore';


interface productCardProps{
    // id:string
    // image: string
    // rating: number
    // title: string
    // prePrice?: number
    // currentPrice: number
    // ratingsNumber: number
    product:product
    isSale?: boolean
    isBestSeller?:boolean
    isTopDeal?:boolean
}


const ProductCard = ({product,isSale,isBestSeller,isTopDeal}:productCardProps) => {

const {cart} = useContext(StoreContext)

    const addProductToCart = ()=>{

        

cart.addProduct(product)
    }

  return (
      <div className='relative flex flex-col w-[18rem] '>
          
         {isSale &&!isBestSeller &&!isTopDeal && <div className='  absolute top-0 left-0 px-5 py-1 capitalize z-20 bg-red-700 text-white flex justify-center items-center '>
              <h1 className='text-center text-lg'>sale</h1>
          </div>}
              {isTopDeal && !isSale && !isBestSeller &&    <div className='  absolute top-0 left-0 px-5 py-1 capitalize z-20 bg-green-700 text-white flex justify-center items-center '>
              <h1 className='text-center text-lg'>top deal</h1>
          </div> }
      {isBestSeller && !isSale && !isTopDeal &&           <div className='  absolute top-0 left-0 px-5 py-1 capitalize z-20 bg-yellow-700 text-white flex justify-center items-center '>
              <h1 className='text-center text-lg'>best seller</h1>
          </div>}
          <div className='  absolute top-0 right-0 z-20 flex justify-center items-center '>
              <Icon icon={<FaRegHeart />} hasBorder />
          </div>
              <Link href={`/product/${product.id}`} className='transition-all  w-full aspect-square flex items-center justify-center  '>
              <Image
                //   as={NextImage}
                  src={product.images.thumbnail.url}
                  width={500}
                  height={500}
                  radius='sm'
                //   quality={100}
                  alt='product image'
                  
                  
                  className='w-full object-cover' />
              </Link>

          <div className='p-2 flex flex-col gap-10'>
              
              <div className='flex flex-col gap-3'>
                  
                  <h1 className='text-2xl h-[8rem] overflow-hidden'>{product.title} </h1>
                  <div className='flex flex-col gap-1'>
                      
                      
                      <div className='flex items-center gap-2'>
                          

                          <Rating rating={product.rating.averageRate}/>
                          <h1 className='text-mainBlack/50'>({product.rating.ratings.length})</h1>
                      </div>
                      <div className='flex items-center gap-5'>
                          
                          <div className='relative '>
                              <div className='absolute top-1/2 -translate-y-1/2 w-full h-[2px] bg-black/50 -rotate-3'/>
                              <h2 className='text-2xl text-mainBlack/30 font-bold  text-center'>{product.price.prePrice }$</h2>
                          </div>
                          <h2 className='text-2xl text-mainBlack/70 font-bold'>{product.price.currentPrice }$</h2>
                      </div>
                  </div>
              </div>
              
              <Button className=' h-16 bg-mainPink text-mainWhite w-full rounded-md transition-all hover:bg-mainPink/90'
                  endContent={<AiOutlineShoppingCart />}
                  size='lg'
                  
                  onClick={addProductToCart}>add to cart</Button>
          </div>
         
   </div>
  )
}

export default ProductCard