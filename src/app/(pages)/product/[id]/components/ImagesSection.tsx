"use client"
import { Image } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

import ZoomedImage from './ZoomedImage';
import { imgType } from '@/stores/productsStore';
import { observer } from 'mobx-react-lite';
import { useParams } from 'next/navigation';



interface imagesProps{
    allImages?: {
        thumbnail: imgType
        images :imgType[] 
}
}

const ImagesSection = ({ allImages }: imagesProps) => {
    
//     const [images,setImages] = React.useState<any>()
//     const [selectedImage, setSelectedImage] = React.useState<any>({id:"",url:""})
    
//     const pageParams = useParams()


//     const filteredImages = React.useMemo(() => {

       
//         return images?.filter((img: { id: any; }) => {
//             if ( img?.id !== selectedImage?.id) {
                
//                 return img
//             }
                
//         })
       
        
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [allImages?.thumbnail.id, selectedImage?.id,pageParams.id])
    
//     useEffect(() => {

//         if (selectedImage.id === "") {
    
//             setSelectedImage(allImages?.thumbnail)

//             setImages([allImages?.thumbnail,...(allImages?.images || [])])
// }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   },[ allImages?.thumbnail.id, selectedImage.id,pageParams.id])
    
    
    
    // const images: imgType[] = [] 
    
    const [images, setImages] = useState<imgType[]>([])
    const [selectedImage,setSelectedImage] = useState<imgType>({id:"",url:""})

    
    
    useEffect(() => {
        // images.push(allImages?.thumbnail ?? {} as imgType)
        // images.push(...allImages?.images ?? [])
        
        setImages([allImages?.thumbnail ?? { id: "", url: "" }, ...allImages?.images ?? []])
        setSelectedImage(allImages?.thumbnail ?? { id: "", url: "" })
        

    },[allImages?.thumbnail.id])
    


  return (
      <div className='flex flex-col gap-5'>
        
              
           <ZoomedImage src={selectedImage.url}/>

          
         

   
                 
           <div className='grid grid-cols-5 gap-2  '>
              {images?.map((img) => (
                  <div key={img.id} className={`w-full aspect-square  transition-all bg-mainGray border-dashed border-2 ${img.id===selectedImage.id?"border-mainBlack":"border-mainGray"} hover:border-mainPink p-2 flex items-center justify-center rounded-md cursor-pointer`}
                  onClick={()=>{setSelectedImage(img)}}
                  >
                      <Image src={img.url } alt='' className='w-full h-auto aspect-square object-contain'/>
              </div>     
              ))}
             
             
             
          </div> 
          
          
    </div>
  )
}

export default observer( ImagesSection)