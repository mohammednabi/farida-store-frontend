import PageTitle from '@/components/PageTitle'
import React from 'react'
import OrderForm from './components/OrderForm'

const OrderPage = () => {
  return (
      <div className='flex flex-col gap-10 justify-center items-center '>
          <PageTitle title='track order' />
          <OrderForm />
    </div>
  )
}

export default OrderPage