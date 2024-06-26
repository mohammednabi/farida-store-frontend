/* eslint-disable @next/next/no-img-element */
import { useTranslations } from "next-intl";
import React from "react";
import { PiShoppingBagOpenDuotone } from "react-icons/pi";

const EmptyProducts = () => {
  const t = useTranslations("emptyProduct");
  return (
    <div className="w-full h-[20rem] flex items-center justify-center">
      <div className="flex flex-col gap-5 items-center justify-center w-full h-full px-5 md:px-20">
        {/* <img src='/filters not found.jpg' alt='not found filtered products' className='w-full object-cover' /> */}

        <PiShoppingBagOpenDuotone className="text-mainBlack/50 text-9xl md:text-[12rem]" />

        <h1 className="text-lg md:text-2xl font-semibold text-mainBlack/50 capitalize text-center">
          {t("noProducts")}
        </h1>
        <h1 className="text-sm md:text-lg font-semibold text-mainBlack/50 capitalize text-center">
          {t("again")}
        </h1>
      </div>
    </div>
  );
};

export default EmptyProducts;
