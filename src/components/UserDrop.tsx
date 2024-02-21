"use client"
import Link from 'next/link'
import React, { useContext, useEffect, useMemo, useState } from 'react'

import { motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';

import { StoreContext } from '@/contexts/StoreContext';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/auth';
import UserLoggedInUi from './UserLoggedInUi';
import GoogleProvider from '@/app/(auth)/GoogleProvider';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';


const UserDrop = () => {

    const { userDrop, user,loginForm } = useContext(StoreContext)
    const [uiCondition,setUiCondition] = useState(!Cookies.get("credentials"))


    onAuthStateChanged(auth, (currentUser) => {
    
        
     user.setUserData(currentUser)

    })

    
    // const uiCondition = ! user?.userData?.uid?.length ?? 0 > 0
   
             const router = useRouter()

    
    useEffect(() => {
        setUiCondition(!Cookies.get("credentials"))
    },[user.isLoading,loginForm.isLoading])

    return (
        <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: userDrop.isUserMenuDisplayed ? 1 : 0, opacity: userDrop.isUserMenuDisplayed ? 1 : 0 }}
            className={`origin-top flex flex-col gap-5 bg-mainWhite min-w-[20rem] capitalize w-auto h-auto ${uiCondition?"p-3 px-5":""} text-mainBlack absolute top-20 right-36 z-10 border-1 border-solid border-mainBlack border-t-0`}>
{    uiCondition ?  <div>
              
                <div className='flex justify-between items-center'>
                    
                    <h1 className='text-xl font-bold'>login</h1>
                    <div className='flex items-center'>

  <GoogleProvider format='small'/>

                    </div>
                </div>
                
          <form className='flex flex-col gap-5'>
              <div className='flex flex-col gap-2'>
                  
              <label className='input-label'>email</label>
                        <input
                            type='email'
                            className='nav-input'
                            value={loginForm.email}
                            onChange={(e) => {
                            // userDrop.setEmailValue(e.target.value)
                            loginForm.setEmail(e.target.value)
                            }}
                          onFocus={()=>{userDrop.setEmailFocus(true)}}
                        onBlur={()=>{userDrop.setEmailFocus(false)}}
                        />

   
                        

              </div>
              <div className='flex flex-col gap-2'>
                  
              <label className='input-label'>password</label>
                        <input
                            type='password'
                            className='nav-input'
                            value={loginForm.password}
                            onChange={(e) => {
                            // userDrop.setPasswordValue(e.target.value)
                            loginForm.setPassword(e.target.value)
                            }}
                        onFocus={()=>{userDrop.setPasswordFocus(true)}}
                        onBlur={()=>{userDrop.setPasswordFocus(false)}}
                        />



              </div>
              <div className='flex gap-5 items-center'>
                        <Button
                            
                            isLoading={loginForm.isLoading}

                                className='bg-mainBlack text-mainWhite p-3 px-10 rounded-lg capitalize'
                            onClick={(e) => {
                                // userDrop.login(e).finally(() => { router.push("/") })
                                loginForm.strapiLogin()
                                if (Cookies.get("credentials")) {
    router.push("/")
}
                            }}
                            
                        >submit</Button>
                  {/* <div className='text-sm flex items-center gap-1 '>
                      <input id='remeber' type='checkbox' className='cursor-pointer'/>
                      <label htmlFor='remeber' className='cursor-pointer'>remeber me</label>
                  </div> */}
                        {/* <h1 className='text-sm text-red-500'>{ userDrop.errorMessage.slice(22,userDrop.errorMessage.length-2)}</h1> */}
                        <h1 className='text-sm text-red-500'>{ loginForm.errorMessage}</h1>
              </div>
                </form>
              
          </div> : <UserLoggedInUi />}
         
   </motion.div >
  )
}

export default observer(UserDrop)