"use client";
import React, { useContext, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import ProductsPagination from "./ProductsPagination";
import { StoreContext } from "@/contexts/StoreContext";
import { observer } from "mobx-react-lite";
import { CircularProgress, Spinner } from "@nextui-org/react";

import { AnimatePresence, motion } from "framer-motion";
import FilterSidebarContents from "@/app/components/FilterSidebarContents";
import RawProductCard from "./RawProductCard";
import GridStyleView from "./GridStyleView";
import RowStyleView from "./RowStyleView";

const ProductsSection = () => {
  const { viewStyle, filter } = useContext(StoreContext);

  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col gap-5 relative ">
      {viewStyle.gridView ? <GridStyleView /> : <RowStyleView />}

      {/* ============ */}

      <ProductsPagination />

      <AnimatePresence mode="wait">
        {filter.showBackdrop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key="white-backdrop"
            className="bg-mainWhite/50 w-full h-full absolute top-0 left-0 z-50"
            onClick={filter.hideWholeFilterSidebar}
          />
        )}
      </AnimatePresence>
      <motion.div
        ref={divRef}
        initial={{
          x: divRef.current?.offsetWidth && -divRef.current?.offsetWidth,
        }}
        animate={{
          x: filter.showFilterSideBar
            ? 0
            : divRef.current?.offsetWidth && -divRef.current?.offsetWidth,
        }}
        transition={{
          type: "tween",
          duration: 0.5,
        }}
        className="absolute top-0 left-0 md:left-0 bg-mainWhite  h-auto w-full md:w-auto z-50   "
      >
        <FilterSidebarContents />
      </motion.div>
      {/* <div
        key="white-cover-rectangle"
        className="bg-mainWhite w-10  h-full absolute top-0 left-0 z-[60] hidden md:block"
      /> */}
    </div>
  );
};

export default observer(ProductsSection);
