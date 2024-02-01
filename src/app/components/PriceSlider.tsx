"use client"
import { Button, Slider, SliderValue } from '@nextui-org/react';
import React from 'react'


const PriceSlider = () => {
      const [value, setValue] = React.useState<SliderValue>([0, 2000]);
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
                  className='bg-mainBlack p-2 capitalize text-mainWhite'>
                  Select
              </Button>
          </div>
    </div>
  )
}

export default PriceSlider