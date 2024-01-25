"use client"
import { Image } from '@nextui-org/react'
import React from 'react'


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
        return images.filter((img)=>{return img!== selectedImage})
    }, [images, selectedImage])
    
    const [isanimate, setIsAnimate] = React.useState(false)
    
    React.useEffect(() => {

        setIsAnimate(false)
        setTimeout(() => {
            
            setIsAnimate(true)
        }, 1000);
    },[selectedImage])


  return (
      <div className='flex flex-col gap-5'>
        
              
          <div
             
              className='w-full h-auto aspect-square flex justify-center items-center overflow-hidden'>
              <Image src={selectedImage.url} alt='' className='w-full h-auto '/>
          </div>
                 
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