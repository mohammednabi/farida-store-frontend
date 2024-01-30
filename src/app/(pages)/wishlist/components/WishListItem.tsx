"use client"
import Rating from '@/components/Rating'
import { Button, Image } from '@nextui-org/react'
import React from 'react'
import { MdAddShoppingCart, MdDelete } from "react-icons/md";


const WishListItem = () => {
  return (
    <div className='grid grid-cols-[auto_auto_auto_auto] gap-5'>
          <div className='w-64 h-64 flex items-center justify-center'>
              <Image src='/tv product.webp' alt='' className='w-full h-auto object-contain'/>
</div>
          <div className='flex flex-col  justify-center'>
              <h1 className='text-2xl capitalize'>hisense smart tv A4G</h1>
              <Rating rating={4.5} size='2rem'/>
              <h1 className='text-xl capitalize text-mainBlack/50  h-20 overflow-hidden w-full text-ellipsis'>mini description about this product Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem culpa exercitationem ea, incidunt esse tempora velit id placeat harum labore aperiam, molestias odit a. Repellendus odio exercitationem qui magnam laudantium.</h1>
              
          </div>    
          <div className='grid place-items-center'>
              

              <h1 className='text-4xl font-bold capitalize text-green-500'>500 $</h1>
          </div>

          <div className='grid grid-cols-1   justify-center items-center '>
              <Button
                  radius='lg'


                  className='bg-mainBlack text-mainWhite px-10 py-8 capitalize text-2xl'
                  endContent={
                  <MdAddShoppingCart  className='text-mainWhite'/>
              }>
                  add to cart
              </Button>
                <Button
                  radius='lg'


                  className='bg-red-500 text-mainWhite px-10 py-8 capitalize text-2xl'
                  endContent={
                  <MdDelete className='text-mainWhite'/>
              }>
                  delete
              </Button>
          </div>
    </div>
  )
}

export default WishListItem