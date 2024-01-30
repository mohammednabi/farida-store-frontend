import React from 'react'

type size = "text-[1rem]"|"text-sm"|"text-lg"|"text-xl"|"text-2xl"|"text-3xl"|"text-4xl"|"text-5xl"|"text-6xl"|"text-7xl"|"text-8xl"|"text-9xl"

interface detailsProps{
  title: string
  price: string
  titleStyle?:string
  priceStyle?: string
  titleSize?:size
  priceSize?:size
}

const ShippingRowDetails = ({title,price,titleStyle,priceStyle,titleSize="text-[1rem]",priceSize="text-lg"}:detailsProps) => {
  return (
   <div className='grid grid-cols-[2fr_.5fr] gap-5 '>
      <h1 className={`${titleStyle} ${titleSize} `}>{title }</h1>
      <h1 className={`${priceStyle} ${priceSize} `}>{price}</h1>
              </div>
  )
}

export default ShippingRowDetails