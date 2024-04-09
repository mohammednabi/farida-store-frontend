"use client";
import { Button, Divider } from "@nextui-org/react";
import React, { useContext, useEffect } from "react";
import WishListItem from "./WishListItem";
import { StoreContext } from "@/contexts/StoreContext";
import { observer } from "mobx-react-lite";
import WishListIsEmpty from "./WishListIsEmpty";
import { isUserLoggedIn } from "@/functions/credentials";
import WishListFliters from "./WishListFliters";
import { GiSettingsKnobs } from "react-icons/gi";
import { BsPlus } from "react-icons/bs";
import { useRouter } from "@/navigation";
import FiltersDropMenu from "./FiltersDropMenu";
import { useTranslations } from "next-intl";
const WishlistContent = () => {
  const { wishlist, userWishlist, filtersDrop } = useContext(StoreContext);
  const router = useRouter();
  const t = useTranslations("wishList");

  const goToHomePage = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col ">
      <div className="relative w-full bg-mainPink text-white p-3 md:p-5 flex items-center justify-between xl:justify-center gap-2 text-sm md:text-xl font-bold capitalize rounded-md ">
        <Button
          size="sm"
          isIconOnly
          startContent={<BsPlus className="text-lg " />}
          className="text-mainBlack bg-mainWhite xl:hidden"
          onClick={goToHomePage}
        />
        <h1> {t("content.items")}</h1>

        <Button
          size="sm"
          isIconOnly
          startContent={<GiSettingsKnobs className="text-lg" />}
          className="text-mainBlack bg-mainWhite xl:hidden"
          onClick={filtersDrop.toggleDropMenu}
        />

        <FiltersDropMenu />
      </div>

      {userWishlist.userWishlistProductsCount === 0 ? (
        <WishListIsEmpty />
      ) : (
        <div className="flex flex-col gap-3 mt-3">
          {userWishlist.userWishlistProducts.map((item, index, arr) => (
            <div key={item.id}>
              <WishListItem product={item} />
              {/* {index < arr.length - 1 && <Divider />} */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default observer(WishlistContent);
