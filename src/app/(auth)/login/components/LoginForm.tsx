"use client"
import { Button, Divider, Input } from '@nextui-org/react'
import Link from 'next/link';
import React, { useContext, useEffect } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import GoogleProvider from '../../GoogleProvider';
import { useRouter } from 'next/navigation';
import { StoreContext } from '@/contexts/StoreContext';
import { observer } from 'mobx-react-lite';
import Cookies from 'js-cookie';

const LoginForm = () => {

const router = useRouter()
    
    const {loginForm} = useContext(StoreContext) 
   
    const loginWithEmailAndPass = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        e.preventDefault()

        // loginForm.firebaseLoginWithEmailAndPass()?.then(() => {
        //     console.log("3")
        //     loginForm.setIsloading(false)
        //     router.push("/")
        // }).catch((err) => {
        //     console.log(err)
        //     console.log("4")
        //     loginForm.setIsloading(false)
        //     loginForm.setErrMessage(err.message)
        // })

        loginForm.strapiLogin()

    }
    

    useEffect(() => {
        if (Cookies.get("credentials")) {
            router.push("/")   
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[loginForm.isLoading])
    
    
    
    
  return (
      <div className='w-full flex flex-col p-5 px-20 items-start gap-10'>
          <h1 className='text-3xl font-bold capitalize' >Login</h1>
          <form className='w-1/3 flex flex-col gap-5'>
              <Input
                  value={loginForm.email}
                  variant='bordered'
                  isInvalid={!loginForm.isValidEmail}
                  color={!loginForm.isValidEmail?"danger":"success"}
                  isRequired
                  type='email'
                  label="Email"
                  labelPlacement='outside'
                  placeholder='Enter your email'
                  errorMessage={!loginForm.isValidEmail&&"Not valid email"}
                  radius='none'
                  size='lg'
                  onChange={(e) => {
                      loginForm.setEmail(e.target.value)
                  loginForm.validateEmail()
                  }}   
              />
              <Input
                  value={loginForm.password}
                  variant='bordered'
                
                  isRequired
                  type={!loginForm.isPasswordVisible?'password':'text'}
                  label="Password"
                  labelPlacement='outside'
                  placeholder='Enter your password'
               
                  radius='none'
                  size='lg'
                //   description="write valid email" 

            
             onChange={(e) => {loginForm.setPassword(e.target.value)}}     
                  
                  endContent={<div className='cursor-pointer' onMouseDown={()=>{loginForm.setIsPasswordVisible(true)}} onMouseUp={()=>{loginForm.setIsPasswordVisible(false)}}>
                      {!loginForm.isPasswordVisible ?<FaEye />
                      :<FaEyeSlash />}
                  </div>}
              />

              <div className='grid grid-cols-2 items-center gap-2'>
                  
                  <Button
                      isLoading={loginForm.isLoading}
                      isDisabled={!(loginForm.email.length>0 && loginForm.password.length > 5 && loginForm.isValidEmail)}
                      type='submit'
                      radius='none'
                      className='bg-mainBlack text-mainWhite '
                  onClick={(e)=>{loginWithEmailAndPass(e)}}    
                  >
                  Submit
                  </Button>
                  {/* <h1 className='text-red-400'>{loginForm.errorMessage.slice(22,loginForm.errorMessage.length-2) }</h1> */}
                  <h1 className='text-red-400'>{loginForm.errorMessage }</h1>
              </div>
              <div className='flex items-center gap-2'>
                  
              <h1 className='text-mainBlack/50 underline'>
                      Don<span>&apos;</span>t have an account ?
                  </h1>
                 <Link href={"/register"} className='text-blue-500'>
                      Register now
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

export default observer(LoginForm)