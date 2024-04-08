import React from "react";

type size =
  | "text-[1rem]"
  | "text-sm"
  | "text-lg"
  | "text-xl"
  | "text-2xl"
  | "text-3xl"
  | "text-4xl"
  | "text-5xl"
  | "text-6xl"
  | "text-7xl"
  | "text-8xl"
  | "text-9xl";

interface detailsProps {
  title: string;
  price: number;
  titleStyle?: string;
  priceStyle?: string;
  titleSize?: size;
  priceSize?: size;
}

const ShippingRowDetails = ({
  title,
  price,
  titleStyle,
  priceStyle,
  titleSize = "text-[1rem]",
  priceSize = "text-lg",
}: detailsProps) => {
  return (
    <div className="flex  gap-10 items-center justify-between">
      <h1 className={`${titleStyle} text-sm md:text-xl line-clamp-2`}>
        {title}
      </h1>
      <h1 className={`${priceStyle} text-xs  md:text-lg `}>
        {price.toFixed(2)}$
      </h1>
    </div>
  );
};

export default ShippingRowDetails;
