"use client"
import React, { ReactElement } from 'react'

import { AiOutlineSearch } from "react-icons/ai";
import { IconType } from 'react-icons/lib';
import {motion} from "framer-motion"


interface iconProps {
    size?: string,
    color?: string,
    hasBorder?:boolean 
  borderColor?: string

  count?: number
  showPop?:boolean
    icon: ReactElement<IconType>,
}

const Icon = ({ icon, size, color, hasBorder = false, borderColor ,count=0 ,showPop=false}: iconProps) => {
    
  return (
    <div className={`relative ${size ? "text-" + "[" + size + "]" : "[1rem]"} ${color ? "text-" + color : "mainBlack"} ${hasBorder ? "  border-2 border-solid hover:border-mainPink" : ""} ${borderColor ? "border" + "-" + borderColor : "border-mainGray"} transition-all cursor-pointer  p-3   rounded-full`}>
      {showPop && <motion.div
        initial={{ scale: 0 }}
        animate={{scale:count>0?1:0}}
        className='bg-mainPink h-5 aspect-square  flex justify-center items-center text-white rounded-full p-1   absolute -top-2 -right-2 text-xs'>
        <div className='text-center '>
          {count }
        </div>
      </motion.div>}

     {icon}
  </div>
  )
}

export default Icon 