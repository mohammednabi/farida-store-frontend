"use client"
import Image from 'next/image'
import React from 'react'
import { Sliderify } from "react-sliderify";


const AdsSlider = () => {
  return (
      <div className='p-20 px-40'>
          <div className='w-full aspect-video bg-white  '>
              <Sliderify showNavButtons={false} showSpot={false} showTitle={false} slideDurationInSecs={10} rounded={true} activeColor='#e5087e'>
                  
                  <div className='w-full  '>
                      
                  <Image src={"/bannertwo.jpg"} width={500} height={500} quality={100} alt='' className='w-full '/>
                  </div>
                  <div className='w-full  '>
                  <Image src={"/bannertwo.jpg"} width={500} height={500} quality={100} alt='' className='w-full '/>
                  </div>
                  <div className='w-full  '>
                  <Image src={"/bannertwo.jpg"} width={500} height={500} quality={100} alt='' className='w-full '/>
              </div>
              </Sliderify>
          </div>
    </div>
  )
}

export default AdsSlider