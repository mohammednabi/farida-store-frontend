"use client"
import { Button, Input } from '@nextui-org/react'
import Link from 'next/link';
import React from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {


    
     const [formData, setFormData] = React.useState({
       
        email: "",
        pass: "",
      
    })
const [isVisible,setIsVisible] = React.useState(false)

    
  const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

   


    
   const isInvalid = React.useMemo(() => {
    if (formData.email === "") return false;

    return validateEmail(formData.email) ? false : true;
   }, [formData.email]);
    
    
  return (
      <div className='w-full flex flex-col p-5 px-20 items-start gap-10'>
          <h1 className='text-3xl font-bold capitalize' >Login</h1>
          <form className='w-1/3 flex flex-col gap-5'>
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
                //   description="write valid email" 

                 
            
                      onChange={(e) => {
                 setFormData({...formData,email:e.target.value })
             }}   
              />
              <Input
                  value={formData.pass}
                  variant='bordered'
                
                  isRequired
                  type={!isVisible?'password':'text'}
                  label="Password"
                  labelPlacement='outside'
                  placeholder='Enter your password'
               
                  radius='none'
                  size='lg'
                //   description="write valid email" 

            
                  onChange={(e) => {
                 setFormData({...formData,pass:e.target.value })
             }}   
                  
                  endContent={<div className='cursor-pointer' onMouseDown={()=>{setIsVisible(true)}} onMouseUp={()=>{setIsVisible(false)}}>
                      {!isVisible ?<FaEye />
                      :<FaEyeSlash />}
                  </div>}
              />

              <div className='grid grid-cols-2 items-center gap-2'>
                  
              <Button type='submit' radius='none' className='bg-mainBlack text-mainWhite '>
                  Submit
                  </Button>
                  
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

          
    </div>
  )
}

export default LoginForm