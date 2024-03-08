"use client";
import LoadingOverlay from "@/components/LoadingOverlay";
import Rating from "@/components/Rating";
import { StoreContext } from "@/contexts/StoreContext";
import { getAverageRatings } from "@/functions/getAverageRatings";
import { getTheLengthOfAllowedRatings } from "@/functions/getTheLengthOfAllowedRatings";
import { userCartProductType } from "@/stores/specificTypes/userCartProductType";
import { userWishlistProductType } from "@/stores/specificTypes/wishlistProductType";

import { Button, Image } from "@nextui-org/react";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import React, { useContext, useMemo, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdAddShoppingCart, MdDelete } from "react-icons/md";

interface wishlistItemProps {
  product: userWishlistProductType;
}

const WishListItem = ({ product }: wishlistItemProps) => {
  const { userWishlist, user, cart, products } = useContext(StoreContext);

  const [isLoading, setIsloading] = useState(false);

  const foundedInCart = useMemo(() => {
    if (cart.isInUserCart(Number(product.id))) {
      return true;
    } else {
      return false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart.totalPrice]);

  const addToCart = () => {
    // cart.addProduct({...product,quantity:1})
    setIsloading(true);
    user.addProductToUserCart(product.id, 1).then(() => {
      cart.setProductsCount = cart.productsCount + 1;
      setIsloading(false);
    });
  };
  const removeFromWishlist = () => {
    // wishlist.removeFromWishlist(product.id)
    setIsloading(true);
    userWishlist
      .removeProductFromUserWishlistByProductId(product.id)
      .then(() => {
        userWishlist.setUserWishlistProductCount =
          userWishlist.userWishlistProductsCount - 1;
        setIsloading(false);
      });
  };

  return (
    <div className="relative">
      {isLoading && <LoadingOverlay />}

      <div className="grid grid-cols-[2fr_4fr_2fr_2fr] gap-5 py-3 w-full">
        <Link
          href={`/product/${product.id}`}
          className="w-full aspect-square flex items-center justify-center"
        >
          <Image
            src={product.imgSrc}
            alt=""
            classNames={{
              img: "w-full h-full object-contain",
            }}
          />
        </Link>
        <div className="flex flex-col gap-1  justify-center">
          <Link href={`/product/${product.id}`}>
            <h1 className="text-2xl capitalize line-clamp-3">
              {product.title}
            </h1>
          </Link>
          <div className="flex items-center gap-2">
            <Rating rating={getAverageRatings(product.reviews)} size="2rem" />
            <h1>
              ({getTheLengthOfAllowedRatings(products.targetProductReviews)})
            </h1>
          </div>
          <h1 className="text-xl capitalize text-mainBlack/50   w-full line-clamp-2">
            {product.description}
          </h1>
        </div>
        <div className="grid place-items-center">
          <h1 className="text-2xl font-bold capitalize text-green-500">
            {product.price} $
          </h1>
        </div>

        <div className="flex flex-col gap-2    justify-center items-center ">
          <Button
            radius="lg"
            className={` ${
              foundedInCart ? `bg-emerald-500` : `bg-mainBlack`
            }  text-mainWhite px-10 py-8 capitalize text-2xl`}
            endContent={
              foundedInCart ? (
                <FaCheck className="text-mainWhite" />
              ) : (
                <MdAddShoppingCart className="text-mainWhite" />
              )
            }
            isDisabled={foundedInCart}
            onClick={addToCart}
          >
            {foundedInCart ? "added to cart" : "add it to cart"}
          </Button>
          <Button
            radius="lg"
            className="bg-red-500 text-mainWhite px-10 py-8 capitalize text-2xl w-full"
            endContent={<MdDelete className="text-mainWhite" />}
            onClick={removeFromWishlist}
          >
            delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default observer(WishListItem);
