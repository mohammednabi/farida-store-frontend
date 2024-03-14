import React from "react";
import Icon from "./Icon";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import FullSearchIcon from "./FullSearchIcon";
import FullWishlistIcon from "./FullWishlistIcon";
import { FiHome } from "react-icons/fi";

const BottomNavigation = () => {
  return (
    <div className="w-full fixed bottom-0 bg-mainGray p-3 py-1 grid md:hidden grid-cols-4 items-center z-[89] border-t-[1px] border-t-mainDarkBlue border-solid ">
      <Link href={"/"} className="justify-self-center  ">
        <Icon icon={<FiHome className="text-lg" />} />
      </Link>
      <Link href={"/user"} className="justify-self-center  ">
        <Icon icon={<FaRegUser className="text-lg" />} />
      </Link>
      <Link href={"/wishlist"} className="justify-self-center text-5xl ">
        {/* <Icon icon={<FaRegHeart />} /> */}
        <FullWishlistIcon
          hasBorder={false}
          className="justify-self-center text-lg "
        />
      </Link>
      <Link href={""} className="justify-self-center  ">
        <FullSearchIcon
          hasBorder={false}
          className="justify-self-center text-lg "
        />
      </Link>
    </div>
  );
};

export default BottomNavigation;
