"use client";
import { StoreContext } from "@/contexts/StoreContext";
import { Avatar, Image } from "@nextui-org/react";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import UserData from "./UserData";

const UserInformation = () => {
  const { user } = useContext(StoreContext);

  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center mt-10">
        <div className="w-1/6 aspect-square rounded-full overflow-hidden">
          <Avatar
            src={`${process.env.NEXT_PUBLIC_HOST}${user.strapiUserdata?.avatar?.url}`}
            alt=""
            //   classNames={{
            //     img: "",
            //   }}
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-3xl font-semibold">
          {user.strapiUserdata.first_name} {user.strapiUserdata.last_name}
        </h1>
      </div>
      <UserData />
    </div>
  );
};

export default observer(UserInformation);
