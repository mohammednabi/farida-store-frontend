import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import React from "react";

const EmptyCartDrop = () => {
  const t = useTranslations("cartDrop");
  return (
    <div>
      <h2 className="text-mainBlack/50">{t("empty")} </h2>
      <Link href={"/"}>{t("continue")} → </Link>
    </div>
  );
};

export default EmptyCartDrop;
