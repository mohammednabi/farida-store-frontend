"use client"
import { Button, Divider, Input } from '@nextui-org/react'
import Link from 'next/link';
import React from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import GoogleProvider from '../../GoogleProvider';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/auth';
import { useRouter } from 'next/navigation';

const LoginForm = () => {

const router = useRouter()
    
     const [formData, setFormData] = React.useState({
       
        email: "",
        pass: "",
      
    })
const [isVisible,setIsVisible] = React.useState(false)
const [isLoading,setIsLoading] = React.useState(false)
const [errorMessage,setErrorMessage] = React.useState("")

    
  const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

   


    const loginWithEmailAndPass = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        e.preventDefault()

        if (!disabledCondition) {
            setIsLoading(true)
            signInWithEmailAndPassword(auth, formData.email, formData.pass).then((userCredential) => {
                setIsLoading(false)
                router.push("/")
            }).catch((err) => {
                console.log(err)
                setErrorMessage(err.message)
                 setIsLoading(false)
            })
        }
    }
    
   const isInvalid = React.useMemo(() => {
    if (formData.email === "") return false;

    return validateEmail(formData.email) ? false : true;
   }, [formData.email]);
    
    
     const disabledCondition = !isInvalid && formData.email.length > 0 && formData.pass.length > 5  ? false : true

    
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
                  
                  <Button
                      isLoading={isLoading}
                      isDisabled={disabledCondition}
                      type='submit'
                      radius='none'
                      className='bg-mainBlack text-mainWhite '
                  onClick={(e)=>{loginWithEmailAndPass(e)}}    
                  >
                  Submit
                  </Button>
                  <h1 className='text-red-400'>{errorMessage.slice(22,errorMessage.length-2) }</h1>
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

export default LoginForm