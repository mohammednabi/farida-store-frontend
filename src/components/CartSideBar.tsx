"use client";
import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StoreContext } from "@/contexts/StoreContext";
import { observer } from "mobx-react-lite";
import CartSideBarContent from "./CartSideBarContent";
import LoadingOverlay from "./LoadingOverlay";

const CartSideBar = () => {
  const { cartSidebar } = useContext(StoreContext);

  return (
    <div className="relative max-w-screen h-auto ">
      <AnimatePresence mode="wait">
        {cartSidebar.showBackdrop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="backdrop z-[90]"
            onClick={cartSidebar.hideWholeCartSidebar}
          />
        )}
      </AnimatePresence>

      <motion.div
        // initial={{ scaleX: 0 }}
        // animate={{ scaleX: cartSidebar.showCartSideBar?1:0}}
        // exit={{scaleX:0}}
        initial={{ x: 1000 }}
        animate={{ x: cartSidebar.showCartSideBar ? 0 : 1000 }}
        exit={{ x: 1000 }}
        transition={{
          type: "tween",
          duration: 0.5,
        }}
        className="origin-right bg-mainWhite w-[25vw] h-screen fixed top-0 right-0 z-[100] "
      >
        <CartSideBarContent />
      </motion.div>
    </div>
  );
};

export default observer(CartSideBar);
