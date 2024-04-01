"use client";
import { StoreContext } from "@/contexts/StoreContext";
import React, { useContext, useRef } from "react";
import { observer } from "mobx-react-lite";
import { AnimatePresence, motion, useDragControls } from "framer-motion";
import SidebarContent from "./SidebarContent";
import SidebarResponsiveContent from "./SidebarResponsiveContent";
import { useLocale } from "next-intl";

const Sidebar = () => {
  const { sidebar } = useContext(StoreContext);

  const divRef = useRef<HTMLDivElement>(null);

  const locale = useLocale();

  return (
    <div className="relative w-full h-auto">
      <AnimatePresence mode="wait">
        {sidebar.showBackdrop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="backdrop z-[90]"
            onClick={sidebar.hideWholeSidebar}
          />
        )}
      </AnimatePresence>
      <motion.div
        ref={divRef}
        initial={{
          x: locale === "en" ? -1000 : 1000,
        }}
        animate={{
          x: sidebar.showSideBar
            ? 0
            : divRef?.current?.offsetHeight &&
              (locale === "en"
                ? -divRef?.current?.offsetHeight
                : divRef?.current?.offsetHeight),
        }}
        // exit={{
        //   x: divRef?.current?.offsetHeight && -divRef?.current?.offsetHeight,
        // }}
        transition={{
          type: "tween",
          duration: 0.5,
        }}
        className={`bg-white h-screen w-full lmob:w-[20rem] fixed top-0 ${
          locale === "en" ? "left-0" : "right-0"
        }   z-[100] overflow-auto `}
        dir={locale === "en" ? "ltr" : "rtl"}
      >
        <SidebarContent />
        <SidebarResponsiveContent />
      </motion.div>
    </div>
  );
};

export default observer(Sidebar);
