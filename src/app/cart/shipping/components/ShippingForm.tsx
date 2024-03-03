"use client";
import { StoreContext } from "@/contexts/StoreContext";
import {
  Accordion,
  AccordionItem,
  Button,
  Input,
  Textarea,
} from "@nextui-org/react";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { MdOutlineDiscount } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShippingForm = () => {
  const { handleSubmit, register, reset } = useForm();
  const { user, cart } = useContext(StoreContext);

  const submitForm = (data: FieldValues) => {
    const userAddressData = {
      street: data.street,
      state: data.state,
      city: data.city,
      country: data.country,
      postalcode: data.postal,
      phone: data.phone,
      userId: user.strapiUserdata.id.toString(),
      second_phone: data.second_phone,
      fullname: data.fullname,
    };

    let cartItemsIds: string[] = [];
    cart.userCartItems.forEach((item) => {
      cartItemsIds.push(item.cartItemId.toString());
    });

    user.addNewUserAddress(userAddressData).then((addressData) => {
      if (addressData) {
        const userOrderDetailData = {
          totalPrice: Number((cart.totalPrice + 100).toFixed(2)),
          userPaymentId: null,
          userId: user.strapiUserdata.id.toString(),
          orderAddressId: addressData.data.id,
          orderNotes: data.notes,
          orderCartItemsIds: cartItemsIds,
        };
        user.createNewOrder(userOrderDetailData).then((data) => {
          data ? toast.success("order created") : toast.error("order failed");
        });
      } else {
        toast.error("failed to create address");
      }
    });
    reset();
  };

  return (
    <div className="flex flex-col ">
      <h1 className="text-2xl font-bold capitalize">order details</h1>

      <Accordion variant="bordered" className="mt-10">
        <AccordionItem
          title="Promo Code"
          subtitle="Do you have promo code? press here"
          indicator={<MdOutlineDiscount />}
          classNames={{
            subtitle: "text-mainPink",
            indicator: "text-2xl text-mainPink",
          }}
        >
          <h1 className="text-2xl capitalize pb-5">
            if you have promo code use it here{" "}
          </h1>
          <div className="flex items-center gap-5">
            <Input
              labelPlacement="outside"
              inputMode="text"
              radius="sm"
              isRequired
              classNames={{
                label: "text-xl capitalize font-bold ",
              }}
            />

            <Button className="bg-mainBlack text-mainWhite px-5 py-2">
              use code
            </Button>
          </div>
        </AccordionItem>
      </Accordion>

      <form
        onSubmit={handleSubmit((data) => {
          submitForm(data);
        })}
        className="mt-20   flex flex-col gap-10 "
      >
        <Input
          {...register("fullname")}
          label={"fullname"}
          labelPlacement="outside"
          inputMode="text"
          placeholder="your full name"
          radius="sm"
          isRequired
          classNames={{
            label: "text-xl capitalize font-bold ",
          }}
        />

        <div className="flex items-center gap-5">
          <Input
            {...register("phone")}
            label={"phone"}
            labelPlacement="outside"
            inputMode="tel"
            placeholder="your phone number"
            radius="sm"
            isRequired
            type="tel"
            classNames={{
              label: "text-xl capitalize font-bold ",
            }}
          />

          <Input
            {...register("second_phone")}
            label={"another phone "}
            labelPlacement="outside"
            inputMode="text"
            placeholder="another phone number"
            radius="sm"
            type="tel"
            classNames={{
              label: "text-xl capitalize font-bold ",
            }}
          />
        </div>

        <Input
          {...register("state")}
          label={"state"}
          labelPlacement="outside"
          inputMode="text"
          placeholder="pick your state"
          radius="sm"
          isRequired
          classNames={{
            label: "text-xl capitalize font-bold ",
          }}
        />
        <Input
          {...register("country")}
          label={"country"}
          labelPlacement="outside"
          inputMode="text"
          placeholder="your country"
          radius="sm"
          isRequired
          classNames={{
            label: "text-xl capitalize font-bold ",
          }}
        />

        <Input
          {...register("city")}
          label={"city"}
          labelPlacement="outside"
          inputMode="text"
          placeholder="your country"
          radius="sm"
          isRequired
          classNames={{
            label: "text-xl capitalize font-bold ",
          }}
        />

        <Input
          {...register("street")}
          label={"street"}
          labelPlacement="outside"
          inputMode="text"
          placeholder="your street"
          radius="sm"
          isRequired
          classNames={{
            label: "text-xl capitalize font-bold ",
          }}
        />

        <Input
          {...register("postal")}
          label={"postal code"}
          labelPlacement="outside"
          inputMode="text"
          placeholder="postal code of your address"
          radius="sm"
          isRequired
          classNames={{
            label: "text-xl capitalize font-bold ",
          }}
        />

        <div className="flex flex-col pt-10 gap-5">
          <div>
            <h1 className="text-2xl font-bold capitalize">more information</h1>
            <h1 className="text-xl text-mainBlack/50 capitalize">
              Order notes (optional)
            </h1>
          </div>

          <div>
            <Textarea
              {...register("notes")}
              variant="bordered"
              radius="none"
              placeholder="If you have any notes about your order, write it here "
              minRows={20}
            />
          </div>
        </div>

        <Button
          className="bg-mainBlack text-mainWhite capitalize "
          type="submit"
        >
          complete your order
        </Button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default observer(ShippingForm);
