import { StoreContext } from "@/contexts/StoreContext";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import UserInfoCard from "./UserInfoCard";

const UserData = () => {
  const { user } = useContext(StoreContext);

  const information: { title: string; description: string }[] = [
    { title: "email", description: user.strapiUserdata.email },
    { title: "username", description: user.strapiUserdata.username },
    { title: "first name", description: user.strapiUserdata.first_name },
    { title: "last name", description: user.strapiUserdata.last_name },
  ];

  return (
    <div className="grid grid-cols-2 gap-5 items-center justify-center mt-5">
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
