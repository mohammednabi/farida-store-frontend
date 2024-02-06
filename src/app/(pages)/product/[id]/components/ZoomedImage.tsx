"use client"
import { Skeleton } from '@nextui-org/react';
import React from 'react'
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

interface zoomProps{
    src?:string
}

const ZoomedImage = ({src}:zoomProps) => {
  return (
    <Skeleton isLoaded={src?true:false}>

   <div
             
             className='w-full h-auto  flex justify-center items-center '>
                
                 <InnerImageZoom
  src={src??""}
  hasSpacer={true}
  zoomType='hover'
          imgAttributes={{
         className:"w-full h-full object-cover"
       }}
          className='w-full h-full  object-cover '
          zoomPreload
  />
          </div>  
  </Skeleton>
  )
}

export default ZoomedImage