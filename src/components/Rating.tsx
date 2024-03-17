"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
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
        halfIcon={<FaStarHalfAlt />}
        size={size}
        emptyIcon={<FaRegStar />}
      />
      <h1 className={`text-[${size}]`}>{rating?.toFixed(1)}</h1>
    </div>
  );
};

export default Rating;
