import FiltersSection from '@/app/components/FiltersSection'
import ProductsSection from '@/app/components/ProductsSection'
import PageTitle from '@/components/PageTitle'
import React from 'react'
import MiniAdsSection from './components/MiniAdsSection'

interface categoriesPageProps {
params:{name:string}
}


const CategoriesPage = ({params}:categoriesPageProps) => {
  return (
     <main>
      <PageTitle title={`${params.name.replaceAll("%20"," ")}`} />
      <MiniAdsSection />
    <FiltersSection />
          
      <ProductsSection />


    </main>
  )
}

export default CategoriesPage