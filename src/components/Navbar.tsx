import React from "react";
import NavIcons from "./NavIcons";
import NavLinks from "./NavLinks";
import NavMenuIcon from "./NavMenuIcon";
import SearchMenu from "./SearchMenu";

const NavBar2 = () => {
  return (
    <>
      <SearchMenu />
      <div className="relative p-5 px-10 w-full min-h-[3.75rem] max-h-[5rem] border-b-[1px] border-b-mainDarkBlue border-solid">
        <div className=" flex justify-between items-center gap-3">
          <NavMenuIcon />

          <NavLinks />
          <NavIcons />
        </div>
      </div>
    </>
  );
};

export default NavBar2;
