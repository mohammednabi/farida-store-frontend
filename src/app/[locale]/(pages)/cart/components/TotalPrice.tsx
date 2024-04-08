"use client";
import { StoreContext } from "@/contexts/StoreContext";
import { Button, Divider } from "@nextui-org/react";
import { observer } from "mobx-react-lite";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useScreenSize } from "react-screen-size-helper";

const TotalPrice = () => {
  const { cart } = useContext(StoreContext);
  const router = useRouter();
  const { currentWidth } = useScreenSize({});
  const t = useTranslations("cartPage");
  const currency = useTranslations("currency");

  const goToShipping = () => {
    router.push("/cart/shipping");
  };

  return (
    <div className="flex flex-col w-full pt-4  gap-5 capitalize">
      <div className="bg-mainPink text-mainWhite rounded-lg">
        <h1 className="text-center text-lg md:text-2xl font-bold md:py-2 p-1 capitalize">
          {t("cartHome.totlaPrice.totalItems")}
        </h1>
      </div>
      <div className="flex justify-between items-center flex-wrap">
        <h1 className="text-sm md:text-xl">
          {t("cartHome.totlaPrice.items")} :
        </h1>
        <h1 className="text-xs md:text-lg font-bold">
          {cart.totalPrice.toFixed(2)}{" "}
          <span className="text-xs ml-1">{currency("currency")} </span>
        </h1>
      </div>
      <Divider />
      <div className="flex justify-between items-center flex-wrap ">
        <h1 className="text-sm md:text-xl">
          {t("cartHome.totlaPrice.shipping")} :
        </h1>
        <h1 className="text-xs md:text-lg font-bold">
          {t("cartHome.totlaPrice.notAvailable")}{" "}
        </h1>
      </div>
      <Divider />
      <div className="flex justify-between items-center flex-wrap">
        <h1 className="text-sm md:text-xl">
          {t("cartHome.totlaPrice.total")} :
        </h1>
        <h1 className="text-xs md:text-lg font-bold">
          {cart.totalPrice.toFixed(2)}{" "}
          <span className="text-xs ml-1">{currency("currency")} </span>
        </h1>
      </div>
      <Divider />
      <Button
        className="bg-mainBlack text-white text-sm md:text-xl capitalize"
        radius="sm"
        size={currentWidth > 768 ? "md" : "sm"}
        onClick={goToShipping}
      >
        {t("cartHome.totlaPrice.complete")}
      </Button>
    </div>
  );
};

export default observer(TotalPrice);
