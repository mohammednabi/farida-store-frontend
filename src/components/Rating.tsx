"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { IoMdStarHalf } from "react-icons/io";
import { FaStarHalf } from "react-icons/fa";

import ReactStars from "react-rating-star-with-type";

interface iprops {
  rating?: number;
  size?: string;
}

const Rating = ({ rating, size = "1.3rem" }: iprops) => {
  return (
    <div className="flex items-center gap-1">
      <ReactStars
        value={Number(rating?.toFixed(1))}
        count={5}
        filledIcon={<FaStar />}
        halfIcon={
          <FaStarHalfAlt className="ltr:rotate-0 rtl:-rotate-180 origin-center " />
          // <FaStarHalf className="ltr:rotate-0 rtl:rotate-180 origin-center"/>
        }
        size={size}
        emptyIcon={<FaRegStar />}
      />
      <h1 className={`text-[${size}]`}>{rating?.toFixed(1)}</h1>
    </div>
  );
};

export default Rating;
