import { useTranslations } from "next-intl";
import React from "react";
import { FaCheck } from "react-icons/fa";
const ReviewSendedSuccesfuly = () => {
  const t = useTranslations("productPage");
  return (
    <div className="bg-emerald-500 text-mainWhite p-3 text-sm md:text-xl flex gap-3 rounded-lg mt-5 items-center">
      <FaCheck />
      <h1>{t("successRating")}</h1>
    </div>
  );
};

export default ReviewSendedSuccesfuly;
