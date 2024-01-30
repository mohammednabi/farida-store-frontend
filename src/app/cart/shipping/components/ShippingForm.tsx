"use client"
import { Accordion, AccordionItem, Button, Input, Textarea } from '@nextui-org/react'
import React from 'react'
import { MdOutlineDiscount } from "react-icons/md";

const ShippingForm = () => {
  return (
   <div className='flex flex-col '>
          <h1 className='text-2xl font-bold capitalize'>order details</h1>    
          
           <Accordion variant='bordered' className='mt-10'>
              <AccordionItem
                  title="Promo Code"
                  subtitle="Do you have promo code? press here"
                  indicator={<MdOutlineDiscount  />}
                  classNames={{
                      subtitle: "text-mainPink",
                  indicator:"text-2xl text-mainPink"
                  }}
              >
                       <h1 className='text-2xl capitalize pb-5'>if you have promo code use it here </h1> 
          <div className='flex items-center gap-5'>
               <Input
                    
                      labelPlacement='outside'
                      inputMode='text'
                   
                      radius='sm'
                      isRequired

                      classNames={{
                          label: "text-xl capitalize font-bold ",
                         
                      }}
              />
              
              <Button className='bg-mainBlack text-mainWhite px-5 py-2'>
                  use code
             </Button>
          </div>
                  </AccordionItem>
              </Accordion>    
          
            

          <form className='mt-20   flex flex-col gap-10 '>
          
         
                  
                  <Input
                      label={"fullname"}
                      labelPlacement='outside'
                      inputMode='text'
                      placeholder='your full name'
                      radius='sm'
                      isRequired

                      classNames={{
                          label: "text-xl capitalize font-bold ",
                         
                      }}
                  />

                   
                  <Input
                      label={"phone"}
                      labelPlacement='outside'
                      inputMode='tel'
                      placeholder='your phone number'
                      radius='sm'
                      isRequired

                      classNames={{
                          label: "text-xl capitalize font-bold ",
                         
                      }}
                  />


                   
                  <Input
                      label={"another phone "}
                      labelPlacement='outside'
                      inputMode='text'
                      placeholder='another phone number'
                      radius='sm'
                      

                      classNames={{
                          label: "text-xl capitalize font-bold ",
                         
                      }}
                  />


  <Input
                      label={"street address"}
                      labelPlacement='outside'
                      inputMode='text'
                      placeholder='another telephone number'
                      radius='sm'
                      

                      classNames={{
                          label: "text-xl capitalize font-bold ",
                         
                      }}
                  />



                   
                  <Input
                      label={"country"}
                      labelPlacement='outside'
                      inputMode='text'
                      placeholder='your country'
                      radius='sm'
                      isRequired

                      classNames={{
                          label: "text-xl capitalize font-bold ",
                         
                      }}
              />
              

              <Input
                      label={"state"}
                      labelPlacement='outside'
                      inputMode='text'
                      placeholder='pick your state'
                      radius='sm'
                      isRequired

                      classNames={{
                          label: "text-xl capitalize font-bold ",
                         
                      }}
                  />

          </form>   


             

          <div className='flex flex-col pt-10 gap-5'>
              
              <div>
                  
              <h1 className='text-2xl font-bold capitalize'>more information</h1>  
              <h1 className='text-xl text-mainBlack/50 capitalize'>Order notes (optional)</h1>  
              </div>
              
          

              <div>
                  <Textarea
                      variant='bordered'
                      radius='none'
                      placeholder='If you have any notes about your order, write it here '
                    
                  />
              </div>
          </div>

          
          
    </div>
  )
}

export default ShippingForm