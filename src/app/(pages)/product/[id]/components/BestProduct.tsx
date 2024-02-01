"use client"
import { Image, Skeleton } from '@nextui-org/react'
import NextImage from 'next/image'
import Link from 'next/link'
import React from 'react'

interface bestProductProps{
    id:string
    imageUrl:string
    title: string
    price: number
    prePrice:number
}

const BestProduct = ({id,title,imageUrl,price,prePrice}:bestProductProps) => {
  return (
      <div className='flex flex-col p-3 '>
          
          <Skeleton>
              
          <Link href={`/product/${id}`} className='w-full aspect-square'>
              
          
              <Image as={NextImage} isZoomed width={500} height={500}  src={imageUrl} alt='' className='w-full h-full'/>
          
            </Link>
          </Skeleton>

          <div className='flex flex-col gap-2 pt-2'>
              <Skeleton>
                  
              <Link href={`/product/${id}`}>
              <h1 className='text-xl transition-all hover:text-mainPink'>{title}</h1>  
              </Link>
              </Skeleton>
             <div className='flex items-center gap-5'>
                          
                  <Skeleton>
                      
                          <div className='relative '>
                              <div className='absolute top-1/2 -translate-y-1/2 w-full h-[2px] bg-black/50 -rotate-3'/>
                              <h2 className='text-2xl text-mainBlack/30 font-bold  text-center'>{prePrice }$</h2>
                          </div>
                  </Skeleton>
                  <Skeleton>
                      
                          <h2 className='text-2xl text-mainBlack/70 font-bold'>{price }$</h2>
                  </Skeleton>
                      </div>
          </div>
   </div>
  )
}

export default BestProduct