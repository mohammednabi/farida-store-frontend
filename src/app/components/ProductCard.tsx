"use client"
import NextImage from 'next/image'
import React, { useContext, useEffect, useState } from 'react'


import { StoreContext } from '@/contexts/StoreContext';
import { Button, Image } from '@nextui-org/react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";


import Icon from '../../components/Icon';
import Rating from '../../components/Rating';
import Link from 'next/link';

import { observer } from 'mobx-react-lite';
import { strapiProductType } from '@/stores/specificTypes/strapiProductType';


interface productCardProps{
    product:strapiProductType
    isSale?: boolean
    isBestSeller?:boolean
    isTopDeal?:boolean
}


const ProductCard = ({product,isSale,isBestSeller,isTopDeal}:productCardProps) => {
    
    const {products,cart,wishlist} = useContext(StoreContext)
const [foundInWishlist,setFoundInWishlist] = useState(wishlist.isInWishlist(product.id) )
const [foundInCart,setFoundInCart] = useState(cart.isInCart(product.id) )



    const getPriceAfterDiscount = () => {
   return   products.getPriceAfterDiscount(product.attributes.discount.data,product.attributes.price)
        
   }

 


  return (
      <div className='relative flex flex-col w-full '>
          
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
              {!foundInWishlist ? <Icon icon={<FaRegHeart className='text-mainPink ' />} backColor='#ffffff' hasBorder
                //   whenClick={addProducToWishlist}
              />
                  : <Icon icon={<FaHeart className='text-mainPink ' />} backColor='#ffffff' hasBorder
                    //   whenClick={removeProductFromWishlist}
                  />}
          </div>
              <Link href={`/product/${product.id}`} className='transition-all overflow-hidden  w-full  aspect-square flex items-center justify-center  '>
              <Image
                //   as={NextImage}
                 src={`${process.env.NEXT_PUBLIC_HOST}${product.attributes.thumbnail.data.attributes.url}`}
             
                  radius='sm'
                //   quality={100}
                  alt='product image'
                  
                  
                  className='w-full h-full aspect-square object-contain' />
              </Link>

          <div className='p-2 flex flex-col gap-10'>
              
              <div className='flex flex-col gap-3'>
                  
                  <h1 className='text-2xl h-[8rem]  line-clamp-4'>{product.attributes.title} </h1>
                  <div className='flex flex-col gap-1'>
                      
                      
                      <div className='flex items-center gap-2'>
                          

                          <Rating rating={products.getAverageRatings(product.attributes.reviews.data)}/>
                          <h1 className='text-mainBlack/50'>({product.attributes.reviews.data.length})</h1>
                      </div>
                      <div className='flex items-center gap-5'>
                          
                     { getPriceAfterDiscount() &&    <div className='relative '>
                              <div className='absolute top-1/2 -translate-y-1/2 w-full h-[2px] bg-black/50 -rotate-3'/>
                              <h2 className='text-2xl text-mainBlack/30 font-bold  text-center'>{ product.attributes.price.toFixed(2)  }$</h2>
                          </div>}
                          <h2 className='text-2xl text-mainBlack/70 font-bold'>{getPriceAfterDiscount()?getPriceAfterDiscount():product.attributes.price.toFixed(2) }$</h2>
                      </div>
                  </div>
              </div>
              
              <Button className={`h-16 ${foundInCart?`bg-emerald-500`:`bg-mainPink`} text-mainWhite w-full rounded-md transition-all capitalize hover:bg-mainPink/90`}
                  endContent={foundInCart?<FaCheck /> :<AiOutlineShoppingCart />}
                  size='lg'
                  
                //   onClick={addProductToCart}
              >
                  {foundInCart ? "added" : "add"} to cart
              </Button>
          </div>
         
   </div>
  )
}

export default observer(ProductCard)