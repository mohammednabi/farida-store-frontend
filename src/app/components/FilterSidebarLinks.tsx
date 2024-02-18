"use client"
import { StoreContext } from '@/contexts/StoreContext'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import React, { useContext } from 'react'

const FilterSidebarLinks = () => {

const {categories} = useContext(StoreContext)

  return (
    <div className='flex flex-col gap-3'>
      
      {categories.categories.map((cat) => (
        
        <Link key={cat.id} href={`/categories/${cat.attributes.name}`} className='filter-link'>
        
          <h1>{cat.attributes.name }</h1>
          <h1>({cat.attributes.products.data.length })</h1>
      </Link>
            ))}
 
              </div>
  )
}

export default observer(FilterSidebarLinks)