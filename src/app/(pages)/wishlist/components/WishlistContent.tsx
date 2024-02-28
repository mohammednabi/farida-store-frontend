"use client";
import { Divider } from "@nextui-org/react";
import React, { useContext, useEffect } from "react";
import WishListItem from "./WishListItem";
import { StoreContext } from "@/contexts/StoreContext";
import { observer } from "mobx-react-lite";
import WishListIsEmpty from "./WishListIsEmpty";
import { isUserLoggedIn } from "@/functions/credentials";

const WishlistContent = () => {
  const { wishlist, userWishlist } = useContext(StoreContext);

  return (
    <div className="flex flex-col ">
      <div className="w-full bg-mainPink text-white p-5 flex items-center justify-center text-xl font-bold capitalize rounded-xl">
        <h1>wish list items</h1>
      </div>

      {userWishlist.userWishlistProductsCount === 0 ? (
        <WishListIsEmpty />
      ) : (
        <div className="flex flex-col gap-3">
          {userWishlist.userWishlistProducts.map((item) => (
            <div key={item.id}>
              <WishListItem product={item} />
              <Divider />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default observer(WishlistContent);
