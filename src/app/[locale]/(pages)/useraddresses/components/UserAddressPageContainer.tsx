import PageTitle from "@/components/PageTitle";
import React from "react";
import AddressesContainer from "./AddressesContainer";
import { useLocale, useTranslations } from "next-intl";

interface UserAddressPageContainerProps {
  // Define your props here
}

const UserAddressPageContainer = ({}: UserAddressPageContainerProps) => {
  const t = useTranslations("userAdderesses");
  const locale = useLocale();
  return (
    <div dir={locale === "en" ? "ltr" : "rtl"}>
      <PageTitle title={t("title")} />
      <AddressesContainer />
    </div>
  );
};

export default UserAddressPageContainer;
