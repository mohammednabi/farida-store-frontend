"use client"
import { StoreContext } from '@/contexts/StoreContext';
import { Button } from '@nextui-org/react'
import React, { useContext } from 'react'
import { FaCartArrowDown } from "react-icons/fa6";
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import Icon from './Icon';

const CartFloatingButton = () => {

    const {cartSidebar,cart} = useContext(StoreContext) 

  return (
      <motion.div
          initial={{ x: 1000 }}
          animate={{x:cartSidebar.showCartSideBar?1000: 0}}
          transition={{
              duration:1
          }}

          className='fixed bottom-20 right-5 z-[100] w-max '>
          
          <div
             
              className='bg-mainBlack cursor-pointer  w-16 h-16 relative rounded-full flex items-center justify-center transition-all hover:bg-mainBlack/75'
              onClick={() => { cartSidebar.displayWholeCartSidebar() }}
         
          >
             
             <Icon icon={ <FaCartArrowDown className='text-mainWhite text-2xl' />} showPop  count={cart.productsCount} />

          </div>

  

                  </motion.div>
    
  )
}

export default observer (CartFloatingButton)