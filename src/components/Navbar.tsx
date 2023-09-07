import Link from "next/link";
import React from "react";
import { BsCartCheck } from "react-icons/bs";
import Image from "next/image";
import download from "/public/download.png";
import {
  AiOutlineHeart,
  AiOutlineUserAdd,
  AiOutlineSearch,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden gap-1 lg:flex">
            <div className="navbar_icon_wrapper">
              <BsCartCheck />
            </div>
            <div className="navbar_icon_wrapper">
              <AiOutlineHeart />
            </div>
            <div className="navbar_icon_wrapper">
              <AiOutlineUserAdd />
            </div>
            <div className="navbar_icon_wrapper">
              <AiOutlineSearch />
            </div>
          </div>
          <div className="flex gap-4 text-2xl">
            <Link className="link_hover" href="#">
              اتصل بنا
            </Link>
            <Link className="link_hover" href="#">
              تتبع الطلب
            </Link>
            <Link className="link_hover" href="#">
              منتجاتنا
            </Link>
            <Link className="link_hover" href="#">
              الرئيسية
            </Link>
          </div>
          <div className="flex">
            <Image
              src={download}
              width={100}
              height={100}
              alt="bunner"
              className="rounded-2xl"
            />
          </div>
          <div className="flex gap-4"></div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
