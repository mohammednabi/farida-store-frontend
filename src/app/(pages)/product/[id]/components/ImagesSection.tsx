"use client"
import { Image } from '@nextui-org/react'
import React, { useEffect } from 'react'

import ZoomedImage from './ZoomedImage';
import { imgType } from '@/stores/productsStore';




interface imagesProps{
    allImages?: {
        thumbnail: imgType
        images :imgType[] 
}
}

const ImagesSection = ({ allImages }: imagesProps) => {
    
    const [images,setImages] = React.useState<any>()
    const [selectedImage, setSelectedImage] = React.useState<any>({id:"",url:""})
    


    const filteredImages = React.useMemo(() => {

       
        return images?.filter((img: { id: any; }) => {
            if ( img?.id !== selectedImage?.id) {
                
                return img
            }
                
        })    
       
        
    }, [images, selectedImage?.id])
    
    useEffect(() => {

        if (selectedImage.id === "") {
    
            setSelectedImage(allImages?.thumbnail)

            setImages([allImages?.thumbnail,...(allImages?.images || [])])   
}
  },[allImages?.images, allImages?.thumbnail, selectedImage.id])
    
    


  return (
      <div className='flex flex-col gap-5'>
        
              
           <ZoomedImage src={selectedImage?.url?selectedImage.url:""}/>

          
         

   
                 
          <div className='grid grid-cols-5 gap-2  '>
              {filteredImages?.map((img: { id: React.Key | null | undefined; url: string | undefined; }) => (
                  <div key={img?.id} className='w-full aspect-square  transition-all bg-mainGray border-dashed border-2 border-mainGray hover:border-mainPink p-2 flex items-center justify-center rounded-md cursor-pointer'
                  onClick={()=>{setSelectedImage(img)}}
                  >
                   <Image  src={img?.url} alt='' className='w-full h-auto'/>
              </div>     
              ))}
             
             
             
          </div>
          
          
    </div>
  )
}

export default ImagesSection