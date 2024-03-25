"use client";
import { StoreContext } from "@/contexts/StoreContext";
import { isUserLoggedIn } from "@/functions/credentials";

import { cartProductType } from "@/stores/specificTypes/cartProductType";
import { strapiProductType } from "@/stores/specificTypes/strapiProductType";

import { Button } from "@nextui-org/react";
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";

import { useScreenSize } from "react-screen-size-helper";
import { motion } from "framer-motion";

interface AddToCartButtonProps {
  product: strapiProductType;
}

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const { cart, user, products, cartSidebar, sidebar } =
    useContext(StoreContext);
  const { currentWidth } = useScreenSize({});

  const [foundInCart, setFoundInCart] = useState<cartProductType | undefined>();
  const [addingToUserCartLoading, setAddingToUserCartLoading] = useState(false);

  const addProductToCart = () => {
    if (isUserLoggedIn()) {
      if (!foundInCart) {
        setAddingToUserCartLoading(true);
        user
          .addProductToUserCart(product.id, 1)
          .then(() => {
            cart.setProductsCount = cart.productsCount + 1;
            setAddingToUserCartLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setAddingToUserCartLoading(false);
          });
      }
    } else {
      setAddingToUserCartLoading(true);
      const parsedProductToCartProduct: cartProductType = {
        id: product.id,
        imgSrc: `${process.env.NEXT_PUBLIC_HOST}${product.attributes.thumbnail.data.attributes.url}`,
        title: product.attributes.title,
        slug: product.attributes.slug,
        description: product.attributes.description,
        prePrice: getPriceAfterDiscount()
          ? Number(product.attributes.price.toFixed(2))
          : 0,
        price:
          getPriceAfterDiscount() ??
          Number(product.attributes.price.toFixed(2)),
        quantity: 1,
      };

      cart.addProduct(parsedProductToCartProduct);
      setAddingToUserCartLoading(false);
    }
  };

  const getPriceAfterDiscount = () => {
    return products.getPriceAfterDiscount(
      product.attributes.discount.data,
      product.attributes.price
    );
  };

  useEffect(() => {
    if (isUserLoggedIn()) {
      setFoundInCart(cart.isInUserCart(product.id));
    } else {
      setFoundInCart(cart.isInCart(product.id));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart.totalPrice]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y:
          (cartSidebar.showCartSideBar || sidebar.showSideBar) &&
          currentWidth < 768
            ? 144 - 80
            : 0,
      }}
      className="fixed bottom-36 right-5 md:bottom-0 md:left-0 z-50 w-auto md:w-full"
    >
      <Button
        className={` py-2 ${
          foundInCart ? `bg-emerald-500` : `bg-mainPink`
        } text-mainWhite  w-full capitalize transition-all hover:bg-mainPink/90 text-2xl md:text-xl`}
        endContent={foundInCart ? <FaCheck /> : <FaCartPlus />}
        size="lg"
        isLoading={addingToUserCartLoading}
        isDisabled={foundInCart ? true : false}
        disableAnimation
        disableRipple
        onClick={addProductToCart}
        radius={currentWidth < 768 ? "full" : "none"}
        isIconOnly={currentWidth < 768 ? true : false}
      >
        {currentWidth < 768
          ? ""
          : foundInCart
          ? "added to cart"
          : "add to cart"}
      </Button>
    </motion.div>
  );
};

export default observer(AddToCartButton);
