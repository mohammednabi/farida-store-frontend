"use client";
import LoadingOverlay from "@/components/LoadingOverlay";
import { StoreContext } from "@/contexts/StoreContext";
import { Button, Input } from "@nextui-org/react";
import { observer } from "mobx-react-lite";
import { useLocale, useTranslations } from "next-intl";
import React, { useContext, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useScreenSize } from "react-screen-size-helper";

const NewAddressForm = () => {
  const { userOrders, user, addressModal } = useContext(StoreContext);
  const { currentWidth } = useScreenSize({});
  const t = useTranslations("userAdderesses");
  const locale = useLocale();
  const { handleSubmit, register } = useForm();

  const submittingForm = (data: FieldValues) => {
    userOrders.setIsAddressLoading = true;

    const formattedData = {
      street: data.street,
      state: data.state,
      city: data.city,
      country: data.country,
      postal_code: data.postal_code,
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
    <div className="relative" dir={locale === "en" ? "ltr" : "rtl"}>
      {userOrders.isAddressLoading && <LoadingOverlay />}
      <div className="flex flex-col gap-10">
        <h1 className="text-lg md:text-xl capitalize font-bold">
          {t("form.new")} :
        </h1>
        <form
          onSubmit={handleSubmit((data) => {
            submittingForm(data);
          })}
          className="flex flex-col gap-5"
        >
          <Input
            {...register("state")}
            label={t("form.labels.state")}
            labelPlacement="outside"
            variant="bordered"
            radius="none"
            placeholder={t("form.placeholders.state")}
            isRequired
            classNames={{
              label: `text-sm md:text-lg font-semiBold capitalize ${
                locale === "ar" && "right-3"
              }`,
            }}
          />
          <Input
            {...register("country")}
            label={t("form.labels.country")}
            labelPlacement="outside"
            variant="bordered"
            radius="none"
            placeholder={t("form.placeholders.country")}
            isRequired
            classNames={{
              label: `text-sm md:text-lg font-semiBold capitalize ${
                locale === "ar" && "right-3"
              }`,
            }}
          />
          <Input
            {...register("city")}
            label={t("form.labels.city")}
            labelPlacement="outside"
            variant="bordered"
            radius="none"
            placeholder={t("form.placeholders.city")}
            isRequired
            classNames={{
              label: `text-sm md:text-lg font-semiBold capitalize ${
                locale === "ar" && "right-3"
              }`,
            }}
          />
          <Input
            {...register("street")}
            label={t("form.labels.street")}
            labelPlacement="outside"
            variant="bordered"
            radius="none"
            placeholder={t("form.placeholders.street")}
            isRequired
            classNames={{
              label: `text-sm md:text-lg font-semiBold capitalize ${
                locale === "ar" && "right-3"
              }`,
            }}
          />
          <Input
            {...register("postal_code")}
            label={t("form.labels.postal")}
            labelPlacement="outside"
            variant="bordered"
            radius="none"
            placeholder={t("form.placeholders.postal")}
            isRequired
            classNames={{
              label: `text-sm md:text-lg font-semiBold capitalize ${
                locale === "ar" && "right-3"
              }`,
            }}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Input
              {...register("phone")}
              label={t("form.labels.phone1")}
              labelPlacement="outside"
              variant="bordered"
              radius="none"
              placeholder={t("form.placeholders.phone1")}
              isRequired
              classNames={{
                label: `text-sm md:text-lg font-semiBold capitalize ${
                  locale === "ar" && "right-3"
                }`,
              }}
            />
            <Input
              {...register("second_phone")}
              label={t("form.labels.phone2")}
              labelPlacement="outside"
              variant="bordered"
              radius="none"
              placeholder={t("form.placeholders.phone2")}
              classNames={{
                label: `text-sm md:text-lg font-semiBold capitalize ${
                  locale === "ar" && "right-3"
                }`,
              }}
            />
          </div>
          <Button
            size={currentWidth > 768 ? "md" : "sm"}
            type="submit"
            radius="none"
            className="bg-mainBlack text-mainWhite text-sm md:text-xl capitalize"
          >
            {t("form.action.submit")}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default observer(NewAddressForm);
