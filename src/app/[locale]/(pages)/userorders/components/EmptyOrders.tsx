import { useTranslations } from "next-intl";
import React from "react";
import { FaBoxOpen } from "react-icons/fa";

const EmptyOrders = () => {
  const t = useTranslations("userOrders");
  return (
    <div className="w-full h-full flex flex-col justify-center items-center my-20">
      <FaBoxOpen className="text-9xl md:text-[12rem] text-mainBlack/10" />
      <h1 className="text-xl md:text-3xl capitalize">{t("empty")}</h1>
    </div>
  );
};

export default EmptyOrders;
