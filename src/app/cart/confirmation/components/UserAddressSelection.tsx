import React, { useContext } from "react";
import InfoCard from "./InfoCard";
import { Button } from "@nextui-org/react";
import { StoreContext } from "@/contexts/StoreContext";
import { UserAddressType } from "@/stores/specificTypes/userAddressType";

interface userAddressProps {
  addressId: number | string;
  index: number;
  state: string;
  country: string;
  city: string;
  street: string;
  phone: string;
  secondPhone: string;
  postalCode: string;
}

const UserAddressSelection = ({
  addressId,
  index,
  state,
  country,
  city,
  street,
  phone,
  secondPhone,
  postalCode,
}: userAddressProps) => {
  const information: { title: string; description: string }[] = [
    { title: "state :", description: state },
    { title: "country :", description: country },
    { title: "city :", description: city },
    { title: "street :", description: street },
    { title: "postal code :", description: postalCode },
    { title: "phone :", description: phone },
    { title: "second_phone :", description: secondPhone },
  ];

  const { userAddresses, selectionAddressModal } = useContext(StoreContext);

  const selectTheAddress = () => {
    userAddresses.setSelectedUserAddress = {} as UserAddressType;

    const selectedAddress: UserAddressType = {
      id: addressId,
      state: state,
      city: city,
      country: country,
      postal_code: postalCode,
      phone: phone,
      street: street,
      second_phone: secondPhone,
    };
    userAddresses.setSelectedUserAddress = selectedAddress;
    selectionAddressModal.onClose();
  };

  return (
    <div className="border-1 border-mainBlack/50 border-solid   flex flex-col gap-3 p-5">
      <h1 className="text-center text-xl capitalize font-semibold">
        address {index}
      </h1>
      <div className="grid grid-cols-2">
        {information.map((info) => (
          <InfoCard
            key={info.title}
            title={info.title}
            description={info.description ? info.description : "not found"}
          />
        ))}
      </div>
      <Button
        radius="none"
        className="bg-mainBlack text-mainWhite text-lg capitalize"
        onPress={selectTheAddress}
      >
        select
      </Button>
    </div>
  );
};

export default UserAddressSelection;
