"use client";
import { StoreContext } from "@/contexts/StoreContext";
import { Button } from "@nextui-org/react";
import React, { useContext, useMemo } from "react";
import { FaCartArrowDown } from "react-icons/fa6";
import { observer } from "mobx-react-lite";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";
import { useLocale } from "next-intl";

const CartFloatingButton = () => {
  const { cartSidebar, cart, sidebar, searchBox } = useContext(StoreContext);
  const locale = useLocale();

  const movingValue = useMemo(() => {
    if (locale === "en") {
      return 1000;
    } else {
      return -1000;
    }
  }, [locale]);
  return (
    <AnimatePresence mode="wait">
      {!cartSidebar.showCartSideBar &&
        !cart.isCartMenuDisplayed &&
        !sidebar.showSideBar &&
        !searchBox.showSearchBox && (
          <motion.div
            initial={{ x: movingValue }}
            animate={{ x: 0 }}
            exit={{ x: movingValue }}
            transition={{
              duration: 1,
            }}
            className={`fixed bottom-20 ${
              locale === "en" ? "right-5" : "left-5"
            } z-[100] w-max `}
          >
            <div
              className="bg-mainBlack cursor-pointer w-12 h-12  md:w-16 md:h-16 relative rounded-full flex items-center justify-center transition-all hover:bg-mainBlack/75"
              onClick={() => {
                cartSidebar.displayWholeCartSidebar();
              }}
            >
              <Icon
                icon={
                  <FaCartArrowDown className="text-mainWhite text-lg md:text-2xl" />
                }
                showPop
                count={cart.productsCount}
              />
            </div>
          </motion.div>
        )}
    </AnimatePresence>
  );
};

export default observer(CartFloatingButton);
