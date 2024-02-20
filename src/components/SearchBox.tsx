"use client"
import { StoreContext } from '@/contexts/StoreContext'
import { Chip, Input, Spinner } from '@nextui-org/react'
import { SearchIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import QuickSearchMenu from './QuickSearchMenu'
import { observer } from 'mobx-react-lite'
import SearchBoxCommonSearches from './SearchBoxCommonSearches'

const SearchBox = () => {



    const {searchBox,categories} = useContext(StoreContext)

    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()
    const query = searchParams.get("q")

 
    
    const searchForResult = (query:string) => {


       
            router.push(`/search?q=${query}`)
            searchBox.hideWholeSearchBox()
        
        searchBox.setSearchInputValue("")
        

    }
    
    
    

    useEffect(() => {
    categories.getSomeCategories(4)

        
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    useEffect(() => {

        const clickingEnter =(e: KeyboardEvent) => {
           
            // console.log("this is key down event ",e)
            if (e.key === "Enter" && searchBox.searchInputValue.length>0) {
                e.preventDefault()
                
                searchForResult(searchBox.searchInputValue)
            }
        }


        if (searchBox.showSearchBox === true) {
            
            window.addEventListener("keydown", clickingEnter)
        } else {
            
             window.removeEventListener("keydown",clickingEnter) 
        }
        
        
        
        return ()=> window.removeEventListener("keydown",clickingEnter) 
         


// eslint-disable-next-line react-hooks/exhaustive-deps
},[searchBox.searchInputValue,searchBox.showSearchBox])

    
  return (
      <div className='w-full flex flex-col gap-5 items-center justify-center'>
           <Input
     
        
        radius="sm"
   value={searchBox.searchInputValue}
        placeholder={query?query:"Type to search..."}
        endContent={
    !searchBox.quickProductsLoading?      <SearchIcon
               
                className='cursor-pointer text-mainBlack'
                onClick={() => {
                    if (searchBox.searchInputValue.length > 0) { 

                        searchForResult(searchBox.searchInputValue)
                    }
                }}
            />
                    :<Spinner color='default'/>

        }
              className='w-3/4'

onChange={(e)=>{searchBox.setSearchInputValue(e.target.value)}}

            //   onValueChange={searchBox.setSearchInputValue}
      />

    
          { searchBox.quickProducts.length === 0 &&
          
          <SearchBoxCommonSearches searchForResult={searchForResult} />
          }

          

          <QuickSearchMenu />


    </div>
  )
}

export default observer(SearchBox)