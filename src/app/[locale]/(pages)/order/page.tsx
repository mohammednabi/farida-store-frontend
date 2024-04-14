import PageTitle from "@/components/PageTitle";
import React from "react";
import OrderForm from "./components/OrderForm";
import { unstable_setRequestLocale } from "next-intl/server";

interface OrderPageProps {
  params: {
    locale: string;
  };
}

const OrderPage = ({ params: { locale } }: OrderPageProps) => {
  unstable_setRequestLocale(locale);
  return (
    <div className="flex flex-col gap-10 justify-center items-center ">
      <PageTitle title="track order" />
      <OrderForm />
    </div>
  );
};

export default OrderPage;
