"use client"
import { Divider } from '@nextui-org/react'
import React from 'react'
import {Tabs, Tab, Chip} from "@nextui-org/react";
import { VscPreview } from "react-icons/vsc";
import UserReview from './UserReview';

type review = {
       userId?: string
    userName:string
    date?:Date
    rating:number
    reviewDescription: string
    userAvatar?:string
}

const ReviewsSection = () => {

    const reviews: review[] = [
        { userName: "mohammed nabil", rating: 3, reviewDescription: "not good enough" }
        , { userName: "master card", rating: 5, reviewDescription: "amazing work was made on this product", userAvatar: "/MasterCard_Logo.svg.webp" },
        { userName: "mohammed nabil", rating: 4, reviewDescription: "not good enough" },
        { userName: "mohammed nabil", rating: 1, reviewDescription: "not good enough" },
        { userName: "mohammed nabil", rating: 2, reviewDescription: "not good enough" },
        { userName: "mohammed nabil", rating:0, reviewDescription: "very very bad" }
    ]

  return (
      <div className='flex flex-col'>
          
         
          <div className='flex w-full flex-col '>
              <Tabs 
        aria-label="Options" 
        color="primary" 
        variant="underlined"
        size='lg'
        classNames={{
          tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
          cursor: "w-full bg-mainPink",
          tab: "max-w-fit px-0 h-12",
          tabContent: "group-data-[selected=true]:text-mainPink"
        }}
      >
        <Tab
          key="reviews"
          title={
            <div className="flex items-center space-x-2">
            <VscPreview className='text-2xl'/>
              <span className='text-2xl'>Reviews</span>
                  <Chip size="md" variant="shadow" className='bg-mainDarkBlue text-mainWhite'>{reviews.length }</Chip>
            </div>
          }
        />

                 <Tab
          key="more-info"
          title={
            <div className="flex items-center space-x-2">
            <VscPreview className='text-2xl'/>
              <span className='text-2xl'>More Information</span>
              
            </div>
          }
        />
     
       
      </Tabs>
          </div>



          <div className='flex flex-col gap-5 pt-5'>
              {reviews.map((r, i) => (
                  <div key={i}>
                      <UserReview userAvatar={r.userAvatar} review={r.reviewDescription} name={r.userName} rating={r.rating} date={r.date} id={r.userId } />
                      <Divider />
                      
                  </div>
              ))}

            
          </div>
      </div>
  )
}

export default ReviewsSection