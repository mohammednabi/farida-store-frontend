import React from "react";

interface addressCell {
  title: string;
  description: string;
}

const AddressCell = ({ title, description }: addressCell) => {
  return (
    <div className="grid grid-cols-1  capitalize ">
      <h1 className="text-sm md:text-lg text-mainBlack/50">{title}</h1>
      <h1 className="text-sm md:text-lg ">{description}</h1>
    </div>
  );
};

export default AddressCell;
