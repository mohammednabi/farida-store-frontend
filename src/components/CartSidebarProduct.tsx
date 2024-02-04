"use client"
import { product } from '@/stores/productsStore';
import { Image } from '@nextui-org/react'
import Link from 'next/link';
import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";

interface CartSidebarProductProps{
   
    product:product
}


const CartSidebarProduct = ({product}:CartSidebarProductProps) => {

    const [counter, setCounter] = useState(1)
    
    const increase = ()=>{ setCounter((c)=>c+1)}
    const decrease = ()=>{counter>1 && setCounter((c)=>c-1)}
const deleteItem =(id:string)=>{alert(`item : ${id}`)}


  return (
      <div className='grid grid-cols-[2fr_3fr_1fr] gap-5'>
          <div className='w-full h-auto grid place-items-center'>
              
              <Link href={`/product/${product.id}`}>
<Image src={product.images.thumbnail.url} alt='' className='w-full h-full' />
              </Link>
          </div>
          <div className='flex flex-col justify-between gap-2 w-full overflow-hidden '>
              <Link href={`/product/${product.id}`}>
                  
              <h1 className='text-lg w-full max-h-20  text-ellipsis  line-clamp-2'>{ product.title}</h1>
              </Link>
              <div className='flex items-center'>
                  <button className='p-1 px-2 border-solid border-1 border-mainBlack/50 rounded-l-full' onClick={increase}>+</button>
                  <h1 className='p-1 px-2 border-solid border-1 border-mainBlack/50 border-x-0'>{counter }</h1>
                  <button className='p-1 px-2 border-solid border-1 border-mainBlack/50 rounded-r-full' onClick={decrease}>-</button>
              </div>
          </div>
          <div className='flex flex-col justify-between items-center'>
              <MdDelete className='text-2xl transition-all text-red-500 hover:text-red-700 cursor-pointer'
              onClick={()=>{deleteItem(product.id)}}
              />
              <h1 className='text-green-500 font-bold text-lg'>{ product.price.currentPrice}$</h1>
          </div>
          
    </div>
  )
}

export default CartSidebarProduct