import { useTranslations } from "next-intl";
import React from "react";

interface ReviewLoginConditionProps {
  // Define your props here
}

const ReviewLoginCondition = ({}: ReviewLoginConditionProps) => {
  const t = useTranslations("productPage");

  return (
    <div>
      <h1>{t("reviewCondition")}</h1>
    </div>
  );
};

export default ReviewLoginCondition;
