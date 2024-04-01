"use client";
import React, { useContext } from "react";
import { IoMenuOutline } from "react-icons/io5";
import Icon from "./Icon";
import { StoreContext } from "@/contexts/StoreContext";
import { observer } from "mobx-react-lite";
import { motion } from "framer-motion";

const NavMenuIcon = () => {
  const { sidebar } = useContext(StoreContext);

  return (
    <div>
      <motion.div
        initial={{ rotateZ: 0 }}
        animate={{ rotateZ: sidebar.showBackdrop ? 90 : 0 }}
        className="cursor-pointer w-fit"
        onClick={sidebar.displayWholeSidebar}
      >
        <IoMenuOutline size={"1.5rem"} />
      </motion.div>
    </div>
  );
};

export default observer(NavMenuIcon);
