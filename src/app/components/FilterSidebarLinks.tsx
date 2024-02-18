"use client"
import { StoreContext } from '@/contexts/StoreContext'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import React, { useContext, useEffect } from 'react'

const FilterSidebarLinks = () => {

const {categories} = useContext(StoreContext)


  useEffect(() => {
    categories.getAllCategories()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

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