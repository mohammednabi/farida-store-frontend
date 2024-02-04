"use client"
import { Button, Input, Textarea } from '@nextui-org/react'
import React from 'react'

const ComplaintForm = () => {
  return (
      <div className='w-full px-28 flex flex-col gap-10'>
          <div className='flex flex-col gap-3'>
              
          <h1 className='text-4xl font-bold capitalize'>Do you have a complaint or inquiry?</h1>
          <h1 className='text-xl text-mainBlack/50 capitalize'>Please do not hesitate to call or write to us to help you</h1>
          </div>

          <form className='w-full flex flex-col gap-5'>
              <Input
                  label="Name"
                  placeholder='Your name'
                  labelPlacement='outside'
                  variant='bordered'
                  radius='none'
                  size='lg'
                  className='w-full '
              /> 
              <Input
                  label="Email"
                  placeholder='Your email'
                  labelPlacement='outside'
                  variant='bordered'
                  radius='none'
                  size='lg'
                  className='w-full '
              /> 
              <Textarea
                  minRows={20}
                 
              label="Message"
                  placeholder='Your message'
                  labelPlacement='outside'
                  variant='bordered'
                  radius='none'
                  size='lg'
                  className='w-full '
              
              />
              <Button
             radius='none'
                  size='lg'
                  className='bg-mainBlack text-mainWhite text-xl'>
                  Send
              </Button>
          </form>

    </div>
  )
}

export default ComplaintForm