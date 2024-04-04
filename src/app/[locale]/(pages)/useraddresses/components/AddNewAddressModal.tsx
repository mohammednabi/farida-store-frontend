"use client ";
import React, { useContext } from "react";
import NewAddressForm from "./NewAddressForm";

import { StoreContext } from "@/contexts/StoreContext";
import { Modal, ModalContent } from "@nextui-org/react";

import { observer } from "mobx-react-lite";
import { useScreenSize } from "react-screen-size-helper";

const AddNewAddressModal = () => {
  const { addressModal } = useContext(StoreContext);
  const { currentWidth } = useScreenSize({});

  return (
    <div className="z">
      <Modal
        isOpen={addressModal.isOpen}
        onClose={addressModal.onClose}
        size={currentWidth > 768 ? "md" : "full"}
        className="overflow-y-auto "
        classNames={{
          base: "z-[87]",
          body: "z-[87]",
          wrapper: "z-[87]",
        }}
      >
        <ModalContent className="p-5">
          {(onClose) => <NewAddressForm />}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default observer(AddNewAddressModal);
