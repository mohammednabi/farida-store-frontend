"use client"
import React, { useContext, useEffect } from 'react'
import SliderProduct from '../../components/SliderProduct'
import { StoreContext } from '@/contexts/StoreContext'
import { observer } from 'mobx-react-lite'


const ProductsSlider = () => {

const {categories} = useContext(StoreContext)

  useEffect(() => {
    categories.getAllCategories()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  
  return (
    <div className='w-auto h-auto overflow-auto flex  gap-10 pb-5'>
      
      {categories.categories.map((cat) => (
        
         <SliderProduct title={cat.attributes.name} img={cat.attributes.thumbnail.data.attributes.url} key={cat.id} />
      ))}
        


    
    </div>
  )
}

export default observer(ProductsSlider)