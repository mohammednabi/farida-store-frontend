import PageTitle from "@/components/PageTitle";
import React from "react";
import OrderCardsContainer from "./components/OrderCardsContainer";

const UserOrdersPage = () => {
  return (
    <div>
      <PageTitle title="user orders" />
      <OrderCardsContainer />
    </div>
  );
};

export default UserOrdersPage;
