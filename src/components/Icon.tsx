"use client"
import React, { ReactElement } from 'react'

import { AiOutlineSearch } from "react-icons/ai";
import { IconType } from 'react-icons/lib';
import {motion} from "framer-motion"


type color = "mainPink"|"mainWhite"|"mainDarkBlue"|"mainBlack"|"mainGray"|"transparent"

type size = "xs"|"sm"|"md"|"lg"|"xl"|"2xl"|"3xl"|"4xl"|"5xl"|"6xl"|"7xl"|"8xl"|"9xl"






interface iconProps {
    size?: size,
  color?: color,
  backColor?:string
  hasBorder?: boolean 
  hasBorderHover?:boolean
  borderColor?: color
borderSize ?:"1"|"2"|"3"|"4"|"5"|"8"
  count?: number
  showPop?:boolean
    icon: ReactElement<IconType>,

  whenClick ?: ()=>void
}

const Icon = ({ icon, size, color, hasBorder = false, borderColor="mainGray" ,count=0 ,showPop=false,borderSize="2",hasBorderHover=hasBorder&&true,backColor="transparent",whenClick}: iconProps) => {
    
  return (
    <div
      className={`relative ${size ? `text-` + size : `[1rem]`} ${color ? `text-` + color : `mainBlack`} ${hasBorder ?`border-solid border-${borderSize} border-${borderColor}`:``} ${hasBorderHover?`hover:border-mainPink`:``}  transition-all cursor-pointer  p-3   rounded-full`}
      onClick={whenClick}
    
      style={{
        backgroundColor: backColor
      
      }}
    >
      {showPop && <motion.div
        initial={{ scale: 0 }}
        animate={{scale:count>0?1:0}}
        className='bg-mainPink h-5 aspect-square  flex justify-center  items-center text-white rounded-full p-1   absolute -top-2 -right-2 text-xs'>
        <div className='text-center '>
          {count }
        </div>
      </motion.div>}

     {icon}
  </div>
  )
}

export default Icon 