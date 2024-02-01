"use client"
import { StoreContext } from '@/contexts/StoreContext';
import { Button } from '@nextui-org/react'
import React, { useContext } from 'react'
import { FaCartArrowDown } from "react-icons/fa6";
import { observer } from 'mobx-react-lite';

const CartFloatingButton = () => {

    const {cartSidebar} = useContext(StoreContext) 

  return (
      <div className='fixed bottom-20 right-5 z-50 w-max '>
          
          <Button
              radius='full'
              isIconOnly
              className='bg-mainBlack  w-16 h-16 '
              onClick={()=>{cartSidebar.displayWholeCartSidebar()}}
          >
              <FaCartArrowDown className='text-mainWhite text-2xl'/>
          </Button>

  

                  </div>
    
  )
}

export default observer (CartFloatingButton)