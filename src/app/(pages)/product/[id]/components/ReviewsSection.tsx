"use client"
import { Divider } from '@nextui-org/react'
import React from 'react'
import {Tabs, Tab, Chip} from "@nextui-org/react";
import { VscPreview } from "react-icons/vsc";
import { MdOutlineDescription } from "react-icons/md";
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

 const allDetails:string[] = ["Size 1: length 24 cm, width 11 cm, height 7 cm","Size 2: length 27.5 cm, width 13 cm, height 7 cm","Size: 3, length 31 cm, width 14.5 cm, height 8 cm","1 piece","Silver color","The material is pure aluminum","5 year warranty","Made in Egypt"]


    

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
                      value={"reviews"}
          title={
            <div className="flex items-center space-x-2">
            <VscPreview className='text-2xl'/>
              <span className='text-2xl'>Reviews</span>
                  <Chip size="md" variant="shadow" className='bg-mainDarkBlue text-mainWhite'>{reviews.length }</Chip>
            </div>
          }
                       onClick={(e) => {
                          console.log(e.target)
                      }}
                  >
                      <div className='flex flex-col gap-5 pt-5'>
              {reviews.map((r, i) => (
                  <div key={i}>
                      <UserReview userAvatar={r.userAvatar} review={r.reviewDescription} name={r.userName} rating={r.rating} date={r.date} id={r.userId } />
                      <Divider />
                      
                  </div>
              ))}

            
          </div>
                  </Tab>
                  

                 <Tab
                      key="more-info"
                       value={"description"}
          title={
            <div className="flex items-center space-x-2">
            <MdOutlineDescription className='text-2xl'/>
              <span className='text-2xl'>Description</span>
              
            </div>
          }
                      onClick={(e) => {
                          console.log(e.target)
                      }}
                  >
                    <div className='flex flex-col gap-3'>
              
          <h1 className='capitalize text-xl font-semibold'>description :-</h1>
          <ul>
              
          {allDetails.map((d, i) => (
              <li key={i} className='text-xl '>{d}</li>
              ))}
          </ul>
              </div>
        </Tab>
     
       
      </Tabs>
          </div>



         
         
      </div>
  )
}

export default ReviewsSection