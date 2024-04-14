"use client";
import { StoreContext } from "@/contexts/StoreContext";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import React, { useContext } from "react";
import { useScreenSize } from "react-screen-size-helper";

const EditButton = () => {
  const { profileModal } = useContext(StoreContext);
  const t = useTranslations("userProfilePage");
  const { currentWidth } = useScreenSize({});

  return (
    <div className="flex justify-center items-center">
      <Button
        className="bg-mainBlack text-mainWhite text-sm md:text-xl mt-10 capitalize"
        radius="none"
        onPress={profileModal.onOpen}
        size={currentWidth > 768 ? "md" : "sm"}
      >
        {t("actions.main")}
      </Button>
    </div>
  );
};

export default EditButton;
