"use client";
import { Checkbox, Select, SelectItem } from "@nextui-org/react";
import React, { useContext } from "react";

import { MdGridView } from "react-icons/md";
import { MdOutlineViewAgenda } from "react-icons/md";
import FilterButton from "./FilterButton";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { StoreContext } from "@/contexts/StoreContext";
import { observer } from "mobx-react-lite";
import ActiveFilters from "./ActiveFilters";
import { useLocale, useTranslations } from "next-intl";

const FiltersSection = () => {
  const t = useTranslations("filters");
  const locale = useLocale();
  const { viewStyle } = useContext(StoreContext);

  const selections: { value: string; label: string }[] = [
    { value: "", label: t("popularity") },
    { value: "rating", label: t("rating") },
    { value: "createdAt:DESC", label: t("newest") },
    { value: "price:ASC", label: t("lowPrice") },
    { value: "price:DESC", label: t("highPrice") },
  ];

  const pageSizeSelections: { value: string; label: string }[] = [
    {
      value: "",
      label: "12",
    },
    {
      value: "16",
      label: "16",
    },
    {
      value: "20",
      label: "20",
    },
    {
      value: "24",
      label: "24",
    },
  ];

  const pathname = usePathname();
  const router = useRouter();

  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);

  const salesOnly = searchParams.get("salesonly");

  const handleSortSearch = (param: string) => {
    if (param) {
      params.set("sort", param);
    } else {
      params.delete("sort");
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handlePageSizeSearch = (param: string) => {
    if (param) {
      params.set("psize", param);
    } else {
      params.delete("psize");
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleSalesOnlySearch = (param: boolean) => {
    if (param) {
      params.set("salesonly", "true");
    } else {
      params.delete("salesonly");
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <section
      id="filters"
      className="flex flex-col gap-5 px-5 md:px-10 lg:px-20 "
      dir={locale === "en" ? "ltr" : "rtl"}
    >
      {(searchParams.has("color") ||
        searchParams.has("min_price") ||
        searchParams.has("max_price")) && <ActiveFilters />}

      <div className=" grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-[repeat(3,minmax(0,auto))] items-center  relative pb-5  md:gap-5">
        <div className="grid grid-cols-[1fr_6fr] items-center gap-3 order-3 md:order-1">
          <FilterButton />
          <div
            className={`hidden md:flex items-center justify-start gap-2 text-lg md:text-2xl ${
              locale === "en" ? "pl-1" : "pr-1"
            } py-3 cursor-pointer bg-mainGray rounded-md`}
          >
            <Checkbox
              isSelected={salesOnly === "true"}
              color="secondary"
              onChange={(e) => {
                handleSalesOnlySearch(e.target.checked);
              }}
              className="pl-5 py-3 "
            >
              {t("sales")}
            </Checkbox>
          </div>
          {/* this select input will display only on small screens */}
          <Select
            radius="sm"
            defaultSelectedKeys={[
              searchParams.get("sort") ?? selections[0].value,
            ]}
            onChange={(e) => {
              handleSortSearch(e.target.value);
            }}
            className=" md:hidden "
            classNames={{
              value: "text-xs lmob:text-sm",
            }}
            dir={locale === "en" ? "ltr" : "rtl"}
          >
            {selections.map((sel) => (
              <SelectItem
                key={sel.value}
                value={sel.value}
                className="text-[.2rem]"
                classNames={{
                  title: "text-xs lmob:text-sm",
                }}
              >
                {sel.label}
              </SelectItem>
            ))}
          </Select>
        </div>

        {/* <div className="grid md:grid-cols-[1fr_4fr] lg:grid-cols-[1fr_4fr_1.5fr]  items-center gap-5"> */}
        <div className="flex gap-5 justify-end order-1 md:order-1">
          <MdGridView
            className="text-2xl cursor-pointer"
            onClick={() => {
              viewStyle.displayGridView();
            }}
          />
          <MdOutlineViewAgenda
            className="text-2xl cursor-pointer"
            onClick={() => {
              viewStyle.displayRowView();
            }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-5 items-center order-2 md:order-1">
          <Select
            radius="sm"
            defaultSelectedKeys={[
              searchParams.get("sort") ?? selections[0].value,
            ]}
            onChange={(e) => {
              handleSortSearch(e.target.value);
            }}
            className="hidden md:block"
            // dir={locale === "en" ? "ltr" : "rtl"}
            classNames={{
              // base: `${locale === "en" ? "text-left" : "text-right"}`,
              value: `${locale === "en" ? "text-left" : "text-right "} `,
              // trigger: `${locale === "en" ? "text-left" : "text-right"}`,
              innerWrapper: `${locale === "en" ? "text-left" : "text-right"}`,
            }}
          >
            {selections.map((sel) => (
              <SelectItem
                key={sel.value}
                value={sel.value}
                classNames={{
                  base: `${locale === "en" ? "text-left" : "text-right"}`,
                }}
              >
                {sel.label}
              </SelectItem>
            ))}
          </Select>

          <Select
            radius="sm"
            defaultSelectedKeys={[
              searchParams.get("psize") ?? selections[0].value,
            ]}
            onChange={(e) => {
              handlePageSizeSearch(e.target.value);
            }}
            className="hidden lg:block"
          >
            {pageSizeSelections.map((sel) => (
              <SelectItem key={sel.value} value={sel.value}>
                {sel.label}
              </SelectItem>
            ))}
          </Select>

          {/* this checkbox diplayed only on small screens */}
          <div className="flex md:hidden items-center gap-2 text-lg md:text-2xl p-5 py-2 cursor-pointer bg-mainGray rounded-md">
            <Checkbox
              isSelected={salesOnly === "true"}
              color="secondary"
              onChange={(e) => {
                handleSalesOnlySearch(e.target.checked);
              }}
              className="p-5 py-2"
            >
              {t("sales")}
            </Checkbox>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default observer(FiltersSection);
