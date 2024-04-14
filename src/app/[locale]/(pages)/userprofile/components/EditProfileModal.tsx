"use client";
import { Modal, ModalContent } from "@nextui-org/react";
import React, { useContext } from "react";
import ModalDataContainer from "./ModalDataContainer";
import { StoreContext } from "@/contexts/StoreContext";
import { observer } from "mobx-react-lite";
import { useScreenSize } from "react-screen-size-helper";

const EditProfileModal = () => {
  const { profileModal } = useContext(StoreContext);

  const { currentWidth } = useScreenSize({});

  return (
    <Modal
      size={currentWidth > 768 ? "md" : "full"}
      isOpen={profileModal.isOpen}
      onClose={profileModal.onClose}
    >
      <ModalContent className="p-5">
        {() => <ModalDataContainer />}
      </ModalContent>
    </Modal>
  );
};

export default observer(EditProfileModal);
