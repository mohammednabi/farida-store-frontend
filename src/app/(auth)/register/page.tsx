import React from 'react'

import RegisterForm from './components/RegisterForm'
import PageTitle from '@/components/PageTitle'

const RegisterPage = () => {
  return (
       <div className='w-full h-auto'>
    
      <PageTitle title='register'/>
          <RegisterForm />
   </div>
  )
}

export default RegisterPage