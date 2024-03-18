"use client";
import React, { useContext, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StoreContext } from "@/contexts/StoreContext";
import { observer } from "mobx-react-lite";
import CartSideBarContent from "./CartSideBarContent";
import LoadingOverlay from "./LoadingOverlay";

const CartSideBar = () => {
  const { cartSidebar } = useContext(StoreContext);

  const divRef = useRef<HTMLDivElement>(null);

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
        ref={divRef}
        // initial={{ x: 1000 }}
        initial={{ x: divRef.current?.offsetHeight }}
        animate={{
          x: cartSidebar.showCartSideBar ? 0 : divRef.current?.offsetHeight,
        }}
        exit={{ x: divRef.current?.offsetHeight }}
        transition={{
          type: "tween",
          duration: 0.5,
        }}
        className="origin-right bg-mainWhite w-full  lmob:w-96 h-screen fixed top-0 right-0 z-[100] "
      >
        <CartSideBarContent />
      </motion.div>
    </div>
  );
};

export default observer(CartSideBar);
