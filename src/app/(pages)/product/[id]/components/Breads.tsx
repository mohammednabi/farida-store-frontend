"use client"
import React from 'react'
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";

interface breadProps{
    id:string
}

const Breads = ({id}:breadProps) => {
  return (
      <div>
          <Breadcrumbs size={"lg"}>
          <BreadcrumbItem href='/'>Home</BreadcrumbItem>
          <BreadcrumbItem>Product</BreadcrumbItem>
              <BreadcrumbItem>{id}</BreadcrumbItem>
         
          </Breadcrumbs>
      </div>
  )
}

export default Breads