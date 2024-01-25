"use client"
import React from 'react'
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";

interface breadProps{
    productId:string
}

const Breads = ({productId}:breadProps) => {
  return (
      <div>
          <Breadcrumbs size={"lg"}>
          <BreadcrumbItem href='/'>Home</BreadcrumbItem>
          <BreadcrumbItem>Product</BreadcrumbItem>
              <BreadcrumbItem>{productId}</BreadcrumbItem>
         
          </Breadcrumbs>
      </div>
  )
}

export default Breads