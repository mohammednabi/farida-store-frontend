"use client"
import { Divider, Input } from '@nextui-org/react'
import React from 'react'
import ShippingForm from './ShippingForm'
import TotalPrice from '../../components/TotalPrice'
import ShippingOrderAndPrice from './ShippingOrderAndPrice'

const ShippingContent = () => {
    return (
      <div className='grid grid-cols-[3fr_auto_1fr] px-32 gap-5'>
            <ShippingForm />
            <Divider orientation='vertical' />
          <ShippingOrderAndPrice />
      
      </div>
  )
}

export default ShippingContent