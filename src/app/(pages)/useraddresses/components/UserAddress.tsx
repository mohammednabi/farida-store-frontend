"use client";
import React, { useContext, useState } from "react";
import AddressCell from "./AddressCell";
import { Button } from "@nextui-org/react";
import { MdOutlineDelete } from "react-icons/md";
import { StoreContext } from "@/contexts/StoreContext";
import LoadingOverlay from "@/components/LoadingOverlay";

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

const UserAddress = ({
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

  const { userAddresses } = useContext(StoreContext);

  const [isLoading, setIsloading] = useState(false);

  const deleteTheAddress = () => {
    setIsloading(true);
    userAddresses
      .deleteUserAddress(addressId)
      .then((ok) => {
        setIsloading(false);
      })
      .catch((err) => {
        setIsloading(false);
      });
  };

  return (
    <div className="relative">
      {isLoading && <LoadingOverlay />}
      <div className="p-5 border-2 border-solid border-mainBlack/25 flex flex-col gap-3">
        <h1 className="text-xl font-semibold text-center capitalize">
          address {index}
        </h1>
        <div className="grid grid-cols-2 gap-3 px-5 mt-3">
          {information.map((info) => (
            <AddressCell
              key={info.title}
              title={info.title}
              description={info.description ? info.description : "not found"}
            />
          ))}
        </div>
        <Button
          className="bg-red-700 text-mainWhite capitalize text-xl "
          radius="none"
          endContent={<MdOutlineDelete />}
          onClick={deleteTheAddress}
        >
          delete
        </Button>
      </div>
    </div>
  );
};

export default UserAddress;
