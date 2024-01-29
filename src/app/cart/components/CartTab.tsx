"use client"
import { Chip } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

interface CartTabProps { 
    step?: number
    targetLink: string
    title?: string
    description?: string
    opacity?:"opacity-50"|"opacity-100"
}

const CartTab = ({step,title,description,targetLink,opacity}:CartTabProps) => {
    return (
      <Link href={targetLink} >
            
      <div className={`flex gap-3 items-center mt-10 ${opacity}`}>
          <Chip variant='faded'
          
          classNames={{
              base:"bg-transparent text-xl text-mainBlack border-mainBlack border-1 border-solid"
            }} size='lg'>
              {step}
          </Chip>

          <Link href={targetLink} className='flex flex-col '>
              <h1 className='text-xl text-mainBlack capitalize'>{title }</h1>
              <h1 className='text-lg text-mainBlack/50 '>{description}</h1>
          </Link>
      
      </div>
              </Link>
  )
}

export default CartTab