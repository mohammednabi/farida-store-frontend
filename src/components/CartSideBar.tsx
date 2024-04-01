"use client";
import React, { useContext, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StoreContext } from "@/contexts/StoreContext";
import { observer } from "mobx-react-lite";
import CartSideBarContent from "./CartSideBarContent";
import LoadingOverlay from "./LoadingOverlay";
import { useLocale } from "next-intl";

const CartSideBar = () => {
  const { cartSidebar } = useContext(StoreContext);

  const divRef = useRef<HTMLDivElement>(null);

  const locale = useLocale();

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
        initial={{
          x: locale === "en" ? 1000 : -1000,
        }}
        animate={{
          x: cartSidebar.showCartSideBar
            ? 0
            : divRef?.current?.offsetHeight &&
              (locale === "en"
                ? divRef.current?.offsetHeight
                : -divRef.current?.offsetHeight),
        }}
        // exit={{ x: divRef.current?.offsetHeight }}
        transition={{
          type: "tween",
          duration: 0.5,
        }}
        className={`origin-right bg-mainWhite w-full  lmob:w-96 h-screen fixed top-0  z-[100] ${
          locale === "en" ? "right-0" : "left-0"
        }  `}
        dir={locale === "en" ? "ltr" : "rtl"}
      >
        <CartSideBarContent />
      </motion.div>
    </div>
  );
};

export default observer(CartSideBar);
