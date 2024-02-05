"use client"
import React, { useContext } from 'react'
import CartDropProduct from './CartDropProduct'
import { StoreContext } from '@/contexts/StoreContext'
import { Divider } from '@nextui-org/react'
import { observer } from 'mobx-react-lite'


const CartDropProductsMenu = () => {

    const {cart} = useContext(StoreContext)

  return (
      <div className='w-full flex flex-col gap-3 h-[57vh] overflow-auto'>
          {cart.cartProducts.map((product) => (
              <div key={product.id} className='flex flex-col gap-3'>
                  <CartDropProduct product={product}/>
                  <Divider />
                  
              </div>
          ))
              
          }
          
         
    </div>
  )
}

export default observer(CartDropProductsMenu)