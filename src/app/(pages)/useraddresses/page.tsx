import PageTitle from "@/components/PageTitle";
import React from "react";
import AddressesContainer from "./components/AddressesContainer";

const UserAddressesPage = () => {
  return (
    <div>
      <PageTitle title={`your addresses`} />
      <AddressesContainer />
    </div>
  );
};

export default UserAddressesPage;
