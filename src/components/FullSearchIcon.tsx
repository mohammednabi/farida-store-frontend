"use client";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Icon from "./Icon";
import { StoreContext } from "@/contexts/StoreContext";

interface fullUserSearchIconProps {
  className?: string;
  hasBorder?: boolean;
}

const FullSearchIcon = ({
  className,
  hasBorder = true,
}: fullUserSearchIconProps) => {
  const { searchBox } = useContext(StoreContext);

  return (
    <Icon
      icon={<AiOutlineSearch className={className} />}
      hasBorder={hasBorder}
      whenClick={searchBox.displayWholeSearchBox}
    />
  );
};

export default observer(FullSearchIcon);
