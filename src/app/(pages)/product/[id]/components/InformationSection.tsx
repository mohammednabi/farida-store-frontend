import React from 'react'
import { AiOutlineGlobal } from "react-icons/ai";
import { RiExchangeDollarLine } from "react-icons/ri";
import { MdOutlinePayment } from "react-icons/md";
import BestSellerMenu from './BestSellerMenu';



const InformationSection = () => {
  return (
      <div className='flex flex-col gap-5'>
          <div className='w-full aspect-square bg-mainDarkBlue p-3 flex justify-center items-center'>
              <div className='w-full h-full border-1 border-mainWhite border-dashed  capitalize  flex flex-col justify-center items-center gap-2'>
                  <h1 className='text-white font-bold text-2xl text-center'>Elevate your everyday</h1>
                  <h1 className='text-white text-lg text-center'>Quality you can trust.</h1>
                  <h1 className='text-white text-lg underline text-center'>Farida store</h1>
              </div>
             
          </div>
          <div className='w-full h-auto bg-mainGray capitalize p-3 flex flex-col gap-5'>
              <div className='flex  gap-2'>
                  <AiOutlineGlobal size={"1.5rem"}/>
                  <h1 className='w-10/12'>Shipping all over egypt</h1>
              </div>
               <div className='flex  gap-2'>
                <RiExchangeDollarLine size={"1.5rem"}/>
                  <h1 className='w-10/12'>Exchange and return with a 14-day guarantee</h1>
              </div>
               <div className='flex  gap-2'>
                  <MdOutlinePayment size={"1.5rem"}/>
                  <h1 className='w-10/12'>All your payments are fully insured</h1>
              </div>
          </div>
          <div className='flex flex-col gap-2'>
              <h1 className='capitalize text-xl'>best seller</h1>
              <BestSellerMenu />
          </div>
    </div>
  )
}

export default InformationSection