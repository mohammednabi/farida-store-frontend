"use client"

import React from 'react'
import { Sliderify } from "react-sliderify";
import {Image} from "@nextui-org/react";

const AdsSlider = () => {
  return (
      <div className='p-20 px-40'>
          <div className='w-full aspect-video bg-white  '>
        <Sliderify
          showNavDots={true}
          showNavButtons={false}
          showSpot={true}
          showTitle={false}
          slideDurationInSecs={10}
          rounded={true}
          activeColor='#e5087e'
        className='text-white'
        >
                  
                   <div className='w-full  h-full'>
                  <Image isZoomed isBlurred  src={"/bannertwo.jpg"}   alt='' className='w-full '/>
                  </div>
                  <div className='w-full  h-full'>
                  <Image isZoomed isBlurred  src={"/bannertwo.jpg"}   alt='' className='w-full '/>
                  </div>
                  <div className='w-full  h-full'>
                  <Image isZoomed isBlurred  src={"/bannertwo.jpg"}   alt='' className='w-full '/>
                  </div>
              </Sliderify>
          </div>
    </div>
  )
}

export default AdsSlider