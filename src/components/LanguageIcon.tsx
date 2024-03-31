"use client";
import React from "react";
import Icon from "./Icon";
import { Avatar, Select, SelectItem } from "@nextui-org/react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const LanguageIcon = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
  };

  return (
    <div>
      <Select
        defaultSelectedKeys={[locale]}
        radius="sm"
        className="w-32"
        size="sm"
        aria-label="language selection"
        onChange={(e) => {
          changeLocale(e.target.value);
        }}
      >
        <SelectItem
          key="en"
          startContent={
            <Avatar
              alt="en"
              className="w-6 h-6"
              src="https://flagcdn.com/us.svg"
            />
          }
        >
          English
        </SelectItem>
        <SelectItem
          key="ar"
          startContent={
            <Avatar
              alt="arabic"
              className="w-6 h-6"
              src="https://flagcdn.com/eg.svg"
            />
          }
        >
          العربية
        </SelectItem>
      </Select>

      {/* <select
        defaultValue={locale}
        onChange={(e) => {
          changeLocale(e.target.value);
        }}
        className="cursor-pointer border-2 border-mainGray border-solid p-2"
      >
        <option value={"en"}>
          <div className="flex gap-5 items-center">
       
            <h1>English</h1>
          </div>
        </option>
        <option value={"ar"}>
          <div className="flex gap-5 items-center">
         
            <h1>العربية</h1>
          </div>
        </option>
      </select>  */}
    </div>
  );
};

export default LanguageIcon;
