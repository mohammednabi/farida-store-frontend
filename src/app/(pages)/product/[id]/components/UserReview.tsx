"use client"
import { Avatar, Skeleton } from '@nextui-org/react'
import React, { useEffect } from 'react'

import { FaUserLarge } from "react-icons/fa6";

import Rating from '@/components/Rating';


interface userProps {
    id?: number
    name:string
    date?:Date
    rating:number
    review: string
    userAvatar?:string
}

const UserReview = ({id,name,date,rating,review,userAvatar}:userProps) => {


    const formattedDate = new Date(date??"").toLocaleDateString()

 
    

  return (
      <div >
          <div className='grid grid-cols-[1fr_10fr] gap-2  items-center'>
              <Avatar
                  icon={<FaUserLarge />}
                  src={userAvatar?userAvatar:""}
                  showFallback
                  name=''
                  size='lg' 
                  classNames={{
                      base: "bg-mainDarkBlue w-16 h-16",
                      icon: "text-6xl text-mainWhite pt-2"
              }}    
              />
              <div className='flex flex-col gap-1'>
                  <Skeleton isLoaded={name.length !==0} className='w-max'>
                      
                  <div className='flex items-center gap-2'>
                          <h1 className='text-xl'>{name}</h1>
                          
                      <h1 className='text-sm text-mainBlack/50'>{formattedDate }</h1>
                  </div>
                  </Skeleton>
                  <Skeleton isLoaded={rating !==0} className='w-max'>
                      
                      <Rating rating={rating}/>
                  </Skeleton>

                  <Skeleton isLoaded={review.length !==0} className='w-full'>
                      
                  
                      <h1 className='text-lg text-mainBlack/50 w-full'>{review}</h1>
                  
                  </Skeleton>
</div>
              
         </div>
    </div>
  )
}

export default UserReview