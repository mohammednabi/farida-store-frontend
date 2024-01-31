"use client"
import { Divider, Image } from '@nextui-org/react'
import React from 'react'

import { TfiEmail } from "react-icons/tfi";
import { TfiHeadphone } from "react-icons/tfi";
import IconCard from './IconCard'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Icon from './Icon';

const Footer = () => {
  return (
      <div className='min-h-[20rem] p-5 pt-20 flex flex-col gap-16'>
         
          <div className='flex flex-col gap-5'>
              
          <Divider />
          <div className='flex justify-between items-center '>
              <div>
                  
              <h1 className='text-2xl font-bold capitalize'>We are always here to help you </h1>
              <h1 className='text-lg font-bold capitalize text-mainBlack/50'>Reach out to us through any of these support channels</h1>
              </div>
              <div className='flex gap-5 items-center'>
                  
                 <IconCard icon={<TfiEmail />} topText='email support' mainText='store@farida.com'/>
                 <IconCard icon={<TfiHeadphone />} topText='phone support' mainText='01089953368'/>
                   
              </div>
          </div>
          </div>

          <div className='flex flex-col gap-5'>
              
              <div className='flex justify-between items-center'>
                  
           <div className=' flex gap-5 justify-center items-center'>
              
                  <Image  src='/apple.png' alt='' className='appDownload-image'/>
              
              
                  <Image src='/google.png' alt='' className='appDownload-image'/>
              
                  </div>
                  <div className='flex items-center gap-3'>
                      <Icon icon={<FaFacebookF />} backColor='mainBlack' color='mainWhite' size='2xl'/>
                      <Icon icon={<FaInstagram />}  backColor='mainBlack' color='mainWhite' size='2xl'/>
                      <Icon icon={<FaTwitter />}  backColor='mainBlack' color='mainWhite' size='2xl'/>
                      <Icon icon={<FaLinkedin />}  backColor='mainBlack' color='mainWhite' size='2xl'/>
                  </div>
              </div>
              <div className='flex justify-between items-center'>
          <h1 className='text-center text-mainBlack/50'>© 2024 farida store. All Rights Reserved</h1>
                  
          <div className=' flex gap-5 items-center justify-center'>
               <Image  src='/MasterCard_Logo.svg.webp' alt='' className='payment-image'/>
               <Image  src='/Visa_Inc._logo.svg.png' alt='' className='payment-image'/>
               <Image  src='/PayPal.svg.png' alt='' className='payment-image'/>
               <Image  src='/cod-en.svg' alt='' className='payment-image'/>
          </div>
          </div>
          </div>
    </div>
  )
}

export default Footer