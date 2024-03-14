"use client";
import { StoreContext } from "@/contexts/StoreContext";
import React, { useContext, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Spinner } from "@nextui-org/react";
import { observer } from "mobx-react-lite";
import { useSearchParams } from "next/navigation";
import EmptyProducts from "./EmptyProducts";

const GridStyleView = () => {
  const { products } = useContext(StoreContext);
  const searchParams = useSearchParams();

  return (
    <>
      {!products.productsLoading ? (
        <div>
          {products.products?.length > 0 ? (
            <div className="w-full min-h-[200vh] grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-10 px-28 py-0">
              {products.products?.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          ) : (
            <EmptyProducts />
          )}
        </div>
      ) : (
        <div className="w-full min-h-[50vh] grid place-items-center   px-28 py-0">
          <Spinner
            label="loading..."
            size="lg"
            className=""
            classNames={{
              circle1: "border-l-mainPink border-b-mainPink",
              circle2: "border-mainPink",
              wrapper: "w-40 h-40",
            }}
          />
        </div>
      )}
    </>
  );
};

export default observer(GridStyleView);
