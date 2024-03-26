"use client";
import { Button, Input } from "@nextui-org/react";
import React from "react";
import { useScreenSize } from "react-screen-size-helper";

const OrderForm = () => {
  const { currentWidth } = useScreenSize({});

  return (
    <div className="flex flex-col items-center justify-center gap-10 p-5 px-7 lmob:px-20">
      <h1 className=" w-full md:w-8/12 lg:w-5/12 text-sm md:text-xl">
        Please enter your order number in the box below and press the “Track
        Order” button to view its status. You can find the order number in the
        mail sent to you containing the order confirmation Receipt.
      </h1>

      <form className="gap-5 flex flex-col w-full md:w-8/12 lg:w-5/12 ">
        <Input
          label="Order number"
          labelPlacement="outside"
          placeholder="You will find it in your order confirmation message"
          radius="none"
          variant="bordered"
          size={currentWidth > 768 ? "lg" : "md"}
          className="w-full text-sm md:text-lg"
          classNames={{
            label: "text-sm md:text-lg",
          }}
        />
        <Input
          label="Receipt email"
          labelPlacement="outside"
          placeholder="The email you used to complete the order"
          radius="none"
          variant="bordered"
          size={currentWidth > 768 ? "lg" : "md"}
          className="w-full text-sm md:text-lg"
          classNames={{
            label: "text-sm md:text-lg",
          }}
        />
        <Button
          variant="solid"
          radius="none"
          size={currentWidth > 768 ? "lg" : "md"}
          className="bg-mainBlack text-mainWhite capitalize text-sm md:text-xl"
        >
          track order
        </Button>
      </form>
    </div>
  );
};

export default OrderForm;
