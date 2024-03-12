import Link from "next/link";
import React from "react";

const NavLinks2 = () => {
  return (
    <div className="capitalize hidden md:flex flex-1 shrink  text-sm lg:text-lg  ">
      <div className=" pl-36 flex flex-1 shrink  items-center justify-center gap-10">
        <Link href={"/"} className="nav-link">
          home
        </Link>
        <Link href={"/"} className="nav-link">
          products
        </Link>
        <Link href={"/order"} className="nav-link">
          order
        </Link>
        <Link href={"/contact"} className="nav-link">
          contact
        </Link>
      </div>
    </div>
  );
};

export default NavLinks2;
