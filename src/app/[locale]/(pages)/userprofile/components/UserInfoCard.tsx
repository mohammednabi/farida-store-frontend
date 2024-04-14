import React from "react";

interface infoCardProps {
  title?: string;
  description?: string;
}

const UserInfoCard = ({ title, description }: infoCardProps) => {
  return (
    <div className="grid grid-rows-2">
      <h1 className="text-mainBlack/50 text-sm md:text-xl capitalize">
        {title}
      </h1>
      <h1 className="text-mainBlack text-sm md:text-xl">{description}</h1>
    </div>
  );
};

export default UserInfoCard;
