"use client"
import { Checkbox, Select, SelectItem } from '@nextui-org/react';
import React, { useContext } from 'react'

import { MdGridView } from "react-icons/md";
import { MdOutlineViewAgenda } from "react-icons/md";
import FilterButton from './FilterButton';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { StoreContext } from '@/contexts/StoreContext';
import { observer } from 'mobx-react-lite';
import ActiveFilters from './ActiveFilters';


const FiltersSection = () => {

  const selections = [
    { value: "", label: "sort by popularity" },
{value:"rating",label:"sort by rating"},
{value:"createdAt:DESC",label:"sort by newest"},
    { value: "price:ASC", label: " sort by : lowest price to highest" },
{value:"price:DESC",label:"sort by : highest price to lowest "}
]

  const pathname = usePathname()
const router = useRouter()

  const searchParams = useSearchParams()
  
  const params = new URLSearchParams(searchParams)

  const salesOnly = searchParams.get("salesonly")




  const handleSortSearch = (param:string)=>{

    if (param) {
        params.set("sort",param)
    }
    else {
      params.delete("sort")
    }
    router.replace(`${pathname}?${params.toString()}`)
  }

  const handleSalesOnlySearch = (param:boolean)=>{

    if (param) {
        params.set("salesonly","true")
    }
    else {
      params.delete("salesonly")
    }
    router.replace(`${pathname}?${params.toString()}`)
  }


const {viewStyle} = useContext(StoreContext)
  
  return (
    <section className='flex flex-col gap-5 px-28 '>
     {searchParams.size > 0 && <ActiveFilters />}

      <div className=' flex items-center justify-between relative pb-5'>
          <div className='flex items-center gap-5'>
             <FilterButton />
              <div className='flex items-center gap-2 text-2xl p-5 py-2 cursor-pointer bg-mainGray rounded-md'>
                <Checkbox isSelected={salesOnly==="true"} color='secondary'  onChange={(e)=>{handleSalesOnlySearch(e.target.checked)}}>sales only</Checkbox>
                
              </div>
          </div>

          <div className='flex  items-center gap-5'>
        <MdGridView
          className='text-2xl cursor-pointer' 
          onClick={() => { viewStyle.displayGridView() }} />
        <MdOutlineViewAgenda
          className='text-2xl cursor-pointer'
          onClick={() => { viewStyle.displayRowView() }} />
              
        <Select
          className='w-60'
          radius='sm'
          defaultSelectedKeys={[searchParams.get("sort")??selections[0].value]}
          onChange={(e) => { handleSortSearch(e.target.value) }}
          

        >
          
          {selections.map((sel) => (
            <SelectItem key={sel.value} value={sel.value}>
                           {sel.label}
                  </SelectItem>
          ))}
                  
                  
              </Select>
          </div>
         
    </div>

</section>
  )
}

export default observer(FiltersSection)