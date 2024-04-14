import PageTitle from "@/components/PageTitle";
import React from "react";
import OrderCardsContainer from "./OrderCardsContainer";
import { useLocale, useTranslations } from "next-intl";

interface UserOrdersPageContainerProps {
  // Define your props here
}

const UserOrdersPageContainer = ({}: UserOrdersPageContainerProps) => {
  const t = useTranslations("userOrders");
  const locale = useLocale();
  return (
    <div dir={locale === "en" ? "ltr" : "rtl"}>
      <PageTitle title={t("title")} />
      <OrderCardsContainer />
    </div>
  );
};

export default UserOrdersPageContainer;
