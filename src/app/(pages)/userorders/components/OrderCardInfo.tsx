import React from "react";

interface orderCardInfoProps {
  title?: string;
  description?: string;
}

const OrderCardInfo = ({ title, description }: orderCardInfoProps) => {
  return (
    <div className="grid grid-rows-2">
      <h1 className="text-xl capitalize text-mainBlack/50">{title}</h1>
      <h1 className="text-xl capitalize">{description}</h1>
    </div>
  );
};

export default OrderCardInfo;
