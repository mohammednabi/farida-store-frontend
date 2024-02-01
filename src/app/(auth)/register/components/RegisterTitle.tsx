"use client"
import React from 'react'
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";

const RegisterTitle = () => {
  return (
   <div className='pt-5  flex flex-col justify-center items-center gap-5'>
           <Breadcrumbs >
      <BreadcrumbItem href='/'>Home</BreadcrumbItem>
      <BreadcrumbItem>Register</BreadcrumbItem>
     
    </Breadcrumbs>
          <h1 className='text-center text-5xl font-bold'>
              Register
          </h1>
    </div>
  )
}

export default RegisterTitle