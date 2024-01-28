"use client"
import { Button, Divider, Input } from '@nextui-org/react'
import Link from 'next/link';
import React, { useContext } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import GoogleProvider from '../../GoogleProvider';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/auth';
import { useRouter } from 'next/navigation';
import {doc,setDoc} from 'firebase/firestore'
import { db } from '@/firebase/db';
import { StoreContext } from '@/contexts/StoreContext';
import { observer } from 'mobx-react-lite';

const RegisterForm = () => {

   

    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName:"",
        email: "",
        pass: "",
        confirmPass:""
    })
    const [isVisible, setIsVisible] = React.useState({
        pass: false,
        confirmPass:false
})

const [errorMessage,setErrorMessage] = React.useState("")
const [isLoading,setIsLoading] = React.useState(false)
    
    const {user} = useContext(StoreContext)
    
    const router = useRouter()
    
  const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

   
    const validatePass = (value: string) => value.match(/^(?=.*[A-Z])(?=.*\d).{6,}$/);
    

    const registerWithEmailAndPass = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    e.preventDefault()
    if (formData.email.length>0 && formData.pass.length>0 && !isInvalid && !isInvalidPass) {
            setIsLoading(true)
             createUserWithEmailAndPassword(auth, formData.email, formData.pass).then((userCredential) => {
                //  const user = userCredential.user
                user.addUserToUsersCollection(userCredential.user.uid, {
        firstName: formData.firstName ,
       lastName: formData.lastName,
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
                    setIsLoading(false)
                    router.push("/")
                     
                 })
        }).catch((err) => {
                  setIsLoading(false)
            console.log(err)
            setErrorMessage(err.message)
        })
        }

       
    }

  const isInvalid = React.useMemo(() => {
    if (formData.email === "") return false;

    return validateEmail(formData.email) ? false : true;
  }, [formData.email]);
    
      const isInvalidPass = React.useMemo(() => {
    if (formData.pass === "") return false;

    return validatePass(formData.pass) ? false : true;
  }, [formData.pass]);
    
    
    
    const disabledCondition = !isInvalid && !isInvalidPass && formData.email.length > 0 && formData.pass.length > 0 && formData.confirmPass.length > 0 && formData.firstName.length > 0 && formData.lastName.length > 0 && formData.confirmPass === formData.pass ? false : true
    

  return (
    <div className='w-full flex flex-col p-5 px-20 items-start gap-10'>
          <h1 className='text-3xl font-bold capitalize' >Register</h1>
          <form  className='w-1/3 flex flex-col gap-5'>


              <div className='grid grid-cols-2 gap-2'>
                 
                   <Input
                  value={formData.firstName}
                  variant='bordered'
                 
                 
                  isRequired
                  type='text'
                  label="First Name"
                  labelPlacement='outside'
                  placeholder=' First  '
           
                  radius='none'
                  size='lg'
               

                 
                      onChange={(e) => {
                 setFormData({...formData,firstName:e.target.value })
             }}   
                  />


                     <Input
                  value={formData.lastName}
                  variant='bordered'
                  type='text'
                  label="Last Name"
                  labelPlacement='outside'
                  placeholder=' Last '
                  radius='none'
                  size='lg'
                isRequired

                 
             onChange={(e) => {
                 setFormData({...formData,lastName:e.target.value })
             }}   
                  />
              </div>

              <Input
                  value={formData.email}
                  variant='bordered'
                  isInvalid={isInvalid}
                  color={isInvalid?"danger":"success"}
                  isRequired
                  type='email'
                  label="Email"
                  labelPlacement='outside'
                  placeholder='Enter your email'
                  errorMessage={isInvalid&&"Not valid email"}
                  radius='none'
                  size='lg'
               

                 
             onChange={(e) => {
                 setFormData({...formData,email:e.target.value })
             }}  
              />
              <Input
                  value={formData.pass}
                  variant='bordered'
                
                  isRequired
                  type={!isVisible.pass?'password':'text'}
                  label="Password"
                  labelPlacement='outside'
                  placeholder='Enter your password'
               
                  radius='none'
                  size='lg'
                  description={isInvalidPass?"Password must have  (1-6) letters includes at least one number and one uppercase letter  ":"" }

            
                 onChange={(e) => {
                 setFormData({...formData,pass:e.target.value })
             }}    
                  
                  endContent={<div className='cursor-pointer' onMouseDown={()=>{setIsVisible({...isVisible,pass:true})}} onMouseUp={()=>{setIsVisible({...isVisible,pass:false})}}>
                      {!isVisible.pass ?<FaEye />
                      :<FaEyeSlash />}
                  </div>}
              />

               <Input
                  value={formData.confirmPass}
                  variant='bordered'
                
                  isRequired
                  type={!isVisible.confirmPass?'password':'text'}
                  label="Confirm Password"
                  labelPlacement='outside'
                  placeholder='Confirm your password'
               
                  radius='none'
                  size='lg'
               
                  color={formData.confirmPass !== formData.pass ?"danger":"success"}
errorMessage={formData.confirmPass !== formData.pass ?"Not the same password":""}
            
                 onChange={(e) => {
                 setFormData({...formData,confirmPass:e.target.value })
             }}  
                  
                  endContent={<div className='cursor-pointer' onMouseDown={()=>{setIsVisible({...isVisible,confirmPass:true})}} onMouseUp={()=>{setIsVisible({...isVisible,confirmPass:false})}}>
                      {!isVisible.confirmPass ?<FaEye />
                      :<FaEyeSlash />}
                  </div>}
              />

              <div className='grid grid-cols-2 items-center gap-2'>
                  
                  <Button isLoading={isLoading} isDisabled={disabledCondition}
                      type='submit' radius='none' className={`${disabledCondition?"bg-stone-400":"bg-mainBlack"} text-mainWhite `}
                      
                      onClick={(e) => {
                      registerWithEmailAndPass(e)
              }}>
                  Submit
                  </Button>
                  <h1 className='text-red-400'>{errorMessage.slice(22,errorMessage.length-2) }</h1>
              </div>
              <div className='flex items-center gap-2'>
                  
              <h1 className='text-mainBlack/50 underline'>
                      Already have an account ?
                  </h1>
                 <Link href={"/login"} className='text-blue-500'>
                      login
                  </Link>
              </div>
</form>

            <div className='w-1/3 grid grid-cols-[1fr_auto_1fr] justify-between items-center'>
              
              <Divider  />
              <h1 className='text-lg capitalize px-5'>or</h1>
              <Divider />
          </div>
          <GoogleProvider />

    </div>
  )
}

export default observer( RegisterForm)