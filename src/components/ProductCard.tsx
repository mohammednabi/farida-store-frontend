"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import ReactStars from 'react-rating-star-with-type'
import { RiStarSmileFill } from "react-icons/ri";
import { SiStarship } from "react-icons/si";
import { LiaStarSolid } from "react-icons/lia";
import { StoreContext } from '@/contexts/StoreContext';

const ProductCard = () => {

const {cart} = useContext(StoreContext)

    const addProductToCart = ()=>{
cart.addProduct()
    }

  return (
      <div className='flex flex-col w-[18rem] '>
          
              <div className='transition-all cursor-pointer w-full aspect-square bg-mainWhite hover:bg-mainBlack/10 '>
                  <Image src={"/fridge2.webp"} width={500} height={500} quality={100} alt='' className='w-full object-cover'/>
              </div>

          <div className='p-2 flex flex-col gap-10'>
              
              <div className='flex flex-col gap-3'>
                  
                  <h1 className='text-2xl '>Samsung 470l French Door Fridge/Freezer | Bargains </h1>
                  <div className='flex flex-col gap-1'>
                      
                      
                      <div className='flex items-center gap-2'>
                          

                          <ReactStars value={4.5} count={5} filledIcon={<LiaStarSolid />} halfIcon={<LiaStarSolid />} size={"1.3rem"} />
                          <h1 className='text-mainBlack/50'>(22)</h1>
                      </div>
                      <div className='flex items-center gap-5'>
                          
                          <div className='relative '>
                              <div className='absolute top-1/2 -translate-y-1/2 w-full h-[2px] bg-black/50 -rotate-3'/>
          <h2 className='text-2xl text-mainBlack/30 font-bold  text-center'>600$</h2>
                          </div>
          <h2 className='text-2xl text-mainBlack/70 font-bold'>500$</h2>
                      </div>
                  </div>
              </div>
              <button className='p-5 bg-mainPink text-mainWhite w-full rounded-md transition-all hover:bg-mainPink/90'
              
              onClick={addProductToCart}
              >add to cart</button>
          </div>
         
   </div>
  )
}

export default ProductCard