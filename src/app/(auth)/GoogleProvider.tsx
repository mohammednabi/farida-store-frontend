"use client"
import { Divider } from '@nextui-org/react'
import React from 'react'
import { FaGoogle } from "react-icons/fa";

import { signInWithPopup,GoogleAuthProvider } from 'firebase/auth';

import { useRouter } from 'next/navigation';
import { auth } from '@/firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/firebase/db';



const GoogleProvider = () => {

  
const router = useRouter()
  
  const googleSign = () => {
    
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider).then((result) => {
      addUserToUsersCollection(result.user.uid, {
        firstName: result.user.displayName,
        lastName:result.user.displayName
      })
      router.push("/")
    } ).catch((err)=>console.log(err))
}

  
   const addUserToUsersCollection = (userId:string,data: { firstName: string | null; lastName?: string | null; }) => {

        const docRef = doc(db,"users",userId)

        return setDoc(docRef, {
            ...data
        })
    }

  return (
      <div className='w-1/3'>
      

      <div
        className='cursor-pointer h-12 w-full text-lg transition-all border-mainBlack hover:border-mainBlack/50 border-2 border-solid flex items-center justify-center gap-5 p-5'
      onClick={googleSign}
      >
              
              <h1 className='capitalize '>continue with google</h1>
<FaGoogle  className='text-3xl '/>
          </div>
    </div>
  )
}

export default GoogleProvider