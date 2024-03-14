"use client";
import { StoreContext } from "@/contexts/StoreContext";
import React, { useContext } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { observer } from "mobx-react-lite";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

const FilterButton = () => {
  const { filter } = useContext(StoreContext);

  return (
    <div className="relative" onClick={filter.displayWholeFilterSidebar}>
      <div className="flex items-center justify-start gap-2  pl-5 py-3 cursor-pointer bg-mainGray rounded-md">
        <AnimatePresence>
          <motion.div>
            {filter.showFilterSideBar ? (
              <motion.div
                key="closeButton"
                initial={{ opacity: 0, rotateZ: 0 }}
                animate={{ opacity: 1, rotateZ: 360 }}
                exit={{ opacity: 0, rotateZ: 0 }}
                onClick={(e) => {
                  e.stopPropagation();
                  filter.hideWholeFilterSidebar();
                }}
              >
                <IoMdClose className="text-lg md:text-2xl" />
              </motion.div>
            ) : (
              <motion.div
                key="settingsButton"
                initial={{ opacity: 0, rotateZ: 0, position: "absolute" }}
                animate={{ opacity: 1, rotateZ: 360, position: "unset" }}
                exit={{ opacity: 0, rotateZ: 0, position: "absolute" }}
              >
                <GiSettingsKnobs className="text-lg md:text-2xl" />
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
        <h1 className="text-lg md:text-2xl">filter</h1>
      </div>
    </div>
  );
};

export default observer(FilterButton);
