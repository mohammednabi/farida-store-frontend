/* eslint-disable @next/next/no-img-element */
"use client";

import { StoreContext } from "@/contexts/StoreContext";
import { cartProductType } from "@/stores/specificTypes/cartProductType";

import { Image } from "@nextui-org/react";
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import LoadingOverlay from "./LoadingOverlay";
import { isUserLoggedIn } from "@/functions/credentials";
import { userCartProductType } from "@/stores/specificTypes/userCartProductType";

interface cartDropProductProps {
  product: userCartProductType;
}

const CartDropProduct = ({ product }: cartDropProductProps) => {
  const [counter, setCounter] = useState(product.quantity);
  const [isLoading, setIsLoading] = useState(false);

  const { cart, user } = useContext(StoreContext);

  const increase = () => {
    setCounter((c) => c + 1);

    if (isUserLoggedIn()) {
      setIsLoading(true);
      user
        .updateUserCartProductQuantity(product.cartItemId, counter + 1)
        .then(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(true);
      cart.changeQuantity(product.id, counter + 1);
      setIsLoading(false);
    }

    cart.setProductsCount = cart.productsCount + 1;
  };

  const decrease = () => {
    if (counter > 1) {
      setCounter((c) => c - 1);
      if (isUserLoggedIn()) {
        setIsLoading(true);
        user
          .updateUserCartProductQuantity(product.cartItemId, counter - 1)
          .then(() => {
            setIsLoading(false);
          });
      } else {
        setIsLoading(true);
        cart.changeQuantity(product.id, counter - 1);
        setIsLoading(false);
      }
    } else {
      return;
    }

    cart.setProductsCount = cart.productsCount + 1;
  };

  const deleteItem = () => {
    if (isUserLoggedIn()) {
      setIsLoading(true);
      user.removeProductFromUserCart(product.cartItemId).then(() => {
        setIsLoading(false);
        cart.setProductsCount = cart.productsCount - 1;
      });
    } else {
      setIsLoading(true);
      cart.deleteProduct(product.id);
      setIsLoading(false);
      cart.setProductsCount = cart.productsCount - 1;
    }
  };

  useEffect(() => {
    setCounter(product.quantity);
  }, [product.quantity]);

  return (
    <div className="relative ">
      {isLoading && <LoadingOverlay />}
      <div className="grid grid-cols-[1fr_2fr_.5fr]  gap-3  px-3">
        <div className="w-full aspect-square">
          <img
            src={product.imgSrc}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-1  overflow-hidden">
          <h1 className="text-xl capitalize  line-clamp-1 ">{product.title}</h1>
          <h1 className="text-lg text-mainPink font-bold">{product.price}$</h1>
          <div className="flex items-center justify-between">
            <div key={"counter"} className="flex items-center">
              <button
                className="p-1 text-lg border-mainBlack border-1 border-solid "
                onClick={increase}
              >
                +
              </button>
              <h1 className="text-lg p-1 px-2 border-y-1 border-mainBlack border-solid">
                {counter}
              </h1>
              <button
                className="p-1 text-lg border-mainBlack border-1 border-solid "
                onClick={decrease}
              >
                -
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-between h-full   ">
          <CgClose className="text-2xl cursor-pointer" onClick={deleteItem} />

          <h1 className="text-xl font-bold text-emerald-500">
            {" "}
            {(product.price * product.quantity).toFixed(2)}$
          </h1>
        </div>
      </div>
    </div>
  );
};

export default observer(CartDropProduct);
