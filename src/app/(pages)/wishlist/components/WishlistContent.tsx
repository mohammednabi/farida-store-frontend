"use client"
import { Divider } from '@nextui-org/react'
import React from 'react'
import WishListItem from './WishListItem'

const WishlistContent = () => {

  const items = [{
    id: "1",
    title: "Tv",
    miniDescription: "this is a many description loremds;;ldsl;dsds;d",
    price: "500",
    rating: 5,
    imageUrl: "/tv product.webp",
    reviews:10
  },
  {
    id: "2",
    title: "Tv",
    miniDescription: "this is a many description loremds;;ldsl;dsds;d",
    price: "500",
    rating: 3.5,
    imageUrl: "/tv product.webp"
    ,reviews:5
    },
  {
    id: "3",
    title: "Tv",
    miniDescription: "this is a many description loremds;;ldsl;dsds;d",
    price: "500",
    rating: 1.5,
    imageUrl: "/tv product.webp",
    reviews:1
  }
  ]

  return (

    
      <div className='flex flex-col '>
          <div className='w-full bg-mainPink text-white p-5 flex items-center justify-center text-xl font-bold capitalize rounded-xl'>
              <h1>wish list items</h1>

          </div>
      <div className='flex flex-col gap-3'>
        
        {items.map((item) => (
          <div key={item.id}>
            <WishListItem id={item.id} imageUrl={item.imageUrl} title={item.title} price={item.price} rating={item.rating} miniDescription={item.miniDescription } reviews={item.reviews}/>
            <Divider/>

          </div>
        ))}
          
          </div>

    </div>
  )
}

export default WishlistContent