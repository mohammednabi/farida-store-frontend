"use client"
import { Divider } from '@nextui-org/react'
import React, { useContext } from 'react'
import { FaGoogle } from "react-icons/fa";

import { signInWithPopup,GoogleAuthProvider } from 'firebase/auth';

import { useRouter } from 'next/navigation';
import { auth } from '@/firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/firebase/db';
import { StoreContext } from '@/contexts/StoreContext';
import { observer } from 'mobx-react-lite';


interface providerProps{
format?:"small"|"large"
}

const GoogleProvider = ({ format="large"}:providerProps) => {

  
  const router = useRouter()
  const {user} =useContext(StoreContext)
  
  const googleSign = () => {
    
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider).then((result) => {
     user.addUserToUsersCollection(result.user.uid, {
        firstName: result.user.displayName ,
       lastName: result.user.displayName,
       cart: {
         items: [],
         discount: "",
         shipping: 0,
         subTotal: 0,
         tax: 0,
         total: 0,
         totalItems:0
       }
       ,
       address: {
         city: "",
         country: "",
         postalCode: ""
         , state: "",
       street:""
       },
       orders: [
         
       ]
       ,
       paymentMethods: [],
       wishList:[]
       
     }).then(() => {
        
       router.push("/")
      })
    } ).catch((err)=>console.log(err))
}

  


  return (
    <>
    { format ==="large" ?  <div className='w-1/3'>
      

      <div
        className='cursor-pointer h-12 w-full text-lg transition-all border-mainBlack hover:border-mainBlack/50 border-2 border-solid flex items-center justify-center gap-5 p-5'
        onClick={googleSign}
        >
              
              <h1 className='capitalize '>continue with google</h1>
<FaGoogle  className='text-3xl '/>
          </div>
      </div> :
        
          <div
        className='cursor-pointer h-auto w-max text-lg transition-all border-mainBlack hover:border-mainBlack/50 border-2 border-solid flex items-center justify-center p-2 rounded-full'
        onClick={googleSign}
        >
          <FaGoogle  className='text-3xl '/>
      </div>}
        </>
  )
}

export default observer( GoogleProvider)