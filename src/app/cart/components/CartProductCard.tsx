"use client"
import { Divider, Image, TableCell, TableRow } from '@nextui-org/react'
import NextImage from 'next/image'
import React from 'react'


interface CartProductProps {
    imageUrl?:string
    title?:string
    description?:string

}

const CartProductCard = ({title,imageUrl,description}:CartProductProps) => {
  return (
    
                                <div>
          <div className='flex gap-3 items-center '>
              <div className='w-32 h-auto'>
                  
                                <Image src={imageUrl} alt="" className='w-full h-full' />
              </div>
              <div >
                  
                  <h1 className='text-xl font-bold capitalize'>{ title}</h1>
                                <h1 className='text-lg text-mainBlack/50 '>{description}</h1>
              </div>
                                </div>


                               
                      </div>
        
  )
}

export default CartProductCard