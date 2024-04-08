"use client";
import PageTitle from "@/components/PageTitle";
import React from "react";
import LayoutTabs from "./LayoutTabs";
import { useTranslations } from "next-intl";

interface CartLayoutContainerProps {
  // Define your props here
}

const CartLayoutContainer = ({}: CartLayoutContainerProps) => {
  const t = useTranslations("cartPage");
  return (
    <>
      <PageTitle title={t("title")} />
      <LayoutTabs />
    </>
  );
};

export default CartLayoutContainer;
