"use client";
import React, { useContext, useEffect } from "react";
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
        initial={{ x: -1000 }}
        animate={{ x: filter.showFilterSideBar ? 0 : -1000 }}
        exit={{ x: -1000 }}
        transition={{
          type: "tween",
          duration: 0.5,
        }}
        className="absolute top-0 left-28 bg-mainWhite  h-auto w-auto z-50   "
      >
        <FilterSidebarContents />
      </motion.div>
      <div
        key="white-cover-rectangle"
        className="bg-mainWhite w-28 h-full absolute top-0 left-0 z-[60] "
      />
    </div>
  );
};

export default observer(ProductsSection);
