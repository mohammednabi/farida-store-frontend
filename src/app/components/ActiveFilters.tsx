"use client"
import React from 'react'
import MiniActiveFilter from './MiniActiveFilter'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const ActiveFilters = () => {

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()

    const params = new URLSearchParams(searchParams)

    const colorName = searchParams.get("color")
    const min_price = searchParams.get("min_price")
    const max_price = searchParams.get("max_price")

    const deleteFilter = (filter:string) => {
        params.delete(filter)
        router.replace(`${pathname}?${params.toString()}`)
    }

  return (
      <div className='flex gap-5 items-center'>
          <h1 className='capitalize text-xl font-semibold'>active filters :</h1>
          {colorName && <MiniActiveFilter filterName='color' deleteFilter={deleteFilter} filterTitle={`color : ${colorName}`}/>}
          {min_price && <MiniActiveFilter filterName='min_price' deleteFilter={deleteFilter} filterTitle={`min price : ${min_price} $`}/>}
          {max_price && <MiniActiveFilter filterName='max_price' deleteFilter={deleteFilter} filterTitle={`max price : ${max_price} $`}/>}
    </div>
  )
}

export default ActiveFilters