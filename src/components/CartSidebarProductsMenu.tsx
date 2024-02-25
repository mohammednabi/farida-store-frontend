"use client";
import React, { useContext, useEffect, useState } from "react";
import CartSidebarProduct from "./CartSidebarProduct";
import { Divider } from "@nextui-org/react";
import { StoreContext } from "@/contexts/StoreContext";
import { observer } from "mobx-react-lite";
import Cookies from "js-cookie";

const CartSidebarProductsMenu = () => {
  const { cart, user, loginForm, registerForm } = useContext(StoreContext);
  const [uiCondition, setUiCondition] = useState(Cookies.get("credentials"));

  useEffect(() => {
    setUiCondition(Cookies.get("credentials"));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.isLoading, loginForm.isLoading, registerForm.isLoading]);

  return (
    <div className="flex flex-col  gap-3 p-5 overflow-auto h-full w-full">
      {uiCondition
        ? cart.userCartItems.map((product) => (
            <div key={product.id} className="flex flex-col gap-3">
              <CartSidebarProduct product={product} />

              <Divider />
            </div>
          ))
        : cart.cartProducts.map((product) => (
            <div key={product.id} className="flex flex-col gap-3">
              <CartSidebarProduct product={product} />

              <Divider />
            </div>
          ))}
    </div>
  );
};

export default observer(CartSidebarProductsMenu);
