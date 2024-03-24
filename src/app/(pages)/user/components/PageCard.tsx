/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface pageCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  pageLink: string;
}

const PageCard = ({ title, description, icon, pageLink }: pageCard) => {
  return (
    <Link
      href={pageLink}
      className="p-5 border-mainBlack/25 border-2 border-solid rounded-lg grid grid-cols-1 grid-rows-2 lmob:grid-rows-1 lmob:grid-cols-[1fr_3fr] items-center gap-5 cursor-pointer transition-all hover:bg-mainGray"
    >
      <div className="flex justify-center items-center text-5xl md:text-8xl text-mainPink">
        {icon}
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-xl md:text-2xl text-center lmob:text-left font-semibold capitalize">
          {title}
        </h1>
        <h2 className="text-sm md:text-lg  capitalize">{description}</h2>
      </div>
    </Link>
  );
};

export default PageCard;
