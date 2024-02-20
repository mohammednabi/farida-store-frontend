"use client"

import { StoreContext } from '@/contexts/StoreContext'
import { Chip } from '@nextui-org/react'
import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'

interface commonSearchProps { 
    
    searchForResult:(param:string)=>void

}





const SearchBoxCommonSearches = ({searchForResult}:commonSearchProps) => {

const {categories} = useContext(StoreContext)

  return (
            <div key={"common search"} className='flex items-center gap-5'>
              <h1 className='text-xl capitalize'>common search :</h1>

              {categories.someCategories.map((cat) => (
              
                  <div key={cat.id} onClick={() => {
                      
                      searchForResult(cat.attributes.name)
                  } 
                  } >
                  <Chip variant='bordered' className='cursor-pointer text-sm' classNames={{
                      base:"hover:text-mainBlack hover:border-mainBlack transition-all"
                    }}>
                          {cat.attributes.name}
              </Chip> 
                  </div>
              ))}
             
          </div>
  )
}

export default observer(SearchBoxCommonSearches)