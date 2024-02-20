/* eslint-disable @next/next/no-img-element */

import Image from 'next/image'
import Link from 'next/link';

import React from 'react'
import { Sliderify } from "react-sliderify";


interface sliderProductProps{
  img: string
  title:string
}

const SliderProduct = ({ img, title }: sliderProductProps) => {
  



  
 
  return (
    <Link href={`/categories/${title}`} className='bg-white min-w-[30rem] h-auto flex items-center p-5 gap-10'>
      <div  className='w-24 aspect-square flex items-center justify-center'>

        <img
          src={`${process.env.NEXT_PUBLIC_HOST}${img}`}
          alt='product image'
         
        className='w-full object-cover '
        />
</div>

    
      
      <h1 className='text-3xl capitalize'>{title }</h1>
      

     
    </Link>
  )
}

export default SliderProduct