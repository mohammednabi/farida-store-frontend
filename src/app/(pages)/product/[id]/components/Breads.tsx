"use client"
import React from 'react'
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";

interface breadProps{
    
    title?:string
}

const Breads = ({title}:breadProps) => {
  return (
      <div>
          <Breadcrumbs size={"lg"}>
          <BreadcrumbItem href='/'>Home</BreadcrumbItem>
          <BreadcrumbItem>Product</BreadcrumbItem>
              <BreadcrumbItem>{title}</BreadcrumbItem>
         
          </Breadcrumbs>
      </div>
  )
}

export default Breads