
import React from 'react'
import EmptyCart from './components/EmptyCart'
import ProductsTable from './components/ProductsTable'
import TotalPrice from './components/TotalPrice'
import { Divider } from '@nextui-org/react'
import CartContent from './components/CartContent'

const CartPage = () => {
  return (
      <div>
         
{/* <EmptyCart /> */}

         
         <CartContent />
       
    </div>
  )
}

export default CartPage