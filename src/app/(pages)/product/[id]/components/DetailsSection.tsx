"use client"
import React from 'react'

import ReactStars from 'react-rating-star-with-type'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { Divider } from '@nextui-org/react';


interface productProps{
    product?: {
    
    id: string;
    title: string;
    price: number;
    category: string;
    description: string;
    image?: string | undefined;

}
}


const DetailsSection = ({product}:productProps) => {

    const allDetails:string[] = ["Size 1: length 24 cm, width 11 cm, height 7 cm","Size 2: length 27.5 cm, width 13 cm, height 7 cm","Size: 3, length 31 cm, width 14.5 cm, height 8 cm","1 piece","Silver color","The material is pure aluminum","5 year warranty","Made in Egypt"]

  return (
      <div className='flex flex-col gap-5'>
          
          <div className='flex flex-col gap-3'>
              
              <h1 className='text-2xl '>{product?.title }</h1>
           <div className='flex items-center gap-2'>
                          

                          <ReactStars value={4} count={5} filledIcon={<FaStar />} halfIcon={<FaStarHalfAlt />} size={"1.3rem"} emptyIcon={<FaRegStar /> } />
              <h1 className='text-mainBlack/50'>(22)</h1>
          </div>
          </div>

          <div className='flex flex-col gap-3'>
              
          <h1 className='capitalize text-xl font-semibold'>description :-</h1>
          <ul>
              
          {allDetails.map((d, i) => (
              <li key={i} className='text-xl '>{d}</li>
              ))}
          </ul>
              </div>

          <h1 className='text-xl font-semibold'>status : <span>2 in stock</span></h1>
          
          <div className='flex flex-col gap-2'>
              
              <div className='bg-green-500 p-2 pr-5 w-max rounded-r-full'>
                  <h1 className='capitalize text-white font-semibold text-2xl '>discount 50%</h1>
</div>

          <div className='flex items-center gap-5'>
                          
                          <div className='relative '>
                              <div className='absolute top-1/2 -translate-y-1/2 w-full h-[2px] bg-black/50 -rotate-3'/>
                              <h2 className='text-3xl text-mainBlack/30 font-bold  text-center'>1000$</h2>
                          </div>
                          <h2 className='text-3xl text-mainBlack/70 font-bold'>{product?.price} $</h2>
                      </div>
          </div>

          <div className='flex flex-col gap-2'>
          <Divider />

              <h1 className='text-lg capitalize'>category :<span className='text-mainBlack/50'>{product?.category}</span> </h1>
          </div>
             
    </div>
  )
}

export default DetailsSection