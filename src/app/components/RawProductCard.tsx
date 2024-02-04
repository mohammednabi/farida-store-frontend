"use client"
import Icon from '@/components/Icon'
import Rating from '@/components/Rating'
import { StoreContext } from '@/contexts/StoreContext'
import { Button, Image } from '@nextui-org/react'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaRegHeart } from 'react-icons/fa'

interface rawProductProps{
  id:string
    image: string
    rating: number
    title: string
    prePrice?: number
    currentPrice: number
    ratingsNumber: number
    isSale?: boolean
    isBestSeller?:boolean
    isTopDeal?:boolean
}

const RawProductCard = ({id,isSale,isBestSeller,isTopDeal,image,title,rating,currentPrice,ratingsNumber,prePrice}:rawProductProps) => {

const {cart} = useContext(StoreContext)

const [counter,setCounter] = useState(1)

  const increase = ()=>{setCounter((c)=>c+1)}
  const decrease = ()=>{counter>1 && setCounter((c)=>c-1)}

    const addProductToCart = ()=>{
cart.addProduct()
    }

  return (
    <div className='grid items-center grid-cols-2 grid-rows-[auto] gap-5 border-2 border-mainGray shadow-md border-solid h-max p-3'>

      <div className='relative w-full h-auto'>

  {isSale &&!isBestSeller &&!isTopDeal && <div className='  absolute top-0 left-0 px-5 py-1 capitalize z-20 bg-red-700 text-white flex justify-center items-center '>
              <h1 className='text-center text-lg'>sale</h1>
          </div>}
              {isTopDeal && !isSale && !isBestSeller &&    <div className='  absolute top-0 left-0 px-5 py-1 capitalize z-20 bg-green-700 text-white flex justify-center items-center '>
              <h1 className='text-center text-lg'>top deal</h1>
          </div> }
      {isBestSeller && !isSale && !isTopDeal &&           <div className='  absolute top-0 left-0 px-5 py-1 capitalize z-20 bg-yellow-700 text-white flex justify-center items-center '>
              <h1 className='text-center text-lg'>best seller</h1>
          </div>}
        
              <Link href={`/product/${id}`} className='transition-all  w-full aspect-square flex items-center justify-center  '>
              <Image
                //   as={NextImage}
                  src={image}
                  width={500}
                  height={500}
                //   quality={100}
                  alt='product image'
                  radius='sm'
                  
                  className='w-full object-cover' />
              </Link>
      </div>


      <div className='flex flex-col gap-3 py-5'>
        <h1 className='text-2xl max-h-[4rem] w-full overflow-hidden text-ellipsis'>{title }</h1>
        <div className='flex items-center gap-2'>

          <Rating rating={rating} />
          <h1>({ratingsNumber})</h1>
        </div>

        <div className='flex items-center justify-between'>

        <div className='flex items-center'>
          <button className='p-3 border-mainBlack border-1 border-solid text-xl' onClick={increase}>+</button>
          <h1 className='text-xl border-y-1 border-mainBlack border-solid p-3 px-5'>{counter }</h1>
          <button className='p-3 border-mainBlack border-1 border-solid text-xl' onClick={decrease} >-</button>
        </div>
  <div className='  flex justify-center items-center '>
              <Icon size='3xl' icon={<FaRegHeart />} hasBorder />
          </div>
        </div>

         <div className='flex items-center gap-5'>
                          
                          <div className='relative '>
                              <div className='absolute top-1/2 -translate-y-1/2 w-full h-[2px] bg-black/50 -rotate-3'/>
            <h2 className='text-2xl text-mainBlack/30 font-bold  text-center'>{ prePrice}$</h2>
                          </div>
          <h2 className='text-2xl text-mainBlack/70 font-bold'>{currentPrice }$</h2>
                      </div>
        
 <Button className=' h-16 bg-mainPink text-mainWhite w-full rounded-md transition-all hover:bg-mainPink/90'
                  endContent={<AiOutlineShoppingCart />}
                  size='lg'
                  
          onClick={addProductToCart}
        
        >add to cart</Button>

      </div>
          
    </div>
  )
}

export default RawProductCard