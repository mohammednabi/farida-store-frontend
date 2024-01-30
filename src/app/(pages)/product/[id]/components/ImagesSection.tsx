"use client"
import { Image } from '@nextui-org/react'
import React, { useEffect } from 'react'

import ZoomedImage from './ZoomedImage';


type viewImg = {
    id: string
    url?:string
}

interface imagesProps{
images :viewImg[]
}

const ImagesSection = ({ images }: imagesProps) => {
    
    const [selectedImage, setSelectedImage] = React.useState<viewImg>(images[0])
    
    const filteredImages = React.useMemo(() => {

       
        return images?.filter((img) => {
            if ( img.id !== selectedImage.id) {
                
                return img
            }
                
        })    
       
        
    }, [images, selectedImage.id])
    
    useEffect(() => {
     setSelectedImage(images[0])
 },[images])
    
    


  return (
      <div className='flex flex-col gap-5'>
        
              
           <ZoomedImage src={selectedImage.url?selectedImage.url:""}/>
          
{/* 
               <InnerImageZoom
 src={selectedImage.url?selectedImage.url:""}
  zoomSrc={selectedImage.url?selectedImage.url:""}
  zoomType="hover"
                  zoomPreload={true}
                //   className='w-full h-auto aspect-square flex justify-center items-center overflow-hidden'
/> */}
          
         

   
                 
          <div className='grid grid-cols-5 gap-2  '>
              {filteredImages.map((img) => (
                  <div key={img.id} className='w-full aspect-square  transition-all bg-mainGray border-dashed border-2 border-mainGray hover:border-mainPink p-2 flex items-center justify-center rounded-md cursor-pointer'
                  onClick={()=>{setSelectedImage(img)}}
                  >
                   <Image  src={img.url} alt='' className='w-full h-auto'/>
              </div>     
              ))}
             
             
             
          </div>
          
          
    </div>
  )
}

export default ImagesSection