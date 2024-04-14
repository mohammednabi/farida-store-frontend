"use client";
import { Image } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import React from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";

interface orderPaidProps {
  status: "completed" | "in progress" | "on hold";
}

const OrderPaid = ({ status }: orderPaidProps) => {
  const t = useTranslations("userOrders");

  return (
    <div
      className={`${status === "in progress" && `scale-105 md:scale-110`} ${
        status !== "completed" && `opacity-50`
      } ${
        status === "completed" && `bg-emerald-600 text-mainWhite`
      } transition-all w-full grid grid-rows-[auto_auto] grid-cols-1 md:grid-rows-1 md:grid-cols-[6fr_1fr] items-center bg-mainWhite shadow-md border-2 border-mainGray border-solid p-5 rounded-md gap-y-3`}
    >
      <div className="flex flex-col gap-3">
        <div>
          <div className="flex items-center gap-1">
            <h1
              className={`capitalize font-bold text-sm md:text-xl ${
                status === "in progress" ? `text-emerald-500` : ``
              }`}
            >
              {status === "completed"
                ? t("trackOrderPage.status.completed")
                : status === "in progress"
                ? t("trackOrderPage.status.progress")
                : t("trackOrderPage.status.hold")}
            </h1>
            {status === "completed" && (
              <RiCheckboxCircleFill className="text-emerald-300" />
            )}
          </div>
          <h2 className="capitalize font-bold text-lg md:text-2xl">
            3. {t("trackOrderPage.paid.arrived")}
          </h2>
        </div>
        <div>
          <p className="capitalize font-semibold text-sm md:text-lg">
            {t("trackOrderPage.paid.receive")}
          </p>
        </div>
      </div>
      <div className="w-1/4 justify-self-center md:w-full flex justify-center items-center">
        <Image
          src="/money.png"
          alt=""
          radius="none"
          className="w-full h-full flex justify-center items-center z-[1]"
          classNames={{ img: "w-full h-full object-contain" }}
        />
      </div>
    </div>
  );
};

export default OrderPaid;
