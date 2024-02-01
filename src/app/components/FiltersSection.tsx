"use client"
import { Checkbox, Select, SelectItem } from '@nextui-org/react';
import React, { useContext } from 'react'

import { MdGridView } from "react-icons/md";
import { MdOutlineViewAgenda } from "react-icons/md";
import FilterButton from './FilterButton';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { StoreContext } from '@/contexts/StoreContext';
import { observer } from 'mobx-react-lite';


const FiltersSection = () => {

  const pathname = usePathname()
const router = useRouter()
const searchParams = useSearchParams()

  const salesOnly = searchParams.get("salesonly")


const {viewStyle} = useContext(StoreContext)
  
  return (
      <div className='px-28 py-5 flex items-center justify-between relative'>
          <div className='flex items-center gap-5'>
             <FilterButton />
              <div className='flex items-center gap-2 text-2xl p-5 py-2 cursor-pointer bg-mainGray rounded-md'>
                <Checkbox isSelected={salesOnly==="true"} color='secondary'  onChange={(e)=>{e.target.checked ? router.push(`/?salesonly=true`):router.push(`/`)}}>sales only</Checkbox>
                
              </div>
          </div>

          <div className='flex  items-center gap-5'>
        <MdGridView
          className='text-2xl cursor-pointer' 
          onClick={() => { viewStyle.displayGridView() }} />
        <MdOutlineViewAgenda
          className='text-2xl cursor-pointer'
          onClick={() => { viewStyle.displayRowView() }} />
              
              <Select   className='w-60' radius='sm' defaultSelectedKeys={["1"]} onChange={(e)=>{router.push(`${pathname}${pathname.includes("?")?"&":"?"}${e.target.value}`)}}>
                  <SelectItem key={"1"}>
                           sort by popularity
                  </SelectItem>
                   <SelectItem key={"2"}>
                           sort by rating
                  </SelectItem>
                   <SelectItem key={"3"}>
                           sort by newest
                  </SelectItem>
                   <SelectItem key={"4"}>
                           sort by : lowest price to highest
                  </SelectItem>
                   <SelectItem key={"5"}>
                           sort by : highest price to lowest 
                  </SelectItem>
              </Select>
          </div>
         
    </div>
  )
}

export default observer(FiltersSection)