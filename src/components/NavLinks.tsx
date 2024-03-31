import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const NavLinks2 = () => {
  const t = useTranslations("navbar");

  return (
    <div className="capitalize hidden md:flex flex-1 shrink  text-sm lg:text-lg  ">
      <div className=" pl-36 flex flex-1 shrink  items-center justify-center gap-10">
        <Link href={"/"} className="nav-link">
          {t("home")}
        </Link>
        <Link href={"/"} className="nav-link">
          {t("products")}
        </Link>
        <Link href={"/order"} className="nav-link">
          {t("order")}
        </Link>
        <Link href={"/contact"} className="nav-link">
          {t("contact")}
        </Link>
      </div>
    </div>
  );
};

export default NavLinks2;
