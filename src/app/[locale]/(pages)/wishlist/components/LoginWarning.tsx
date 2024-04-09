"use client";
import { Button } from "@nextui-org/react";
import { Link } from "@/navigation";
import React from "react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { VscSignIn } from "react-icons/vsc";
import { useTranslations } from "next-intl";

const LoginWarning = () => {
  const t = useTranslations("wishList");

  return (
    <div className="w-full h-auto grid place-items-center mt-10 px-5">
      <div className="flex flex-col gap-3">
        <div className="relative flex justify-center items-center ">
          <LiaShoppingBagSolid className="text-9xl md:text-[12rem] " />
          {/* <VscSignIn className="text-4xl absolute rotate-180 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" /> */}
        </div>

        <h1 className="text-lg md:text-2xl capitalize font-semibold text-center">
          {t("noSignIn.descritpion")}
        </h1>

        <Link href={"/login"} className="w-full">
          <Button className="bg-mainPink text-mainWhite capitalize text-sm md:text-xl w-full">
            {t("noSignIn.action")}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LoginWarning;
