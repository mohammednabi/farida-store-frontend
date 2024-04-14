"use client";
import { Divider } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import React from "react";

interface branchProps {
  index: number;
  city_State: string;
  phone: string;
  times1: string;
  times2: string;
}

const Branch = ({ index, city_State, phone, times1, times2 }: branchProps) => {
  const t = useTranslations("contactPage");
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-sm md:text-xl font-bold capitalize">
        {t("branches.branch")}
        {index}
      </h1>
      <div className="flex flex-col  capitalize text-xs md:text-lg">
        <h1>{city_State}</h1>
        <h1>{phone}</h1>
      </div>
      <Divider className="w-1/4" />
      <div className="flex flex-col  text-mainBlack/50 capitalize text-xs md:text-lg">
        <h1>{times1}</h1>
        <h1>{times2}</h1>
      </div>
    </div>
  );
};

export default Branch;
