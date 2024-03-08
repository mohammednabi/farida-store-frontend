"use client";
import LoadingOverlay from "@/components/LoadingOverlay";
import { StoreContext } from "@/contexts/StoreContext";
import { Button, Input } from "@nextui-org/react";
import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const NewAddressForm = () => {
  const { userOrders, user, addressModal } = useContext(StoreContext);

  const { handleSubmit, register } = useForm();

  const submittingForm = (data: FieldValues) => {
    userOrders.setIsAddressLoading = true;

    const formattedData = {
      street: data.street,
      state: data.state,
      city: data.city,
      country: data.country,
      postalcode: data.postal_code,
      phone: data.phone,
      userId: user.strapiUserdata.id.toString(),
      second_phone: data.second_phone,
      fullname: user.strapiUserdata.username,
    };

    userOrders.addNewUserAddress(formattedData).finally(() => {
      userOrders.setIsAddressLoading = false;
      addressModal.onClose();
    });
  };

  return (
    <div className="relative">
      {userOrders.isAddressLoading && <LoadingOverlay />}
      <div className="flex flex-col gap-10">
        <h1 className="text-xl capitalize font-bold">new address :</h1>
        <form
          onSubmit={handleSubmit((data) => {
            submittingForm(data);
          })}
          className="flex flex-col gap-5"
        >
          <Input
            {...register("state")}
            label="state :"
            labelPlacement="outside"
            variant="bordered"
            radius="none"
            placeholder="state"
            isRequired
            classNames={{
              label: "text-lg font-semiBold capitalize",
            }}
          />
          <Input
            {...register("country")}
            label="country :"
            labelPlacement="outside"
            variant="bordered"
            radius="none"
            placeholder="country"
            isRequired
            classNames={{
              label: "text-lg font-semiBold capitalize",
            }}
          />
          <Input
            {...register("city")}
            label="city :"
            labelPlacement="outside"
            variant="bordered"
            radius="none"
            placeholder="city"
            isRequired
            classNames={{
              label: "text-lg font-semiBold capitalize",
            }}
          />
          <Input
            {...register("street")}
            label="street :"
            labelPlacement="outside"
            variant="bordered"
            radius="none"
            placeholder="street"
            isRequired
            classNames={{
              label: "text-lg font-semiBold capitalize",
            }}
          />
          <Input
            {...register("postal_code")}
            label="postal code :"
            labelPlacement="outside"
            variant="bordered"
            radius="none"
            placeholder="postal code"
            isRequired
            classNames={{
              label: "text-lg font-semiBold capitalize",
            }}
          />
          <div className="grid grid-cols-2 gap-5">
            <Input
              {...register("phone")}
              label="phone :"
              labelPlacement="outside"
              variant="bordered"
              radius="none"
              placeholder="phone"
              isRequired
              classNames={{
                label: "text-lg font-semiBold capitalize",
              }}
            />
            <Input
              {...register("second_phone")}
              label="second phone :"
              labelPlacement="outside"
              variant="bordered"
              radius="none"
              placeholder="second phone"
              classNames={{
                label: "text-lg font-semiBold capitalize",
              }}
            />
          </div>
          <Button
            type="submit"
            radius="none"
            className="bg-mainBlack text-mainWhite text-xl capitalize"
          >
            submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default observer(NewAddressForm);
