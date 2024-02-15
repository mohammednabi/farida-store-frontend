"use client"
import { Image, Skeleton } from '@nextui-org/react'
// import NextImage from 'next/image'
import Link from 'next/link'
import React from 'react'

interface bestProductProps{
    id:string
    imageUrl:string
    title: string
    price: number
    prePrice:number
}

const BestProduct = ({id,title="",imageUrl="",price=0,prePrice=0}:bestProductProps) => {
  return (
      <div className='flex flex-col p-3 '>
          
          <Skeleton isLoaded={imageUrl.length>0} >
              
          <Link href={`/product/${id}`} className='w-full h-auto flex items-center justify-center aspect-square'>
              
          
                  <Image
                      
                       src={imageUrl} alt=''
                      className='w-full h-full'
                      classNames={{
                      img:"w-full  object-contain"
                  }}
                  />
          
            </Link>
          </Skeleton>

          <div className='flex flex-col gap-2 pt-2'>
              <Skeleton isLoaded={title.length>0}>
                  
              <Link href={`/product/${id}`}>
              <h1 className='text-xl transition-all hover:text-mainPink line-clamp-4'>{title}</h1>  
              </Link>
              </Skeleton>
             <div className='flex items-center gap-5'>
                          
                 
                      
                          {prePrice >0 && <div className='relative '>
                              <div className='absolute top-1/2 -translate-y-1/2 w-full h-[2px] bg-black/50 -rotate-3'/>
                              <h2 className='text-2xl text-mainBlack/30 font-bold  text-center'>{prePrice }$</h2>
                          </div>}
                
                  <Skeleton isLoaded={price>0}>
                      
                          <h2 className='text-2xl text-mainBlack/70 font-bold'>{price }$</h2>
                  </Skeleton>
                      </div>
          </div>
   </div>
  )
}

export default BestProduct