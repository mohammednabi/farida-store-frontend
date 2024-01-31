
import Image from 'next/image'

import React  from 'react'

import React from 'react'
import { Sliderify } from "react-sliderify";


const SliderProduct = () => {
 
  return (
    <div className='bg-white min-w-[30rem] h-auto flex items-center p-5 gap-10'>
      <div className='w-40 aspect-square'>

        <Image
          src='/download.png'
          alt='fridge image'
          width={100}
          height={100}
          quality={100}
        className='w-full object-cover '
        />
</div>

      <h1 className='text-3xl capitalize'>product mini</h1>

     
    </div>
  )
}

export default SliderProduct