"use client";
import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { useScreenSize } from "react-screen-size-helper";

interface breadProps {
  title?: string;
}

const Breads = ({ title }: breadProps) => {
  const { currentWidth } = useScreenSize({});

  return (
    <div>
      <Breadcrumbs size={currentWidth > 768 ? "lg" : "sm"}>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>Product</BreadcrumbItem>
        <BreadcrumbItem className="line-clamp-1">{title}</BreadcrumbItem>
      </Breadcrumbs>
    </div>
  );
};

export default Breads;
