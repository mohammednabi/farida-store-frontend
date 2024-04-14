import React from "react";
import Branch from "./Branch";
import { useTranslations } from "next-intl";

const Welcoming = () => {
  const t = useTranslations("contactPage");

  const branches: {
    city_state: string;
    phone: string;
    times1: string;
    times2: string;
  }[] = [
    {
      city_state: t("branches.city_state"),
      phone: "01089759963",
      times1: t("branches.times1"),
      times2: t("branches.times2"),
    },
    {
      city_state: t("branches.city_state"),
      phone: "01089759963",
      times1: t("branches.times1"),
      times2: t("branches.times2"),
    },
    {
      city_state: t("branches.city_state"),
      phone: "01089759963",
      times1: t("branches.times1"),
      times2: t("branches.times2"),
    },
  ];

  return (
    <div className="w-full px-5 medmob:px-10 lmob:px-20  md:px-28  flex flex-col gap-10">
      <h1 className="text-2xl md:text-4xl font-bold capitalize">
        {t("branches.title")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-5">
        {branches.map(({ city_state, phone, times1, times2 }, index) => (
          <Branch
            key={index}
            index={index + 1}
            city_State={city_state}
            phone={phone}
            times1={times1}
            times2={times2}
          />
        ))}
      </div>
    </div>
  );
};

export default Welcoming;
