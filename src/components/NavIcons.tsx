"use client";
import React, { useContext } from "react";

import FullCartIcon from "./FullCartIcon";
import FullUserIcon from "./FullUserIcon";

import { observer } from "mobx-react-lite";

import FullWishlistIcon from "./FullWishlistIcon";
import FullSearchIcon from "./FullSearchIcon";
import LanguageIcon from "./LanguageIcon";

const NavIcons = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="hidden md:flex  items-center gap-2">
        <FullSearchIcon />
        <FullUserIcon />
        <FullWishlistIcon />
      </div>
      <FullCartIcon />
      <LanguageIcon />
    </div>
  );
};

export default observer(NavIcons);
