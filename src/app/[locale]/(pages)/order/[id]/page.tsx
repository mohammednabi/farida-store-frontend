import PageTitle from "@/components/PageTitle";
import React from "react";
import PageContainer from "./components/PageContainer";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

interface OrderNumberPageProps {
  params: { id: string; locale: string };
}

const OrderNumberPage = ({ params: { id, locale } }: OrderNumberPageProps) => {
  const t = useTranslations("userOrders");
  unstable_setRequestLocale(locale);

  return (
    <div>
      <PageTitle title={`${t("orderPage.title")} ${id}`} />
      <PageContainer orderId={id} />
    </div>
  );
};

export default OrderNumberPage;
