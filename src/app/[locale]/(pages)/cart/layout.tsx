import React from "react";
import { unstable_setRequestLocale } from "next-intl/server";
import CartLayoutContainer from "./components/CartLayoutContainer";

interface cartLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

const layout = ({ children, params: { locale } }: cartLayoutProps) => {
  unstable_setRequestLocale(locale);

  return (
    <div>
      <CartLayoutContainer />
      <div>{children}</div>
    </div>
  );
};

export default layout;
