"use client"
import { Divider, Skeleton } from '@nextui-org/react'
import React from 'react'
import {Tabs, Tab, Chip} from "@nextui-org/react";
import { VscPreview } from "react-icons/vsc";
import { MdOutlineDescription } from "react-icons/md";
import UserReview from './UserReview';
import { strapiProductType } from '@/stores/specificTypes/strapiProductType';




interface reviewProps {
product:strapiProductType
}


const ReviewsSection = ({product}:reviewProps) => {




  return (
      <div className='flex flex-col'>
          
         
          <div className='flex w-full flex-col '>
              <Tabs 
        aria-label="Options" 
        color="primary" 
        variant="underlined"
        size='lg'
        classNames={{
          tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
          cursor: "w-full bg-mainPink",
          tab: "max-w-fit px-0 h-12",
          tabContent: "group-data-[selected=true]:text-mainPink"
        }}
      >
        <Tab
                      key="reviews"
                      value={"reviews"}
          title={
            <div className="flex items-center space-x-2">
            <VscPreview className='text-2xl'/>
              <span className='text-2xl'>Reviews</span>
                  <Chip size="md" variant="shadow" className='bg-mainDarkBlue text-mainWhite'>{product.attributes.reviews.data.length }</Chip>
            </div>
          }
                       onClick={(e) => {
                          console.log(e.target)
                      }}
                  >
                      <div className='flex flex-col gap-5 pt-5'>
              {product.attributes.reviews.data?.map((r) => (
                  <div key={r.id} >
                      <UserReview 
                      userAvatar={""} 
                      review={r.attributes.description} 
                    name={r.attributes.title}
                    rating={r.attributes.rating}
                    date={r.attributes.createdAt}
                    id={r.id} />
                      <Divider />
                      
                  </div>
              ))}

            
          </div>
                  </Tab>
                  

                 <Tab
                      key="more-info"
                       value={"description"}
          title={
            <div className="flex items-center space-x-2">
            <MdOutlineDescription className='text-2xl'/>
              <span className='text-2xl'>Description</span>
              
            </div>
          }
                      onClick={(e) => {
                          console.log(e.target)
                      }}
                  >
                    <div className='flex flex-col gap-3'>
              
              <Skeleton isLoaded={product.attributes.description.length !==0} className='w-max'>

          <h1 className='capitalize text-xl font-semibold'>description :-</h1>
              </Skeleton>
    
              <Skeleton isLoaded={product.attributes.description.length !==0}>

 <h1  className='text-xl '>{product.attributes.description?product.attributes.description:"slkdslk"}</h1>
              </Skeleton>

              </div>
        </Tab>
     
       
      </Tabs>
          </div>



         
         
      </div>
  )
}

export default ReviewsSection