"use client";
import React, { useContext, useEffect, useState } from "react";
import CartSidebarProduct from "./CartSidebarProduct";
import { Divider } from "@nextui-org/react";
import { StoreContext } from "@/contexts/StoreContext";
import { observer } from "mobx-react-lite";
import Cookies from "js-cookie";
import { isUserLoggedIn } from "@/functions/credentials";

const CartSidebarProductsMenu = () => {
  const { cart, user, loginForm, registerForm, cartSidebar } =
    useContext(StoreContext);
  const [uiCondition, setUiCondition] = useState(isUserLoggedIn());

  useEffect(() => {
    setUiCondition(isUserLoggedIn());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    user.isLoading,
    loginForm.isLoading,
    registerForm.isLoading,
    user.isMergingOrRemovingLoading,
  ]);

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
              <CartSidebarProduct
                product={{ ...product, cartItemId: product.id }}
              />

              <Divider />
            </div>
          ))}
    </div>
  );
};

export default observer(CartSidebarProductsMenu);
