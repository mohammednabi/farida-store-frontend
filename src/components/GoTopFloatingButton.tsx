"use client";
import React, { useEffect, useState } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useScreenSize } from "react-screen-size-helper";

const GoTopFloatingButton = () => {
  const [screenScrollY, setScreenScrollY] = useState(0);
  const { isTablet, isMobile } = useScreenSize({});
  const goTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const scrolling = () => {
      // console.log("windo height", document.body.offsetHeight);
      // console.log("windo scrolling", scrollY);
      setScreenScrollY(scrollY);
    };

    window.addEventListener("scroll", scrolling);

    return () => {
      window.removeEventListener("scroll", scrolling);
    };
  }, []);

  return (
    <motion.div
      initial={{ x: isTablet || isMobile ? -100 : 100 }}
      animate={{
        x:
          screenScrollY > (1 / 2) * document.body.offsetHeight
            ? 0
            : isTablet || isMobile
            ? -100
            : 100,
      }}
      className={` bg-mainPink hover:bg-mainPink/75 text-mainWhite p-1 md:p-2 rounded-md fixed ${
        isTablet || isMobile ? `bottom-20 left-9` : `bottom-10 right-9`
      }  z-[70] cursor-pointer`}
      onClick={goTop}
    >
      <FaLongArrowAltUp />
    </motion.div>
  );
};

export default GoTopFloatingButton;
