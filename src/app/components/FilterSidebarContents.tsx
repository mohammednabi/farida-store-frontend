"use client"
import React from 'react'

import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import FilterSidebarLinks from './FilterSidebarLinks'
import PriceSlider from './PriceSlider'
import ColorsMenu from './ColorsMenu'

const FilterSidebarContents = () => {
  return (
    <div className='pl-5 py-10 pr-20 flex flex-col gap-10'>
      
      <div className='flex flex-col gap-3'>

      <h1 className='text-2xl capitalize font-semibold'>category</h1>
      <FilterSidebarLinks />
      </div>

      <div className='flex flex-col gap-3'>

      <h1 className='text-2xl capitalize font-semibold'>price </h1>
      <PriceSlider />
      </div>

          <div className='flex flex-col gap-3'>

      <h1 className='text-2xl capitalize font-semibold'>colors </h1>
      <ColorsMenu />
      </div>
      
      </div>
  )
}

export default observer (FilterSidebarContents)