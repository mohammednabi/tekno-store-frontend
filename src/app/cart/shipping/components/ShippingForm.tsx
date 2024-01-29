"use client"
import { Button, Input, Textarea } from '@nextui-org/react'
import React from 'react'

const ShippingForm = () => {
  return (
   <div className='flex flex-col '>
          <h1 className='text-2xl font-bold capitalize'>order details</h1>    
          
              
             <h1 className='text-2xl capitalize mt-10'>promo code</h1> 
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
                      placeholder='your telephone number'
                      radius='sm'
                      isRequired

                      classNames={{
                          label: "text-xl capitalize font-bold ",
                         
                      }}
                  />


                   
                  <Input
                      label={"another telphone "}
                      labelPlacement='outside'
                      inputMode='text'
                      placeholder='another telephone number'
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

          <div className='flex flex-col mt-50 gap-5'>
              
              <h1 className='text-2xl font-bold capitalize'>more information</h1>  
              
              <div>
                  <Textarea
                      variant='bordered'
                      radius='none'
                    
                  />
              </div>
          </div>

          
          
    </div>
  )
}

export default ShippingForm