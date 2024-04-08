import React from "react";
import ShippingContent from "./components/ShippingContent";
import { unstable_setRequestLocale } from "next-intl/server";

interface ShippingPageProps {
  params: { locale: string };
}

const ShippingPage = ({ params: { locale } }: ShippingPageProps) => {
  unstable_setRequestLocale(locale);
  return (
    <div>
      <ShippingContent />
    </div>
  );
};

export default ShippingPage;
