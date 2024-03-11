import React from "react";
import UserInformation from "./components/UserInformation";
import PageTitle from "@/components/PageTitle";
import EditButton from "./components/EditButton";

const page = () => {
  return (
    <div className="px-32">
      <PageTitle title="user profile" />
      <div className="mt-10 flex flex-col gap-5">
        <UserInformation />
        <EditButton />
      </div>
    </div>
  );
};

export default page;
