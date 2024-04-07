"use client";
import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { useScreenSize } from "react-screen-size-helper";
import { useLocale, useTranslations } from "next-intl";

interface breadProps {
  title?: string;
}

const Breads = ({ title }: breadProps) => {
  const { currentWidth } = useScreenSize({});
  const t = useTranslations("productPage");
  const locale = useLocale();

  return (
    <div>
      <Breadcrumbs size={currentWidth > 768 ? "lg" : "sm"}>
        <BreadcrumbItem
          href="/"
          className="capitalize"
          classNames={{ separator: locale === "ar" && "rotate-180" }}
        >
          {t("breads.home")}
        </BreadcrumbItem>
        <BreadcrumbItem
          className="capitalize"
          classNames={{ separator: locale === "ar" && "rotate-180" }}
        >
          {t("breads.product")}
        </BreadcrumbItem>
        <BreadcrumbItem
          className="line-clamp-1"
          classNames={{ separator: locale === "ar" && "rotate-180" }}
        >
          {title}
        </BreadcrumbItem>
      </Breadcrumbs>
    </div>
  );
};

export default Breads;
