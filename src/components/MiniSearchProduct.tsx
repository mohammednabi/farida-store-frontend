"use client";
import { StoreContext } from "@/contexts/StoreContext";
import { strapiProductType } from "@/stores/specificTypes/strapiProductType";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

interface miniSearchProductProps {
  product: strapiProductType;
}

const MiniSearchProduct = ({ product }: miniSearchProductProps) => {
  const { searchBox, products } = useContext(StoreContext);

  const router = useRouter();

  const handleAllSearchingBoxProcesses = () => {
    router.push(`/product/${product.id}`);
    searchBox.hideWholeSearchBox();
    searchBox.setSearchInputValue("");
  };

  const getPriceAfterDiscount = () => {
    return products.getPriceAfterDiscount(
      product.attributes.discount.data,
      product.attributes.price
    );
  };

  return (
    <div
      className="grid grid-cols-[1fr_3fr] gap-5 items-center"
      onClick={handleAllSearchingBoxProcesses}
    >
      <div className="w-full h-auto aspect-square cursor-pointer">
        <Image
          src={`${process.env.NEXT_PUBLIC_HOST}${product.attributes.thumbnail.data.attributes.url}`}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="grid grid-rows-2">
        <div
          className="cursor-pointer"
          onClick={handleAllSearchingBoxProcesses}
        >
          <h1 className="text-xs md:text-xl font-semibold line-clamp-1">
            {product.attributes.title}
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          {getPriceAfterDiscount() && (
            <div className="relative ">
              <div className="absolute top-1/2 -translate-y-1/2 w-full h-[2px] bg-black/50 -rotate-3" />
              <h2 className="text-sm md:text-2xl text-mainBlack/30 font-bold  text-center">
                {product.attributes.price.toFixed(2)}$
              </h2>
            </div>
          )}
          <h2 className="text-sm md:text-2xl text-mainBlack/70 font-bold">
            {getPriceAfterDiscount()
              ? getPriceAfterDiscount()
              : product.attributes.price.toFixed(2)}
            $
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MiniSearchProduct;
