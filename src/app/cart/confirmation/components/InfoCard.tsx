import React from "react";

interface infoProps {
  title: string;
  description: string;
}

const InfoCard = ({ description, title }: infoProps) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-mainBlack/50 ">{title}</h1>
      <h1 className="font-bold text-lg">{description}</h1>
    </div>
  );
};

export default InfoCard;
