"use client"
import { Divider } from '@nextui-org/react'
import React from 'react'

const Branch = () => {
  return (
      <div className='flex flex-col gap-5'>
          <h1 className='text-xl font-bold capitalize'>branch 1</h1>
          <div className='flex flex-col  capitalize text-lg'>
              <h1>cairo,egypt</h1>
              <h1>01089759963</h1>
          </div>
          <Divider className='w-1/4' />
          <div className='flex flex-col  text-mainBlack/50 capitalize text-lg'>
              <h1>sun-thurs:9:00-20:00</h1>
              <h1>fri-sat:9:00-20:00</h1>
          </div>
    </div>
  )
}

export default Branch