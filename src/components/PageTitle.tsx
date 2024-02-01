"use client"
import React from 'react'
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

interface pageTitleProps {
  title:string
}

const PageTitle = ({title}:pageTitleProps) => {
  return (
      <div className='pt-5  flex flex-col justify-center items-center gap-5'>
           <Breadcrumbs >
      <BreadcrumbItem href='/'>Home</BreadcrumbItem>
        <BreadcrumbItem className='capitalize'>{title }</BreadcrumbItem>
     
    </Breadcrumbs>
          <h1 className='text-center text-5xl font-bold capitalize'>
              {title}
          </h1>
    </div>
  )
}

export default PageTitle