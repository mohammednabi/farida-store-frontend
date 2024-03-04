"use client";
import React, { useContext, useEffect, useState } from "react";
import Thanks from "./Thanks";

import ItemsContainer from "./ItemsContainer";
import Orderinfo from "./Orderinfo";
import OrderAddress from "./OrderAddress";
import { StoreContext } from "@/contexts/StoreContext";
import { useSearchParams } from "next/navigation";
import { observer } from "mobx-react-lite";

const ConfirmationPageContainer = () => {
  const { userOrders } = useContext(StoreContext);
  //   const [addressInformation, setAddressInformation] =
  //     useState<{ title: string; description: string }[]>();
  //   const [orderInformation, setOrderInformation] =
  //     useState<{ title: string; description: string }[]>();

  const searchParams = useSearchParams();

  const orderId = searchParams.get("order_number");

  useEffect(() => {
    userOrders.getOrderDetails(orderId ?? "");
    // .then((data) => {
    //   if (data) {
    //     const formattedDate = new Date(
    //       data.data.attributes.createdAt
    //     ).toLocaleDateString();

    //     const addressInfo = [
    //       {
    //         title: "state :",
    //         description:
    //           data.data.attributes.user_order_address.data.attributes.state,
    //       },
    //       {
    //         title: "country :",
    //         description:
    //           data.data.attributes.user_order_address.data.attributes.country,
    //       },
    //       {
    //         title: "city :",
    //         description:
    //           data.data.attributes.user_order_address.data.attributes.city,
    //       },
    //       {
    //         title: "street :",
    //         description:
    //           data.data.attributes.user_order_address.data.attributes.street,
    //       },
    //       {
    //         title: "postal code :",
    //         description:
    //           data.data.attributes.user_order_address.data.attributes
    //             .postalcode,
    //       },
    //       {
    //         title: "phone :",
    //         description:
    //           data.data.attributes.user_order_address.data.attributes.phone,
    //       },
    //       {
    //         title: "second_phone :",
    //         description:
    //           data.data.attributes.user_order_address.data.attributes
    //             .second_phone,
    //       },
    //     ];

    //     const orderInfo = [
    //       { title: "order number :", description: data.data.id.toString() },
    //       { title: "created at :", description: formattedDate },
    //       {
    //         title: "total price :",
    //         description: `${data.data.attributes.total} $`,
    //       },
    //       { title: "payment method :", description: "cash" },
    //       {
    //         title: "order notes :",
    //         description: data.data.attributes.order_notes,
    //       },
    //     ];

    //     setAddressInformation(addressInfo);
    //     setOrderInformation(orderInfo);
    //   }
    // });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col gap-10 px-32">
      <Thanks />
      {/* <OrderInformationContainer /> */}
      <div className="grid grid-cols-2 gap-5">
        <Orderinfo />
        <OrderAddress />
      </div>
      <ItemsContainer />
    </div>
  );
};

export default observer(ConfirmationPageContainer);
