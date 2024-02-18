"use client"
import { StoreContext } from '@/contexts/StoreContext';
import { Button, Slider, SliderValue } from '@nextui-org/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useContext, useEffect } from 'react'


const PriceSlider = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const min_price = searchParams.get("min_price")
  const max_price = searchParams.get("max_price")
  const [value, setValue] = React.useState<SliderValue>([min_price ? Number(min_price) : 0, max_price ? Number(max_price) : 2000]);
  const {filter} = useContext(StoreContext)
  


 
  
  const params = new URLSearchParams(searchParams)

  // const salesOnly = searchParams.get("salesonly")

  




  const handlePriceSearch = (min:string,max:string)=>{

    if (min && max) {
        params.set("min_price",min)
        params.set("max_price",max)
    }
    else {
      params.delete("min_price")
      params.delete("max_price")
    }
    router.replace(`${pathname}?${params.toString()}`)

   
  }
 
  const filterByPriceRange = () => {
    if ( typeof value === 'object') {
      
      // router.push(`${pathname}?min_price=${value[0] }&max_price=${value[1]}`)
      handlePriceSearch(`${value[0]}`.toString() ?? "", `${value[1]}`??"")
    }
    filter.hideWholeFilterSidebar()
  }
  
  
  return (
    <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center">
      <Slider 
        label="Select a  price"
              formatOptions={{ style: "currency", currency: "USD" }}
              size='sm'
              color='foreground'
        step={10}
        maxValue={2000}
        minValue={0}
        
        value={value} 
       onChange={setValue}
        
        className="max-w-md"
          />
          <div className='flex items-center w-full justify-between'>
              
      <p className="text-default-500 font-medium text-small">
        Price: {Array.isArray(value) && value.map((b) => `$${b}`).join(" – ")}
              </p>
              <Button
                  radius='sm'
          className='bg-mainBlack p-2 capitalize text-mainWhite'
        onClick={filterByPriceRange}
        >
                  Select
              </Button>
          </div>
    </div>
  )
}

export default PriceSlider