"use client";
import React, { useContext } from "react";

import { observer } from "mobx-react-lite";

import FilterSidebarLinks from "./FilterSidebarLinks";
import PriceSlider from "./PriceSlider";
import ColorsMenu from "./ColorsMenu";
import { IoMdClose } from "react-icons/io";
import { StoreContext } from "@/contexts/StoreContext";
import { useLocale, useTranslations } from "next-intl";

const FilterSidebarContents = () => {
  const { filter } = useContext(StoreContext);
  const locale = useLocale();
  const t = useTranslations("filters");

  return (
    <div
      className="px-8 lmob:pl-16 lg:pl-28 py-10 lmob:pr-20 flex flex-col gap-10 border-solid border-mainGray border-4 lg:border-0"
      dir={locale === "en" ? "ltr" : "rtl"}
    >
      <div className="flex flex-col gap-3">
        <h1 className="text-lg md:text-2xl capitalize font-semibold">
          {t("category")}
        </h1>
        <FilterSidebarLinks />
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-lg md:text-2xl capitalize font-semibold">
          {t("price")}
        </h1>
        <PriceSlider />
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-lg md:text-2xl capitalize font-semibold">
          {t("colors")}
        </h1>
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
