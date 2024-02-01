"use client"
import React from 'react'

import ReactStars from 'react-rating-star-with-type'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { Divider, Skeleton } from '@nextui-org/react';
import Rating from '@/components/Rating';
import { product } from '@/stores/productsStore';


interface productProps{
   
    
    // id: string;
    // title: string;
    // price: number;
    // category: string;
    // description: string;
    // image?: string | undefined;

    product ?:product

}


const DetailsSection = ({product}:productProps) => {

    // const allDetails:string[] = ["Size 1: length 24 cm, width 11 cm, height 7 cm","Size 2: length 27.5 cm, width 13 cm, height 7 cm","Size: 3, length 31 cm, width 14.5 cm, height 8 cm","1 piece","Silver color","The material is pure aluminum","5 year warranty","Made in Egypt"]

  return (
      <div className='flex flex-col gap-5'>
          
          <div className='flex flex-col gap-3'>
              
              <Skeleton isLoaded={product?.title !==""} >
                  
              <h1 className='text-2xl '>{product?.title !==""?product?.title:"kdsjdskjdskjdskd" }</h1>
              </Skeleton>
              {/* {product?.title !=="" &&  <h1 className='text-2xl '>{product?.title }</h1>} */}
                  
              <Skeleton   isLoaded={product?.rating.ratings.length !==0 }  >
           <div className='flex items-center gap-2'>
                          

                         <Rating rating={product?.rating.averageRate} />
              <h1 className='text-mainBlack/50'>({product?.rating.ratings.length})</h1>
          </div>
              </Skeleton>
          </div>

          <div className='flex flex-col gap-3'>
              <Skeleton isLoaded={product?.description!==""}>
                  
          <h1 className='capitalize text-xl font-semibold'>description :-</h1>
        

              <h1 className='text-xl'>{product?.description?product?.description:"ldskdsldslksdk" }</h1>
              </Skeleton>
              
              </div>

          <Skeleton isLoaded={product?.availabelInstock !==0 }>
              
          <h1 className='text-xl font-semibold'>status : <span>{product?.availabelInstock} in stock</span></h1>
          </Skeleton>
          
          <div className='flex flex-col gap-2'>
              
              <Skeleton isLoaded={product?.price.discount?.length!==0} className='w-max'>
                  
              <div className='bg-green-500 p-2 pr-5 w-max rounded-r-full'>
                  <h1 className='capitalize text-white font-semibold text-2xl '>discount {product?.price.discount }%</h1>
</div>
              </Skeleton>

              <Skeleton isLoaded={product?.price.currentPrice!==0} >
                  
          <div className='flex items-center gap-5'>
                          
                          <div className='relative '>
                              <div className='absolute top-1/2 -translate-y-1/2 w-full h-[2px] bg-black/50 -rotate-3'/>
                      <h2 className='text-3xl text-mainBlack/30 font-bold  text-center'>{product?.price.prePrice }$</h2>
                          </div>
                          <h2 className='text-3xl text-mainBlack/70 font-bold'>{product?.price.currentPrice} $</h2>
                      </div>
              </Skeleton>
          </div>

          <div className='flex flex-col gap-2'>
          <Divider />
              <Skeleton isLoaded={product?.category.name.length !==0}>
                  
              <h1 className='text-lg capitalize'>category :<span className='text-mainBlack/50'>{product?.category.name}</span> </h1>
</Skeleton>
          </div>
             
    </div>
  )
}

export default DetailsSection