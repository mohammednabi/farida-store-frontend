"use client";
import { StoreContext } from "@/contexts/StoreContext";
import { Button, Input } from "@nextui-org/react";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useScreenSize } from "react-screen-size-helper";

const OrderForm = () => {
  const { currentWidth } = useScreenSize({});
  const { register, handleSubmit } = useForm();
  const { userOrders, user } = useContext(StoreContext);
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const goToOrder = (data: FieldValues) => {
    // console.log({ data });
    setIsLoading(true);
    setErrorMessage("");
    userOrders.getOrderDetails(data.onumber).then((order) => {
      if (
        order &&
        order.data.attributes.user.data.attributes.email === data.email &&
        order.data.attributes.user.data.attributes.email ===
          user.strapiUserdata.email &&
        order.data.id.toString() === data.onumber
      ) {
        router.push(`trackorder/${data.onumber}`);
        setIsLoading(false);
      } else {
        setErrorMessage("invalid information");
        setIsLoading(false);
      }
      // console.log({ order });
    });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10 p-5 px-7 lmob:px-20">
      <h1 className=" w-full md:w-8/12 lg:w-5/12 text-sm md:text-xl">
        Please enter your order number in the box below and press the “Track
        Order” button to view its status. You can find the order number in the
        mail sent to you containing the order confirmation Receipt.
      </h1>

      <form
        onSubmit={handleSubmit((data) => {
          goToOrder(data);
        })}
        className="gap-5 flex flex-col w-full md:w-8/12 lg:w-5/12 "
      >
        <Input
          {...register("onumber")}
          isRequired
          label="Order number"
          labelPlacement="outside"
          placeholder="You will find it in your order confirmation message"
          radius="none"
          type="text"
          variant="bordered"
          size={currentWidth > 768 ? "lg" : "md"}
          className="w-full text-sm md:text-lg"
          classNames={{
            label: "text-sm md:text-lg",
          }}
        />
        <Input
          {...register("email")}
          isRequired
          label="Receipt email"
          labelPlacement="outside"
          placeholder="The email you used to complete the order"
          radius="none"
          type="email"
          variant="bordered"
          size={currentWidth > 768 ? "lg" : "md"}
          className="w-full text-sm md:text-lg"
          classNames={{
            label: "text-sm md:text-lg",
          }}
        />
        <h1 className="text-red-500 text-sm md:text-xl">{errorMessage}</h1>
        <Button
          variant="solid"
          type="submit"
          radius="none"
          isLoading={isLoading}
          size={currentWidth > 768 ? "lg" : "md"}
          className="bg-mainBlack text-mainWhite capitalize text-sm md:text-xl"
        >
          track order
        </Button>
      </form>
    </div>
  );
};

export default observer(OrderForm);
