import { useTranslations } from "next-intl";
import React from "react";

const CartTableHeader = () => {
  const t = useTranslations("cartPage");
  return (
    <div className="grid text-center bg-mainPink font-bold text-lg md:text-xl rounded-lg capitalize text-mainWhite px-5 py-1 md:py-2 grid-cols-[5.5fr_1fr_1.5fr_1fr_.5fr] gap-3 items-center">
      <h1 className="text-center lmob:rtl:text-right lmob:ltr:text-left col-span-5 lmob:col-span-3 md:col-span-1">
        {t("cartHome.header.product")}
      </h1>
      <h1 className="hidden md:block">{t("cartHome.header.price")} </h1>
      <h1 className="hidden md:block"> {t("cartHome.header.quantity")}</h1>
      <h1 className="hidden lmob:block col-span-2">
        {t("cartHome.header.total")}{" "}
      </h1>
    </div>
  );
};

export default CartTableHeader;
