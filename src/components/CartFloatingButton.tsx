"use client"
import { StoreContext } from '@/contexts/StoreContext';
import { Button } from '@nextui-org/react'
import React, { useContext } from 'react'
import { FaCartArrowDown } from "react-icons/fa6";
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';

const CartFloatingButton = () => {

    const {cartSidebar} = useContext(StoreContext) 

  return (
      <motion.div
          initial={{ x: 1000 }}
          animate={{x:cartSidebar.showCartSideBar?1000: 0}}
          transition={{
              duration:1
          }}

          className='fixed bottom-20 right-5 z-[100] w-max '>
          
          <Button
              radius='full'
              isIconOnly
              className='bg-mainBlack  w-16 h-16 '
              onClick={()=>{cartSidebar.displayWholeCartSidebar()}}
          >
              <FaCartArrowDown className='text-mainWhite text-2xl'/>
          </Button>

  

                  </motion.div>
    
  )
}

export default observer (CartFloatingButton)