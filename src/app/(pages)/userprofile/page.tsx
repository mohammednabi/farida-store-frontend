import React from "react";
import UserInformation from "./components/UserInformation";
import PageTitle from "@/components/PageTitle";

const page = () => {
  return (
    <div className="px-32">
      <PageTitle title="user profile" />
      <UserInformation />
    </div>
  );
};

export default page;
