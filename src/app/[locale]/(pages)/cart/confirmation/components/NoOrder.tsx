import { useTranslations } from "next-intl";
import React from "react";
import { FaBox } from "react-icons/fa";
const NoOrder = () => {
  const t = useTranslations("confirmationPage");
  return (
    <div className="w-full flex flex-col  text-mainBlack/10 gap-5 mt-20 justify-center items-center">
      <FaBox className="text-[10rem]" />
      <h1 className="text-4xl capitalize">{t("orderItems.noOrder")}</h1>
    </div>
  );
};

export default NoOrder;
