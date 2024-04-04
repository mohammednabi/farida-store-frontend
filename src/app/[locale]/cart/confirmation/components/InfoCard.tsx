import React from "react";

interface infoProps {
  title: string;
  description: string;
}

const InfoCard = ({ description, title }: infoProps) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-mainBlack/50  text-sm md:text-xl">{title}</h1>
      <h1 className="font-bold text-xs md:text-lg line-clamp-2">
        {description}
      </h1>
    </div>
  );
};

export default InfoCard;
