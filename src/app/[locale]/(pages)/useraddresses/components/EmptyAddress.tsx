"use client";
import { StoreContext } from "@/contexts/StoreContext";
import { Button, useDisclosure } from "@nextui-org/react";
import { observer } from "mobx-react-lite";
import { useTranslations } from "next-intl";
import React, { useContext } from "react";
import { FaAddressBook, FaPlus } from "react-icons/fa";
import { useScreenSize } from "react-screen-size-helper";

const EmptyAddress = () => {
  const { addressModal } = useContext(StoreContext);
  const { currentWidth } = useScreenSize({});
  const t = useTranslations("userAdderesses");
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 mt-20">
      <FaAddressBook className="text-9xl md:text-[10rem] text-mainBlack/50" />
      <h1 className="text-lg md:text-3xl text-mainBlack/50 capitalize">
        {t("empty.description")}
      </h1>
      <Button
        size={currentWidth > 768 ? "md" : "sm"}
        className="bg-mainBlack text-mainWhite capitalize"
        radius="none"
        endContent={<FaPlus />}
        onPress={addressModal.onOpen}
      >
        {t("new")}
      </Button>
    </div>
  );
};

export default observer(EmptyAddress);
