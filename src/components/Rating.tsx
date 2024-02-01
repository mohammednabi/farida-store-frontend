"use client"
import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import ReactStars from 'react-rating-star-with-type'

interface iprops {
    rating?: number
    size?:string
}

const Rating = ({rating,size="1.3rem"}:iprops) => {
  return (
   <ReactStars value={rating} count={5} filledIcon={<FaStar />} halfIcon={<FaStarHalfAlt />} size={size} emptyIcon={<FaRegStar /> } />
  )
}

export default Rating