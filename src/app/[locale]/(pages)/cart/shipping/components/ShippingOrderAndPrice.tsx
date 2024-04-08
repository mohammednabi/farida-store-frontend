"use client";
import { Divider } from "@nextui-org/react";
import React, { useContext } from "react";
import ShippingRowDetails from "./ShippingRowDetails";
import { StoreContext } from "@/contexts/StoreContext";
import { observer } from "mobx-react-lite";
import OrderedItem from "./OrderedItem";
import { useLocale, useTranslations } from "next-intl";

const ShippingOrderAndPrice = () => {
  const { cart } = useContext(StoreContext);
  const t = useTranslations("shippingPage");
  const locale = useLocale();

  return (
    <div className="flex flex-col gap-5">
      <h1 className="capitalize text-lg md:text-2xl font-bold">
        {t("order.title")}
      </h1>

      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-[2fr_.5fr] gap-3 capitalize text-sm md:text-xl text-mainBlack/50 ">
          <h1> {t("order.table.product")}</h1>
          <h1 className="hidden lmob:block">{t("order.table.total")}</h1>
        </div>
        <Divider />

        {cart.userCartItems.map((product) => (
          <div key={product.id} className="">
            {/* <ShippingRowDetails title={product.title} price={product.price} /> */}

            <OrderedItem
              title={
                locale === "en" ? product.title : product.localizatons.title
              }
              price={product.price * product.quantity}
              imgSrc={product.imgSrc}
              quantity={product.quantity}
            />
            <Divider />
          </div>
        ))}

        <br />

        <ShippingRowDetails
          title={t("order.footer.totalPrices")}
          price={cart.totalPrice}
          titleStyle="font-bold capitalize "
          priceStyle="text-red-500"
        />
        <Divider />
        <ShippingRowDetails
          title={t("order.footer.shipping")}
          price={100}
          titleStyle="font-bold capitalize "
          priceStyle="text-emerald-500"
        />
        <Divider />
        <ShippingRowDetails
          title={t("order.footer.total")}
          price={cart.totalPrice + 100}
          titleStyle="font-bold capitalize "
          priceStyle="text-mainPink"
        />
      </div>

      <h1 className="capitalize text-xs md:text-sm mt-10">
        {t("order.check")}
      </h1>
    </div>
  );
};

export default observer(ShippingOrderAndPrice);
