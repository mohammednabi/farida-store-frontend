import React, { ReactElement } from "react";
import { AiFillAccountBook } from "react-icons/ai";
import Icon from "./Icon";
import { IconType } from "react-icons/lib";

interface iconCardInterface {
  topText: string;
  mainText: string;
  icon: ReactElement<IconType>;
}

const IconCard = ({ topText, mainText, icon }: iconCardInterface) => {
  return (
    <div className="flex text-sm md:text-xl items-center gap-2">
      <div className="text-2xl">
        <Icon icon={icon} hasBorder={true} hasBorderHover={false} />
      </div>
      <div className="flex flex-col">
        <h2 className="uppercase text-mainBlack/50">{topText}</h2>
        <h2>{mainText}</h2>
      </div>
    </div>
  );
};

export default IconCard;
