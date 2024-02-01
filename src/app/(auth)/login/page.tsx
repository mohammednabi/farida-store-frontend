import React from 'react'
import PageTitle from './components/PageTitle'
import LoginForm from './components/LoginForm'
import { app } from '@/firebase/config'
import GoogleProvider from '../GoogleProvider'

const LoginPage = () => {



  return (
      <div className='w-full h-auto'>
          <PageTitle />
      <LoginForm />
 
   </div>
  )
}

export default LoginPage