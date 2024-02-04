"use client"
import React, { useContext } from 'react'
import { CgClose } from 'react-icons/cg'
import SearchBox from './SearchBox'
import { observer } from 'mobx-react-lite'
import { StoreContext } from '@/contexts/StoreContext'
import { AnimatePresence ,motion} from 'framer-motion'

const SearchMenu = () => {

    const { searchBox } = useContext(StoreContext)
    

    return (
      <div>


        <AnimatePresence mode='wait'>
              
            {searchBox.showBackdrop &&  <motion.div
              initial={{ opacity:0 }}
                  animate={{ opacity: 1}}
                  exit={{opacity:0}}
              className='backdrop'
             onClick={searchBox.hideWholeSearchBox}/>
              
         
              }

         
          </AnimatePresence>
           <motion.div
              initial={{ y: -1000 }}
                  animate={{ y: searchBox.showSearchBox?0:-1000}}
              exit={{y:-1000}}
                  transition={{
                      type: 'tween',
                      duration:.5
                }}
            className='bg-mainWhite fixed top-0 left-0 w-full h-[50vh] text-mainBlack p-5 z-[60]'
            >
                        
 
         
          <div className='cursor-pointer'>
              <CgClose  className='text-2xl' onClick={searchBox.hideWholeSearchBox}/>
          </div>
          <div className='flex flex-col gap-14 justify-center items-center'>
              <h1 className='text-6xl capitalize font-bold'>search products</h1>
              <div className='w-full'>
                  
              <SearchBox />
              </div>
                </div>


          

   


            </motion.div>
        

            
            
      </div>
  )
}

export default observer( SearchMenu)