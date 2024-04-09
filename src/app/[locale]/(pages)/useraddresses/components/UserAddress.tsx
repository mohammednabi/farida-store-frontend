"use client";
import React, { useContext, useState } from "react";
import AddressCell from "./AddressCell";
import { Button } from "@nextui-org/react";
import { MdOutlineDelete } from "react-icons/md";
import { StoreContext } from "@/contexts/StoreContext";
import LoadingOverlay from "@/components/LoadingOverlay";
import { useScreenSize } from "react-screen-size-helper";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("userAdderesses");

  const information: { title: string; description: string }[] = [
    { title: t("address.state"), description: state },
    { title: t("address.country"), description: country },
    { title: t("address.city"), description: city },
    { title: t("address.street"), description: street },
    { title: t("address.postal"), description: postalCode },
    { title: t("address.phone1"), description: phone },
    { title: t("address.phone2"), description: secondPhone },
  ];

  const { userAddresses } = useContext(StoreContext);

  const { currentWidth } = useScreenSize({});

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
        <h1 className="text-lg md:text-xl font-semibold text-center capitalize">
          {t("address.address")} {index}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 px-5 mt-3">
          {information.map((info) => (
            <AddressCell
              key={info.title}
              title={info.title}
              description={info.description ? info.description : "not found"}
            />
          ))}
        </div>
        <Button
          size={currentWidth > 768 ? "md" : "sm"}
          className="bg-red-700 text-mainWhite capitalize text-lg md:text-xl "
          radius="none"
          endContent={<MdOutlineDelete />}
          onClick={deleteTheAddress}
        >
          {t("address.delete")}
        </Button>
      </div>
    </div>
  );
};

export default UserAddress;
