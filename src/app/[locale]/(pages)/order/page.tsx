import PageTitle from "@/components/PageTitle";
import React from "react";
import OrderForm from "./components/OrderForm";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

interface OrderPageProps {
  params: {
    locale: string;
  };
}

const OrderPage = ({ params: { locale } }: OrderPageProps) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations("trackOrderPage");

  return (
    <div
      className="flex flex-col gap-10 justify-center items-center "
      dir={locale === "en" ? "ltr" : "rtl"}
    >
      <PageTitle title={t("title")} />
      <OrderForm />
    </div>
  );
};

export default OrderPage;
