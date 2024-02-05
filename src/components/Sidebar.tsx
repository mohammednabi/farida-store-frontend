"use client"

import { StoreContext } from '@/contexts/StoreContext'
import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { AnimatePresence, motion } from 'framer-motion'
import SidebarContent from './SidebarContent'

const Sidebar = () => {

    const {sidebar}  =  useContext(StoreContext)

    


  return (
      <div className='relative w-full h-auto'>
          <AnimatePresence mode='wait'>
              
            {sidebar.showBackdrop &&  <motion.div
              initial={{ opacity:0 }}
                  animate={{ opacity: 1}}
                  exit={{opacity:0}}
              className='backdrop z-[90]'
              onClick={sidebar.hideWholeSidebar}/>}

          
         
          </AnimatePresence>
           <motion.div
              initial={{ x: -1000 }}
                  animate={{ x: sidebar.showSideBar?0:-1000}}
              exit={{x:-1000}}
                  transition={{
                      type: 'tween',
                      duration:.5
}}
                  
              className='bg-white h-screen w-[20rem] fixed top-0 left-0 z-[100] overflow-auto '>
             <SidebarContent />
          </motion.div>
   </div>
  )
}

export default observer(Sidebar)