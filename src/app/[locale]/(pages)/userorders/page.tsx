import React from "react";
import { unstable_setRequestLocale } from "next-intl/server";
import UserOrdersPageContainer from "./components/UserOrdersPageContainer";

interface UserOrdersPageProps {
  params: { locale: string };
}

const UserOrdersPage = ({ params: { locale } }: UserOrdersPageProps) => {
  unstable_setRequestLocale(locale);
  return <UserOrdersPageContainer />;
};

export default UserOrdersPage;
