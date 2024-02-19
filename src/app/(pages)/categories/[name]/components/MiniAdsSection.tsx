"use client"
import React, { useContext, useEffect } from 'react'
import MiniAdCard from './MiniAdCard'
import { observer } from 'mobx-react-lite'
import { StoreContext } from '@/contexts/StoreContext'

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, Navigation, A11y, EffectFade } from "swiper/modules"


// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
// import 'swiper/css/scrollbar'
import 'swiper/css/bundle'


const MiniAdsSection = () => {




const {ads} = useContext(StoreContext)

  useEffect(() => {
    ads.getAllMiniAds()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
  
      
<div   className='px-28 py-10  flex justify-center items-center'>
      

        <Swiper
        modules={[Autoplay
          // , Navigation
          // , Pagination
          , A11y
          , EffectFade
          
        ]}
          autoplay={{pauseOnMouseEnter:true,waitForTransition:true,delay:5000}}
          // navigation
          // pagination={{clickable:true}}
          
          effect='fade'
          spaceBetween={0}
          
          slidesPerView={1}
      
        
          >
      

      {ads.miniAds.map((miniAd) => (
        
        <SwiperSlide key={miniAd.id} className='w-full h-full '>
          

        <MiniAdCard  content={miniAd.attributes.content } />
</SwiperSlide>
        
        ))}
        </Swiper>

        </div>
  
  )
}

export default observer(MiniAdsSection)