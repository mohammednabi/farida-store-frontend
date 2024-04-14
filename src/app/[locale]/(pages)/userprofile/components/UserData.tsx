import { StoreContext } from "@/contexts/StoreContext";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import UserInfoCard from "./UserInfoCard";
import { useTranslations } from "next-intl";

const UserData = () => {
  const { user } = useContext(StoreContext);
  const t = useTranslations("userProfilePage");

  const information: { title: string; description: string }[] = [
    { title: t("userDetails.email"), description: user.strapiUserdata.email },
    {
      title: t("userDetails.username"),
      description: user.strapiUserdata.username,
    },
    {
      title: t("userDetails.firstName"),
      description: user.strapiUserdata.first_name,
    },
    {
      title: t("userDetails.lastName"),
      description: user.strapiUserdata.last_name,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center mt-5">
      {information.map((info) => (
        <UserInfoCard
          key={info.title}
          title={info.title}
          description={info.description}
        />
      ))}
    </div>
  );
};

export default observer(UserData);
