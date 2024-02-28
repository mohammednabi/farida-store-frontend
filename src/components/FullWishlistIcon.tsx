"use client";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import Icon from "./Icon";
import { observer } from "mobx-react-lite";
import { StoreContext } from "@/contexts/StoreContext";
import { isUserLoggedIn } from "@/functions/credentials";

const FullWishlistIcon = () => {
  const { wishlist, userWishlist, loginForm, registerForm } =
    useContext(StoreContext);

  useEffect(() => {
    if (isUserLoggedIn()) {
      userWishlist.getUserWishlistItems();
    } else {
      userWishlist.resetAllStates();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    userWishlist.userWishlistProductsCount,
    loginForm.isLoading,
    registerForm.isLoading,
  ]);

  return (
    <div>
      <Link href={"/wishlist"}>
        <Icon
          icon={<FaRegHeart />}
          hasBorder={true}
          showPop={true}
          // count={userWishlist.userWishlistProductsCount}
          count={userWishlist.userWishlistProductsCount}
        />
      </Link>
    </div>
  );
};

export default observer(FullWishlistIcon);
