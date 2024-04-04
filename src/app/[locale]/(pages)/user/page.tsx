import PageTitle from "@/components/PageTitle";
import React from "react";
import UserPagesMenu from "./components/UserPagesMenu";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

interface UserPageProps {
  params: { locale: string };
}

const UserPage = ({ params: { locale } }: UserPageProps) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations("userPage");
  return (
    <div>
      <PageTitle title={t("account")} />
      <UserPagesMenu />
    </div>
  );
};

export default UserPage;
