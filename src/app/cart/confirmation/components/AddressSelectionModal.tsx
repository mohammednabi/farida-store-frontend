"use client";
import { StoreContext } from "@/contexts/StoreContext";
import { Modal, ModalContent } from "@nextui-org/react";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import AddressesSelections from "./AddressesSelections";

const AddressSelectionModal = () => {
  const { selectionAddressModal } = useContext(StoreContext);

  return (
    <Modal
      isOpen={selectionAddressModal.isOpen}
      onClose={selectionAddressModal.onClose}
      className=" p-5"
    >
      <ModalContent className="p-10">
        {(onClose) => <AddressesSelections />}
      </ModalContent>
    </Modal>
  );
};

export default observer(AddressSelectionModal);
