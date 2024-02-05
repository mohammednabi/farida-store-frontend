"use client"
import { StoreContext } from '@/contexts/StoreContext'
import { Button, Divider } from '@nextui-org/react'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'



const CartSidebarFooter = () => {
    
    const {cartSidebar,cart} = useContext(StoreContext)
    const router = useRouter()
    

    const goToCartShippingPage = () => {
        router.push("/cart/shipping")
    cartSidebar.hideWholeCartSidebar()
    }
    
  return (
  <div>
              
          <Divider />
          <div className='p-5 flex flex-col gap-5'>
              <div className='flex justify-between items-center capitalize text-xl'>
                  <h1>total :</h1>
                  <h1 className='text-green-500'>{cart.totalPrice.toFixed(2)} $</h1>
              </div>

              
              <Button
              radius='none'
                  className='bg-mainBlack text-mainWhite capitalize'
              onClick={goToCartShippingPage}
              >
                  complete your order
              </Button>
          </div>
          </div>
  )
}

export default observer( CartSidebarFooter)