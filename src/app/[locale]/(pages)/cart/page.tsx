import React from "react";

import { unstable_setRequestLocale } from "next-intl/server";
import CartPageContainer from "./components/CartPageContainer";

interface CartPageProps {
  params: { locale: string };
}

const CartPage = ({ params: { locale } }: CartPageProps) => {
  unstable_setRequestLocale(locale);

  return (
    <>
      <CartPageContainer />
    </>
  );
};

export default CartPage;
