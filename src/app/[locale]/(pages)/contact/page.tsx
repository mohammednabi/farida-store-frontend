import PageTitle from "@/components/PageTitle";
import React from "react";
import Map from "./components/Map";
import Welcoming from "./components/Welcoming";
import ComplaintForm from "./components/ComplaintForm";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

interface ContactPageProps {
  params: { locale: string };
}

const ContactPage = ({ params: { locale } }: ContactPageProps) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations("contactPage");

  return (
    <div
      className="w-full flex flex-col gap-20 justify-center items-center "
      dir={locale === "en" ? "ltr" : "rtl"}
    >
      <div className="flex flex-col gap-10 w-full">
        <PageTitle title={t("title")} />
        <Map />
      </div>
      <div className="flex flex-col gap-10 w-full">
        <Welcoming />
        <ComplaintForm />
      </div>
    </div>
  );
};

export default ContactPage;
