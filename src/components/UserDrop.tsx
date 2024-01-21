"use client"
import Link from 'next/link'
import React, { useContext } from 'react'
import { UserDropContext } from '@/contexts/UserDropStoreContext';
import { motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';

const UserDrop = () => {

 const userDrop = useContext(UserDropContext)
  return (
     <motion.div 
      initial = {{scaleY:0,opacity:0}}
      animate={{scaleY:userDrop.isUserMenuDisplayed?1:0,opacity:userDrop.isUserMenuDisplayed?1:0}} 
          className='origin-top flex flex-col gap-5 bg-mainGray min-w-[20rem] capitalize w-auto h-auto p-3 px-5 text-mainBlack absolute top-20 right-36 z-10'>
         <h1 className='text-xl font-bold'>login</h1>

          <form className='flex flex-col gap-5'>
              <div className='flex flex-col gap-2'>
                  
              <label className='input-label'>username or email</label>
              <input type='email' className='nav-input'/>
              </div>
              <div className='flex flex-col gap-2'>
                  
              <label className='input-label'>password</label>
              <input type='password' className='nav-input'/>
              </div>
              <div className='flex justify-between items-center'>
                  <button className='bg-mainBlack text-mainWhite p-3 px-10 rounded-lg'>login</button>
                  <div className='text-sm flex items-center gap-1 '>
                      <input id='remeber' type='checkbox' className='cursor-pointer'/>
                      <label htmlFor='remeber' className='cursor-pointer'>remeber me</label>
                  </div>
              </div>
          </form>
         
   </motion.div >
  )
}

export default observer(UserDrop)