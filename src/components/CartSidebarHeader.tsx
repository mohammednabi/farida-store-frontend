"use client";
import { Divider } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import React from "react";
import { IoMdClose } from "react-icons/io";

interface cartSidebarProps {
  close: any;
}

const CartSidebarHeader = ({ close }: cartSidebarProps) => {
  const t = useTranslations("cartSidebar");
  return (
    <div>
      <div className="p-5 flex justify-between items-center">
        <h1 className="text-lg md:text-xl font-bold capitalize">{t("cart")}</h1>
        <IoMdClose
          className="text-xl md:text-2xl cursor-pointer font-bold "
          onClick={close}
        />
      </div>
      <Divider />
    </div>
  );
};

export default CartSidebarHeader;
