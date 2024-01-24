"use client"
import React, { useContext } from 'react'
import Icon from './Icon'

import { MdOutlineCancel } from "react-icons/md";
import { LiaNewspaper } from "react-icons/lia";
import { FaRegEye } from "react-icons/fa";
import { Divider } from '@nextui-org/react';
import { StoreContext } from '@/contexts/StoreContext';
import Link from 'next/link';


const SidebarContent = () => {

const {sidebar} = useContext(StoreContext)

  return ( 
      <div className='relative flex flex-col '>
          <div className='sticky top-0 flex  flex-col bg-mainWhite'>
              
          <div className=' flex justify-between items-center px-5 '>
              <h1 className='text-3xl text-mainPink uppercase font-bold'>logo</h1>
              <div className='flex items-start justify-center text-5xl' onClick={sidebar.hideWholeSidebar}>
                  <Icon icon={<MdOutlineCancel />}  />
              </div>
             
              </div>
                <Divider />
          </div>
        
          <div className='py-5 flex flex-col gap-3 capitalize px-5'>
              <Link href={"#"} className='side-link'>
                  sales items
              </Link>
               <Link href={"#"} className='side-link'>
                  best seller
              </Link>
                <Link href={"#"} className='side-link'>
                  top deals
              </Link>
                <Link href={"#"} className='side-link'>
                  daily Deals
              </Link>
              <Link href={"#"} className='side-link'>
                  daily Deals
              </Link>
              <Link href={"#"} className='side-link'>
                  daily Deals
              </Link>
              <Link href={"#"} className='side-link'>
                  daily Deals
              </Link>
              <Link href={"#"} className='side-link'>
                  daily Deals
              </Link>
              <Link href={"#"} className='side-link'>
                  daily Deals
              </Link>
              <Link href={"#"} className='side-link'>
                  daily Deals
              </Link>
              <Link href={"#"} className='side-link'>
                  daily Deals
              </Link>
              <Link href={"#"} className='side-link'>
                  daily Deals
              </Link>
              <Link href={"#"} className='side-link'>
                  daily Deals
              </Link>
              <Link href={"#"} className='side-link'>
                  daily Deals
              </Link>
              <Link href={"#"} className='side-link'>
                  daily Deals
              </Link>
              <Link href={"#"} className='side-link'>
                  daily Deals
              </Link>

          </div>
          <div className='flex flex-col '>
              <Divider />
              <div className='flex py-3 flex-col px-5 gap-2 capitalize'>
                  <div className='flex items-center text-lg gap-2 text-mainBlack/50'>
                    <LiaNewspaper />
                   <Link href={"#"} >
                 track your order
                  </Link>
                  </div>
                  <div className='flex items-center text-lg gap-2 text-mainBlack/50'>
                      
                      <FaRegEye />
                   <Link href={"#"} >
                 products recently seen
              </Link>
                  </div>
              </div>
          </div>
   </div>
  )
}

export default SidebarContent