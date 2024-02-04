"use client"
import { Chip, Input } from '@nextui-org/react'
import { SearchIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

const SearchBox = () => {

    const pathname = usePathname()
 
const commonSearch = [{id:"1",title:"product1"},{id:"2",title:"product2"},{id:"3",title:"product3"},{id:"4",title:"product4"}]

 
    
  return (
      <div className='w-full flex flex-col gap-5 items-center justify-center'>
           <Input
     
        
        radius="sm"
   
        placeholder="Type to search..."
        endContent={
            <SearchIcon
               
            className='cursor-pointer text-mainBlack'
            />
        }
              className='w-3/4'
      />

          
          <div key={"common search"} className='flex items-center gap-5'>
              <h1 className='text-xl capitalize'>common search :</h1>

              {commonSearch.map((s) => (
              
                  <Link href={`${pathname}${pathname.includes(`?`)?`&`:`?`}q=${s.title}`} key={s.id}  >
                  <Chip variant='bordered' className='cursor-pointer text-sm' classNames={{
                      base:"hover:text-mainBlack hover:border-mainBlack transition-all"
                    }}>
                      {s.title}
              </Chip> 
                  </Link>
              ))}
             
          </div>

    </div>
  )
}

export default SearchBox