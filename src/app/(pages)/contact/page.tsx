import PageTitle from '@/components/PageTitle'
import React from 'react'
import Map from './components/Map'
import Welcoming from './components/Welcoming'
import ComplaintForm from './components/ComplaintForm'


const page = () => {

   


  return (
      <div className='w-full flex flex-col gap-20 justify-center items-center '>
          <div className='flex flex-col gap-10 w-full'>
              
          <PageTitle title='contact us' />
          <Map />
          </div>
          <div className='flex flex-col gap-10 w-full'>
              
          <Welcoming />
          <ComplaintForm />
          </div>
    </div>
  )
}

export default page