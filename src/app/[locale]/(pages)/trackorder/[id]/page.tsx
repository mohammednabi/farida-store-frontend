import PageTitle from "@/components/PageTitle";
import React from "react";
import TrackOrderContainer from "./components/TrackOrderContainer";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

interface TrackOrderPageWithIdProps {
  params: {
    id: string;
    locale: string;
  };
}

const TrackOrderPageWithId = ({
  params: { id, locale },
}: TrackOrderPageWithIdProps) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("userOrders");

  return (
    <div dir={locale === "en" ? "ltr" : "rtl"}>
      <PageTitle title={t("trackOrderPage.title")} />
      <TrackOrderContainer orderId={id} />
    </div>
  );
};

export default TrackOrderPageWithId;
