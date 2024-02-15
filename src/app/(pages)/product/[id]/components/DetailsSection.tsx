"use client"
import React from 'react'

import ReactStars from 'react-rating-star-with-type'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { Chip, Divider, Skeleton } from '@nextui-org/react';
import Rating from '@/components/Rating';
import { strapiProductType } from '@/stores/specificTypes/strapiProductType';



interface productProps{
   
    


    product ?:strapiProductType
    averageRating?:number
    priceAfterDiscount?:number
}


const DetailsSection = ({product,averageRating,priceAfterDiscount}:productProps) => {

    

  return (
      <div className='flex flex-col gap-5'>
          
          <div className='flex flex-col gap-3'>
              
              <Skeleton isLoaded={product?.attributes.title !==""} >
                  
              <h1 className='text-2xl '>{product?.attributes.title !==""?product?.attributes.title:"kdsjdskjdskjdskd" }</h1>
              </Skeleton>
            
                  
              <Skeleton   isLoaded={(averageRating!==null || averageRating !==undefined )?true:false }  >
           <div className='flex items-center gap-2'>
                          

                         <Rating rating={averageRating} />
              <h1 className='text-mainBlack/50'>({product?.attributes.reviews.data.length})</h1>
          </div>
              </Skeleton>
          </div>

          <div className='flex flex-col gap-3'>
              <Skeleton isLoaded={product?.attributes.description!==""}>
                  
          <h1 className='capitalize text-xl font-semibold'>description :-</h1>
        

              <h1 className='text-xl'>{product?.attributes.description?product?.attributes.description:"ldskdsldslksdk" }</h1>
              </Skeleton>
              
              </div>

          <Skeleton isLoaded={product?.attributes.inventory.data.attributes.available_in_stock !==0 }>
              
          <h1 className='text-xl font-semibold capitalize'>status : <span>{product?.attributes.inventory.data.attributes.available_in_stock} in stock</span></h1>
          </Skeleton>
          
          <div className='flex flex-col gap-2'>
              
            
      {product?.attributes.discount.data &&            
              <div className='bg-green-500 p-2 pr-5 w-max rounded-r-full'>
                  <h1 className='capitalize text-white font-semibold text-2xl '>discount {product?.attributes.discount.data.attributes.discount_percent }%</h1>
</div>
             }

              <Skeleton isLoaded={product?.attributes.price!==0} >
                  
          <div className='flex items-center gap-5'>
                          
                     { product?.attributes.discount.data   && <div className='relative '>
                              <div className='absolute top-1/2 -translate-y-1/2 w-full h-[2px] bg-black/50 -rotate-3'/>
                      <h2 className='text-3xl text-mainBlack/30 font-bold  text-center'>{product?.attributes.price }$</h2>
                          </div>}
                          <h2 className='text-3xl text-mainBlack/70 font-bold'>{product?.attributes.discount.data ? priceAfterDiscount :product?.attributes.price} $</h2>
                      </div>
              </Skeleton>
          </div>

          <div className='flex flex-col gap-2'>
          <Divider />
              <Skeleton isLoaded={product?.attributes.category.data?true:false}>
                  
                  <h1 className='text-xl capitalize font-semibold'>categories:-</h1>
                  <div className='flex items-center gap-5 flex-wrap mt-5'>
                      
                  {product?.attributes.category.data.map((cat) => (
                      
                      
                      
                      <Chip key={cat.id} variant='bordered' classNames={{base:"text-lg capitalize "}}>
                          {cat.attributes.name}
                      </Chip>
))}
</div>

</Skeleton>
          </div>
             
    </div>
  )
}

export default DetailsSection