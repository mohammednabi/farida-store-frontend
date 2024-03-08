"use client ";
import React, { useContext } from "react";
import NewAddressForm from "./NewAddressForm";

import { StoreContext } from "@/contexts/StoreContext";
import { Modal, ModalContent } from "@nextui-org/react";

import { observer } from "mobx-react-lite";

const AddNewAddressModal = () => {
  const { addressModal } = useContext(StoreContext);

  return (
    <>
      <Modal isOpen={addressModal.isOpen} onClose={addressModal.onClose}>
        <ModalContent className="p-5">
          {(onClose) => <NewAddressForm />}
        </ModalContent>
      </Modal>
    </>
  );
};

export default observer(AddNewAddressModal);
