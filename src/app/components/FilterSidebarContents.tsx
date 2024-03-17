"use client";
import React, { useContext } from "react";

import { observer } from "mobx-react-lite";

import FilterSidebarLinks from "./FilterSidebarLinks";
import PriceSlider from "./PriceSlider";
import ColorsMenu from "./ColorsMenu";
import { IoMdClose } from "react-icons/io";
import { StoreContext } from "@/contexts/StoreContext";

const FilterSidebarContents = () => {
  const { filter } = useContext(StoreContext);

  return (
    <div className="pl-16 lg:pl-28 py-10 pr-20 flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl capitalize font-semibold">category</h1>
        <FilterSidebarLinks />
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-2xl capitalize font-semibold">price </h1>
        <PriceSlider />
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-2xl capitalize font-semibold">colors </h1>
        <ColorsMenu />
      </div>
      <div
        onClick={filter.hideWholeFilterSidebar}
        className="flex justify-center md:hidden"
      >
        <IoMdClose className="text-xl text-center" />
      </div>
    </div>
  );
};

export default observer(FilterSidebarContents);
