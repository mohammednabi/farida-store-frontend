"use client";
import { Button } from "@nextui-org/react";
import React, { useContext } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import { StoreContext } from "@/contexts/StoreContext";

const ShowHideFastAdsButton = () => {
  const { fastAds } = useContext(StoreContext);

  return (
    <div
      className="absolute top-full  bg-mainDarkBlue  text-mainWhite z-10 cursor-pointer text-xs md:text-lg p-1 hover:bg-mainDarkBlue/90 rounded-b-full"
      onClick={fastAds.toggleShowingAds}
    >
      <motion.div
        initial={{ rotateZ: 0 }}
        animate={{ rotateZ: fastAds.showTheAds ? 0 : 180 }}
      >
        <FaArrowUp />
      </motion.div>
    </div>
  );
};

export default observer(ShowHideFastAdsButton);
