"use client";
import { StoreContext } from "@/contexts/StoreContext";
import React, { useContext, useRef } from "react";
import { observer } from "mobx-react-lite";
import { AnimatePresence, motion, useDragControls } from "framer-motion";
import SidebarContent from "./SidebarContent";
import SidebarResponsiveContent from "./SidebarResponsiveContent";

const Sidebar = () => {
  const { sidebar } = useContext(StoreContext);

  const divRef = useRef<HTMLDivElement>(null);

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
          x: divRef?.current?.offsetHeight && -divRef?.current?.offsetHeight,
        }}
        animate={{
          x: sidebar.showSideBar
            ? 0
            : divRef?.current?.offsetHeight && -divRef?.current?.offsetHeight,
        }}
        exit={{
          x: divRef?.current?.offsetHeight && -divRef?.current?.offsetHeight,
        }}
        transition={{
          type: "tween",
          duration: 0.5,
        }}
        className="bg-white h-screen w-full lmob:w-[20rem] fixed top-0 left-0 z-[100] overflow-auto "
      >
        <SidebarContent />
        <SidebarResponsiveContent />
      </motion.div>
    </div>
  );
};

export default observer(Sidebar);
