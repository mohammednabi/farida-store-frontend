"use client";
import LoadingOverlay from "@/components/LoadingOverlay";
import { Divider, Image, TableCell, TableRow } from "@nextui-org/react";
import { observer } from "mobx-react-lite";
import NextImage from "next/image";
import { Link } from "@/navigation";
import React from "react";

interface CartProductProps {
  id: number;
  imageUrl?: string;
  title?: string;
  description?: string;
  isLoading?: boolean;
}

const CartProductCard = ({
  id,
  title,
  imageUrl,
  description,
  isLoading,
}: CartProductProps) => {
  return (
    <div className="relative">
      {isLoading && <LoadingOverlay />}
      <div className="grid grid-cols-[1fr_3fr] gap-3  items-center ">
        <Link href={`/product/${id}`} className="w-20 lmob:w-32 h-auto">
          <Image
            src={imageUrl}
            alt=""
            className="w-full h-full aspect-square object-contain"
          />
        </Link>

        <Link href={`/product/${id}`}>
          <h1 className="text-sm md:text-xl font-bold capitalize line-clamp-2 ">
            {title}
          </h1>
          <h1 className="text-xs md:text-lg text-mainBlack/50 line-clamp-2">
            {description}
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default observer(CartProductCard);
