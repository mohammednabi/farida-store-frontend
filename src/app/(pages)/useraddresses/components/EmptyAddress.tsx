"use client";
import { StoreContext } from "@/contexts/StoreContext";
import { Button, useDisclosure } from "@nextui-org/react";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { FaAddressBook, FaPlus } from "react-icons/fa";

const EmptyAddress = () => {
  const { addressModal } = useContext(StoreContext);
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 mt-20">
      <FaAddressBook className="text-[10rem] text-mainBlack/50" />
      <h1 className="text-3xl text-mainBlack/50 capitalize">
        you have no addresses
      </h1>
      <Button
        className="bg-mainBlack text-mainWhite capitalize"
        radius="none"
        endContent={<FaPlus />}
        onPress={addressModal.onOpen}
      >
        add new address
      </Button>
    </div>
  );
};

export default observer(EmptyAddress);
