"use client";
import React from "react";

// `${product.price.currentPrice * product.quantity}$`

interface totalPriceProps {
  totalPrice: number;
}

const TotalSingleCartProductPrice = ({ totalPrice }: totalPriceProps) => {
  return <h1 className="text-center text-xl">{totalPrice.toFixed(2)}$</h1>;
};

export default TotalSingleCartProductPrice;
