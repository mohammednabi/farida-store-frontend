"use client";
import { StoreContext } from "@/contexts/StoreContext";
import { Button } from "@nextui-org/react";
import React, { useContext } from "react";

const EditButton = () => {
  const { profileModal } = useContext(StoreContext);

  return (
    <div className="flex justify-center items-center">
      <Button
        className="bg-mainBlack text-mainWhite text-xl mt-10 capitalize"
        radius="none"
        onPress={profileModal.onOpen}
      >
        edit the profile
      </Button>
    </div>
  );
};

export default EditButton;
