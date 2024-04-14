import React from "react";
import UserInformation from "./components/UserInformation";
import PageTitle from "@/components/PageTitle";
import EditButton from "./components/EditButton";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

interface ContactPageProps {
  params: { locale: string };
}

const UserProfilePage = ({ params: { locale } }: ContactPageProps) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("userProfilePage");
  return (
    <div className=" px-5  md:px-32" dir={locale === "en" ? "ltr" : "rtl"}>
      <PageTitle title={t("title")} />
      <div className="mt-10 flex flex-col gap-5">
        <UserInformation />
        <EditButton />
      </div>
    </div>
  );
};

export default UserProfilePage;
