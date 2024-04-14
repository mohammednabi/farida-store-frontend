"use client";
import { StoreContext } from "@/contexts/StoreContext";
import { Avatar, Image } from "@nextui-org/react";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import UserData from "./UserData";
import EditProfileModal from "./EditProfileModal";

const UserInformation = () => {
  const { user } = useContext(StoreContext);

  return (
    <div className="flex flex-col gap-5">
      <div className="w-full flex flex-col justify-center items-center gap-3">
        <div className="w-24 md:w-40 aspect-square rounded-full overflow-hidden">
          <Avatar
            // src={`${process.env.NEXT_PUBLIC_HOST}${user.strapiUserdata?.avatar?.url}`}
            alt=""
            //   classNames={{
            //     img: "",
            //   }}
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-lg md:text-3xl font-semibold">
          {user.strapiUserdata.first_name} {user.strapiUserdata.last_name}
        </h1>
      </div>
      <UserData />
      <EditProfileModal />
    </div>
  );
};

export default observer(UserInformation);
