"use client"
import { Avatar, User } from '@nextui-org/react'
import React from 'react'
import { RxAvatar } from "react-icons/rx";
import { FaUserLarge } from "react-icons/fa6";
import ReactStars from 'react-rating-star-with-type'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";


interface userProps {
    id?: string
    name:string
    date?:Date
    rating:number
    review: string
    userAvatar?:string
}

const UserReview = ({id,name,date,rating,review,userAvatar}:userProps) => {

    const today =new Date()

  return (
      <div>
          <div className='flex gap-2  items-center'>
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
                  <div className='flex items-center gap-2'>
                      <h1 className='text-xl'>{name }</h1>
                      <h1 className='text-sm text-mainBlack/50'>{date?.toLocaleDateString() }</h1>
                  </div>
                      <ReactStars value={rating} count={5} filledIcon={<FaStar />} halfIcon={<FaStarHalfAlt />} size={"1rem"} emptyIcon={<FaRegStar /> } />
                  <div className='flex items-center gap-2'>
                      <h1 className='text-lg text-mainBlack/50'>{review}</h1>
                  </div>
</div>
              
         </div>
    </div>
  )
}

export default UserReview