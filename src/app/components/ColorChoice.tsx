"use client";
import Link from "next/link";
import React, { useContext } from "react";
import classNames from "classnames";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { StoreContext } from "@/contexts/StoreContext";

interface colorProps {
  name: string;
  hex: string;
}

const ColorChoice = ({ name, hex }: colorProps) => {
  const { filter } = useContext(StoreContext);

  const pathname = usePathname();
  const router = useRouter();

  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);

  // const salesOnly = searchParams.get("salesonly")

  const colorFilter = searchParams.get("color");

  const handleColorSearch = (param: string) => {
    if (param) {
      params.set("color", param);
    } else {
      params.delete("color");
    }
    router.replace(`${pathname}?${params.toString()}`);

    filter.hideWholeFilterSidebar();
  };

  return (
    <div
      className={`flex items-center justify-between cursor-pointer `}
      onClick={() => {
        handleColorSearch(name ?? "");
      }}
    >
      <div className="flex items-center gap-2">
        <div
          className={classNames("w-5 h-5")}
          style={{
            backgroundColor: `${hex}`,
          }}
        />
        <h1 className="text-sm md:text-xl">{name}</h1>
      </div>

      {colorFilter === name && (
        <div className="w-2 h-2 rounded-full bg-emerald-500" />
      )}
    </div>
  );
};

export default ColorChoice;
