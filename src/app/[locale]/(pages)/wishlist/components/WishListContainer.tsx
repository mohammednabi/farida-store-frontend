import PageTitle from "@/components/PageTitle";
import React from "react";
import WishListSections from "./WishListSections";
import { useLocale, useTranslations } from "next-intl";

interface WishListContainerProps {
  // Define your props here
}

const WishListContainer = ({}: WishListContainerProps) => {
  const t = useTranslations("wishList");
  const locale = useLocale();
  return (
    <div dir={locale === "en" ? "ltr" : "rtl"}>
      <PageTitle title={t("title")} />
      <WishListSections />
    </div>
  );
};

export default WishListContainer;
