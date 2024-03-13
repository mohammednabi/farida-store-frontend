"use client";
import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Icon from "./Icon";

// import CartDrop from "./Cartdrop";
import CartDrop2 from "./Cartdrop";

import { observer } from "mobx-react-lite";

import { StoreContext } from "@/contexts/StoreContext";
import Link from "next/link";

const FullCartIcon = () => {
  const { cart } = useContext(StoreContext);

  return (
    <div onMouseOver={cart.displayCartMenu} onMouseLeave={cart.hideCartMenu}>
      <Link href={"/cart"}>
        <Icon
          icon={<AiOutlineShoppingCart />}
          hasBorder={true}
          showPop={true}
          count={cart.productsCount}
        />
      </Link>

      <CartDrop2 />
    </div>
  );
};

export default observer(FullCartIcon);
