import { useTranslations } from "next-intl";
import React from "react";

const Thanks = () => {
  const t = useTranslations("confirmationPage");

  return (
    <div className="flex flex-col gap-1 justify-center items-center mt-10">
      <h1 className="text-xl font-bold uppercase">{t("thanks.thank")}</h1>
      <h1 className="capitalize text-lg text-mainBlack/75">
        {t("thanks.message")}
      </h1>
    </div>
  );
};

export default Thanks;
