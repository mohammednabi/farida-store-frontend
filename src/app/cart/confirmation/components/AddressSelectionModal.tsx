"use client";
import { StoreContext } from "@/contexts/StoreContext";
import { Modal, ModalContent } from "@nextui-org/react";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import AddressesSelections from "./AddressesSelections";
import { useScreenSize } from "react-screen-size-helper";

const AddressSelectionModal = () => {
  const { selectionAddressModal } = useContext(StoreContext);
  const { currentWidth } = useScreenSize({});

  return (
    <Modal
      placement="center"
      size={currentWidth > 768 ? "md" : "full"}
      isOpen={selectionAddressModal.isOpen}
      onClose={selectionAddressModal.onClose}
      className="p-2 md:p-5"
      classNames={{
        base: "z-[87]",
        body: "z-[87]",
        wrapper: "z-[87]",
      }}
    >
      <ModalContent className="p-5 md:p-10">
        {(onClose) => <AddressesSelections />}
      </ModalContent>
    </Modal>
  );
};

export default observer(AddressSelectionModal);
