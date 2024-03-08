"use client";
import React, { useContext, useState } from "react";
import CartProductCard from "./CartProductCard";
import { userCartProductType } from "@/stores/specificTypes/userCartProductType";
import QuantityCounter from "./QuantityCounter";
import TotalSingleCartProductPrice from "./TotalSingleCartProductPrice";
import { MdDelete } from "react-icons/md";
import { StoreContext } from "@/contexts/StoreContext";
import { observer } from "mobx-react-lite";
import LoadingOverlay from "@/components/LoadingOverlay";

interface cartTableProductProps {
  product: userCartProductType;
}

const CartTableProduct = ({ product }: cartTableProductProps) => {
  const { user, cart } = useContext(StoreContext);
  const [isLoading, setIsloading] = useState(false);

  return (
    <div className="relative">
      {isLoading && <LoadingOverlay />}
      <div className="grid grid-cols-[5.5fr_1fr_1.5fr_1fr_.5fr] gap-3 items-center">
        <CartProductCard
          id={product.id}
          imageUrl={product.imgSrc}
          description={product.description}
          title={product.title}
        />
        <h1 className="text-center text-xl">{product.price}$</h1>
        <QuantityCounter settingLoading={setIsloading} product={product} />
        <TotalSingleCartProductPrice
          totalPrice={product.price * product.quantity}
        />
        <MdDelete
          className="text-red-500 transition-all hover:text-red-700 text-3xl cursor-pointer"
          onClick={() => {
            setIsloading(true);
            user.removeProductFromUserCart(product.cartItemId).then(() => {
              cart.setProductsCount = cart.productsCount - 1;
              setIsloading(false);
            });
          }}
        />
      </div>
    </div>
  );
};

export default observer(CartTableProduct);
