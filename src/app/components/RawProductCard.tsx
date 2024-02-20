"use client"
import Icon from '@/components/Icon'
import Rating from '@/components/Rating'
import { StoreContext } from '@/contexts/StoreContext'
import { cartProductType } from '@/stores/specificTypes/cartProductType'

import { strapiProductType } from '@/stores/specificTypes/strapiProductType'
import { Button, Image } from '@nextui-org/react'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaRegHeart } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { FaCheck } from "react-icons/fa";


interface rawProductProps{
 
    product:strapiProductType
   
}

const RawProductCard = ({product}:rawProductProps) => {

  const { products,cart, wishlist } = useContext(StoreContext)

  const [foundInWishlist, setFoundInWishlist] = useState(wishlist.isInWishlist(product.id))
  const [foundInCart,setFoundInCart] = useState(cart.isInCart(product.id) )


const [counter,setCounter] = useState(1)

  const increase = ()=>{setCounter((c)=>c+1)}
  const decrease = ()=>{counter>1 && setCounter((c)=>c-1)}

  const addProductToCart = () => {

        const parsedProductToCartProduct:cartProductType = {
            id: product.id,
            imgSrc: `${process.env.NEXT_PUBLIC_HOST}${product.attributes.thumbnail.data.attributes.url}`,
            title: product.attributes.title,
          slug: product.attributes.slug,
             description: product.attributes.description,
            prePrice:getPriceAfterDiscount()?Number(product.attributes.price.toFixed(2)):0,
            price: getPriceAfterDiscount()??Number(product.attributes.price.toFixed(2)),
            quantity: counter
        }

        cart.addProduct(parsedProductToCartProduct)
    }
  
  //   const addProducToWishlist=()=>{
  //   wishlist.addToWishlist(product)
  // }
  
  //  const removeProductFromWishlist=()=>{
  //       wishlist.removeFromWishlist(product.id)
  //   }
    
    
  //  useEffect(() => {
  //    setFoundInWishlist(wishlist.isInWishlist(product.id))

  //    // eslint-disable-next-line react-hooks/exhaustive-deps
  //  }, [wishlist.items])
  
   useEffect(() => {
     setFoundInCart(cart.isInCart(product.id))
     
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[cart.cartProducts])
    

   const getPriceAfterDiscount = () => {
   return   products.getPriceAfterDiscount(product.attributes.discount.data,product.attributes.price)
        
   }


  return (
    <div className='grid items-center grid-cols-2 grid-rows-[auto] gap-5 border-2 border-mainGray shadow-md border-solid h-full p-3'>

      <div className='relative w-full h-auto'>

  {product.attributes.type === "sale" && <div className='  absolute top-0 left-0 px-5 py-1 capitalize z-20 bg-red-700 text-white flex justify-center items-center '>
              <h1 className='text-center text-lg'>sale</h1>
          </div>}
              {product.attributes.type === "deal" &&    <div className='  absolute top-0 left-0 px-5 py-1 capitalize z-20 bg-green-700 text-white flex justify-center items-center '>
              <h1 className='text-center text-lg'>top deal</h1>
          </div> }
      {product.attributes.type === "best_seller" &&           <div className='  absolute top-0 left-0 px-5 py-1 capitalize z-20 bg-yellow-700 text-white flex justify-center items-center '>
              <h1 className='text-center text-lg'>best seller</h1>
          </div>}
        
              <Link href={`/product/${product.id}`} className='transition-all  w-full aspect-square flex items-center justify-center  '>
              <Image
                //   as={NextImage}
                 src={`${process.env.NEXT_PUBLIC_HOST}${product.attributes.thumbnail.data.attributes.url}`}
                  width={500}
                  height={500}
                //   quality={100}
                  alt='product image'
                  radius='sm'
                  
                  className='w-full h-full aspect-square object-contain' />
              </Link>
      </div>


      <div className='flex flex-col gap-3 py-5'>
        <h1 className='text-2xl h-[8rem]  w-full line-clamp-4'>{product.attributes.title }</h1>
        <div className='flex items-center gap-2'>

          <Rating rating={products.getAverageRatings(product.attributes.reviews.data)} />
          <h1>({product.attributes.reviews.data.length})</h1>
        </div>

        <div className='flex items-center justify-between'>

        <div className='flex items-center'>
          <button disabled={foundInCart?true:false} className={`p-3 ${foundInCart?`border-mainBlack/20 text-mainBlack/20 `:`border-mainBlack`} border-1 border-solid text-xl`} onClick={increase}>+</button>
          <h1 className={`text-xl border-y-1 ${foundInCart?`border-mainBlack/20 text-mainBlack/20 `:`border-mainBlack`} border-solid p-3 px-5`}>{foundInCart ?foundInCart.quantity:counter }</h1>
          <button disabled={foundInCart?true:false} className={`p-3 ${foundInCart?`border-mainBlack/20 text-mainBlack/20 `:`border-mainBlack`} border-1 border-solid text-xl`} onClick={decrease} >-</button>
        </div>
  <div className='  flex justify-center items-center '>
            {!foundInWishlist ? <Icon size='3xl' icon={<FaRegHeart />}
              // whenClick={addProducToWishlist}
            />
              : <Icon size='3xl' icon={<FaHeart className='text-mainPink' />}
                // whenClick={removeProductFromWishlist}
              />}
          </div>
        </div>

         <div className='flex items-center gap-5'>
                          
                       { getPriceAfterDiscount() &&    <div className='relative '>
                              <div className='absolute top-1/2 -translate-y-1/2 w-full h-[2px] bg-black/50 -rotate-3'/>
            <h2 className='text-2xl text-mainBlack/30 font-bold  text-center'>{ product.attributes.price.toFixed(2)  }$</h2>
                          </div>}
          <h2 className='text-2xl text-mainBlack/70 font-bold'>{getPriceAfterDiscount()?getPriceAfterDiscount():product.attributes.price.toFixed(2) }$</h2>
                      </div>
        
 <Button className={`h-16 ${foundInCart?`bg-emerald-500`:`bg-mainPink`} text-mainWhite w-full rounded-md transition-all capitalize hover:bg-mainPink/90`}
                    endContent={foundInCart?<FaCheck /> :<AiOutlineShoppingCart />}
                  size='lg'
                  
          onClick={addProductToCart}
        
        >{foundInCart?"added":"add"} to cart</Button>

      </div>
          
    </div>
  )
}

export default observer(RawProductCard)