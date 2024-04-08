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
import { Link } from "@/navigation";
import React, { useContext, useMemo, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdAddShoppingCart, MdDelete } from "react-icons/md";
import { useScreenSize } from "react-screen-size-helper";

interface wishlistItemProps {
  product: userWishlistProductType;
}

const WishListItem = ({ product }: wishlistItemProps) => {
  const { userWishlist, user, cart, products } = useContext(StoreContext);
  const { isMobile, isTablet, isDesktop, isLargeDesktop } = useScreenSize({});

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
    <div className="relative py-3  border-solid border-1 border-x-mainGray px-2 shadow-sm">
      {isLoading && <LoadingOverlay />}

      <div className="grid  grid-rows-[1fr_auto] grid-cols-[2fr_4fr] sm:grid-cols-[2fr_4fr_2fr] sm:grid-rows-1  md:grid-cols-[2fr_4fr_2fr_auto] gap-5 py-3 w-full">
        <Link
          href={`/product/${product.id}`}
          className="w-full aspect-square flex items-center justify-center"
        >
          <Image
            src={product.imgSrc}
            alt=""
            className="flex justify-center items-center w-full aspect-square"
            classNames={{
              img: "w-full h-full object-contain",
            }}
          />
        </Link>
        <div className="flex flex-col gap-1  justify-center">
          <Link href={`/product/${product.id}`}>
            <h1 className="text-sm md:text-2xl capitalize line-clamp-1">
              {product.title}
            </h1>
          </Link>
          <div className="flex items-center gap-2">
            <Rating
              rating={getAverageRatings(product.reviews)}
              size={isMobile || isTablet || isDesktop ? ".8rem" : "2rem"}
            />
            <h1 className="text-sm md:text-lg hidden lmob:block">
              ({getTheLengthOfAllowedRatings(products.targetProductReviews)})
            </h1>
          </div>
          <h1 className="text-xs md:text-xl capitalize text-mainBlack/50   w-full line-clamp-1">
            {product.description}
          </h1>
        </div>
        <div className="grid col-span-2 sm:col-auto grid-rows-1 grid-cols-[2fr_4fr] sm:grid-rows-1 sm:grid-cols-1  place-items-center">
          <h1 className="text-sm sm:text-lg md:text-2xl text-center font-bold capitalize text-green-500">
            {product.price} $
          </h1>

          <div className="grid md:hidden grid-cols-2 items-center justify-self-end sm:justify-self-center gap-2 ">
            <button
              className={`${
                foundedInCart ? `bg-emerald-500` : `bg-mainBlack`
              } p-1 lmob:p-2 sm:p-3 rounded-full`}
              onClick={addToCart}
              disabled={foundedInCart}
            >
              {foundedInCart ? (
                <FaCheck className="text-mainWhite" />
              ) : (
                <MdAddShoppingCart className="text-mainWhite" />
              )}
            </button>
            <button
              className="bg-red-500 p-1 lmob:p-2 sm:p-3 rounded-full"
              onClick={removeFromWishlist}
            >
              <MdDelete className="text-mainWhite" />
            </button>
          </div>
        </div>

        <div className="hidden md:flex  flex-col gap-2    justify-center items-center ">
          <Button
            radius="lg"
            className={` ${
              foundedInCart ? `bg-emerald-500` : `bg-mainBlack`
            }  text-mainWhite px-10 py-8 capitalize text-lg lg:text-xl xl:text-2xl`}
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
            className="bg-red-500 text-mainWhite px-10 py-8 capitalize text-lg lg:text-xl xl:text-2xl w-full"
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
