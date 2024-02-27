"use client";
import React, { useContext, useEffect, useState } from "react";
import CartDropProduct from "./CartDropProduct";
import { StoreContext } from "@/contexts/StoreContext";
import { Divider } from "@nextui-org/react";
import { observer } from "mobx-react-lite";
import { isUserLoggedIn } from "@/functions/credentials";

const CartDropProductsMenu = () => {
  const { cart, user, loginForm, registerForm } = useContext(StoreContext);

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
    <div className="w-full flex flex-col gap-3 h-[57vh] overflow-auto">
      {uiCondition
        ? cart.userCartItems.map((product) => (
            <div key={product.id} className="flex flex-col gap-3">
              <CartDropProduct product={product} />
              <Divider />
            </div>
          ))
        : cart.cartProducts.map((product) => (
            <div key={product.id} className="flex flex-col gap-3">
              <CartDropProduct product={product} />
              <Divider />
            </div>
          ))}
    </div>
  );
};

export default observer(CartDropProductsMenu);
