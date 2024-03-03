"use client";
import { Divider } from "@nextui-org/react";
import React, { useContext } from "react";
import ShippingRowDetails from "./ShippingRowDetails";
import { StoreContext } from "@/contexts/StoreContext";
import { observer } from "mobx-react-lite";
import OrderedItem from "./OrderedItem";

const ShippingOrderAndPrice = () => {
  const { cart } = useContext(StoreContext);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="capitalize text-2xl font-bold">your order</h1>

      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-[2fr_.5fr] gap-3 capitalize text-xl text-mainBlack/50 ">
          <h1>product</h1>
          <h1>total</h1>
        </div>
        <Divider />

        {cart.userCartItems.map((product) => (
          <div key={product.id} className="">
            {/* <ShippingRowDetails title={product.title} price={product.price} /> */}

            <OrderedItem
              title={product.title}
              price={product.price * product.quantity}
              imgSrc={product.imgSrc}
              quantity={product.quantity}
            />
            <Divider />
          </div>
        ))}

        <br />

        <ShippingRowDetails
          title="total prices"
          price={cart.totalPrice}
          titleStyle="font-bold capitalize "
          priceStyle="text-red-500"
          titleSize="text-xl"
        />
        <Divider />
        <ShippingRowDetails
          title="shipping"
          price={100}
          titleStyle="font-bold capitalize "
          priceStyle="text-emerald-500"
          titleSize="text-xl"
        />
        <Divider />
        <ShippingRowDetails
          title="total"
          price={cart.totalPrice + 100}
          titleStyle="font-bold capitalize "
          priceStyle="text-mainPink"
          titleSize="text-xl"
        />
      </div>

      <h1 className="capitalize text-sm mt-10">
        please check your order information before confirmation
      </h1>
    </div>
  );
};

export default observer(ShippingOrderAndPrice);
