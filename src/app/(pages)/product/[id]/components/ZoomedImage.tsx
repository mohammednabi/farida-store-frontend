"use client"
import React from 'react'
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

interface zoomProps{
    src:string
}

const ZoomedImage = ({src}:zoomProps) => {
  return (
   <div
             
              className='w-full h-auto aspect-square flex justify-center items-center '>
                
                 <InnerImageZoom
  src={src}
              hasSpacer={true}
              zoomType='hover'
             
            className='w-full h-auto aspect-square '
    />
          </div>  
  )
}

export default ZoomedImage