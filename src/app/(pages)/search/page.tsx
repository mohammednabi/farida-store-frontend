import FiltersSection from '@/app/components/FiltersSection'
import ProductsSection from '@/app/components/ProductsSection'
import React from 'react'

interface searchPageProps{
    searchParams: {
        q:string
    }
}

const SearchPage = ({searchParams}:searchPageProps) => {
  return (
      <div  >
          
          <h1 className='text-center px-20 text-4xl font-bold capitalize py-10 break-words '>
              search result :
          <q  className='pl-5'> 
                  
          {searchParams.q}
</q>
              
          </h1>
          

           <FiltersSection />
      <ProductsSection />
          

    </div>
  )
}

export default SearchPage