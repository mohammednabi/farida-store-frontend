"use client";
import React, { useContext } from "react";
import InfoCard from "./InfoCard";
import { observer } from "mobx-react-lite";
import { StoreContext } from "@/contexts/StoreContext";
import { useLocale, useTranslations } from "next-intl";

const Orderinfo = () => {
  const { userOrders } = useContext(StoreContext);
  const t = useTranslations("confirmationPage");
  const currency = useTranslations("currency");
  const locale = useLocale();

  const formattedDate = new Date(
    userOrders.orderDetails.data?.attributes?.createdAt
  ).toLocaleDateString(locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const arrivedDate = userOrders.orderDetails.data?.attributes?.arrivedAt
    ? new Date(
        userOrders.orderDetails.data?.attributes?.arrivedAt
      ).toLocaleDateString(locale, {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : t("orderInfo.date.soon");

  const information = [
    {
      title: t("orderInfo.information.orderFor"),
      description:
        userOrders.orderDetails.data?.attributes?.user?.data?.attributes
          ?.username,
    },
    {
      title: t("orderInfo.information.orderNumber"),
      description: userOrders.orderDetails?.data?.id,
    },
    {
      title: t("orderInfo.information.orderOn"),
      description: formattedDate,
    },
    {
      title: t("orderInfo.information.arrivedOn"),
      description: arrivedDate,
    },
    {
      title: t("orderInfo.information.totalPrice"),
      description: `${
        userOrders.orderDetails.data?.attributes?.total
      } ${currency("currency")}`,
    },
    {
      title: t("orderInfo.information.payment"),
      description: t("orderInfo.information.cash"),
    },
    {
      title: t("orderInfo.information.notes"),
      description: userOrders.orderDetails.data?.attributes?.order_notes,
    },
  ];

  return (
    <div className="border-1 border-mainBlack/25 border-solid flex flex-col gap-2 px-10 py-3 capitalize">
      <h1 className="text-lg md:text-xl capitalize text-center">
        {t("orderInfo.information.title")}
      </h1>
      <div className="grid grid-cols-1 lmob:grid-cols-2 gap-2">
        {information?.map(
          (info) =>
            info.description && (
              <InfoCard
                key={info.title}
                title={info.title}
                description={info.description?.toString() ?? ""}
              />
            )
        )}
      </div>
    </div>
  );
};

export default observer(Orderinfo);
