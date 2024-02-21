"use client"
import { StoreContext } from '@/contexts/StoreContext'
import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Button, Chip, Divider, User } from '@nextui-org/react'
import { IoMdLogOut } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link'
import { RiUserSettingsLine } from "react-icons/ri";
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase/auth'
import { useRouter } from 'next/navigation'


const UserLoggedInUi = () => {
    const { user } = useContext(StoreContext)
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    // const logout = () => {
    //     setIsLoading(true)
    //     signOut(auth).then(() => {
    //         setIsLoading(false)
    //     router.push("/login")
    //     }).catch((err) => {
    //         setIsLoading(false)
    //         console.log(err)
    //     })
    // }
    


    const logout = () => {
        user.isLoading = true
        user.userLogout().then(() => {
            user.isLoading =false
        })
        router.push("/")
    }
    


  return (
      <div className='m-w-[20rem] w-auto h-auto flex flex-col justify-start items-center py-5 '>
          <div className='flex flex-col gap-5 w-full h-full '>
              
              <Link href={"/user"} className='flex justify-center items-center'>
          <User
              name={user.userData.displayName}
              description={user.userData.email }
              avatarProps={{
                  src:user.userData.photoURL ?? undefined
                  }}
                  className='px-3'
                  />
                  </Link>
              <Divider />
          <Link href={"#"} className='flex items-center justify-between gap-2 px-3'>
              <div className='flex gap-2 items-center '>
                  
              <IoBagOutline />
              <h1>your orders</h1>
                  </div>
                  <div className='flex items-center gap-5'>
                      
                      <Chip classNames={{
                          base:"bg-mainBlack text-mainWhite"
                      }}>{user.userData.orders?.length }</Chip>
              <FaArrowRight  className='text-sm'/>
                  </div>

              </Link>
                  <Link href={"#"} className='flex items-center justify-between gap-2 px-3'>
              <div className='flex gap-2 items-center'>
                  
              <RiUserSettingsLine />
              <h1>profile settings</h1>
                  </div>
                  <div className='flex items-center gap-5'>
                      
                    
              <FaArrowRight  className='text-sm'/>
                  </div>

              </Link>
             
              <div>
                  
                  <Divider />
              <div className='flex pt-2 px-5 justify-center items-center text-lg bg-transparent '>
          <Button
              
              
            //   endContent={
                  
            //       <IoMdLogOut className='text-red-600'/>
                  
            //     }
                          radius='sm'
                          isLoading={user.isLoading}
                          className='text-lg bg-red-600 text-mainWhite w-full'
                          onClick={logout}
                >
              log out
          </Button>
                  </div>
              </div>

       
          </div>

    </div>
  )
}

export default observer( UserLoggedInUi)