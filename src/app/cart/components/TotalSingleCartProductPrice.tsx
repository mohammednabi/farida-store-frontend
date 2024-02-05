"use client"
import React from 'react'

// `${product.price.currentPrice * product.quantity}$`

interface totalPriceProps {
    totalPrice:number
}


const TotalSingleCartProductPrice = ({totalPrice}:totalPriceProps) => {
  return (
      <div>
          {totalPrice.toFixed(2)}$
    </div>
  )
}

export default TotalSingleCartProductPrice