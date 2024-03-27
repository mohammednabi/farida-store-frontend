"use client";
import { Image, Progress } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

interface orderShippedProps {
  orderedDate: Date;
  arrivedDate: Date;

  status: "completed" | "in progress" | "on hold";
}

const OrderShipped = ({
  orderedDate,
  arrivedDate,

  status,
}: orderShippedProps) => {
  const today = new Date();

  const [progress, setProgress] = useState(0);
  const [daysLeft, setDaysLeft] = useState("0");

  const calculateProgress = () => {
    if (arrivedDate.getFullYear() !== 1970) {
      let differenceDaysBetweenArrivedAndOrdered = 0;
      let differenceDaysBetweenArrivedAndToday = 0;
      let progress = 0;
      const orderedAndArriveedDifferneceInMS =
        arrivedDate.getTime() - orderedDate.getTime();
      const todayAndArriveedDifferneceInMS =
        arrivedDate.getTime() - today.getTime();

      differenceDaysBetweenArrivedAndOrdered =
        orderedAndArriveedDifferneceInMS / (1000 * 60 * 60 * 24);
      differenceDaysBetweenArrivedAndToday =
        todayAndArriveedDifferneceInMS / (1000 * 60 * 60 * 24);
      progress =
        100 -
        (differenceDaysBetweenArrivedAndToday /
          differenceDaysBetweenArrivedAndOrdered) *
          100;

      if (progress <= 100 && progress >= 0) {
        setProgress(progress);

        setDaysLeft(
          differenceDaysBetweenArrivedAndToday > 0 &&
            differenceDaysBetweenArrivedAndToday < 1
            ? "few hours left"
            : `${Number.parseInt(
                `${differenceDaysBetweenArrivedAndToday}`
              )} days left`
        );
      } else {
        setDaysLeft("delivered succesfully");
        setProgress(100);
      }
    } else {
      setDaysLeft("");
      setProgress(0);
    }
  };

  useEffect(() => {
    calculateProgress();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrivedDate, orderedDate]);

  return (
    <div
      className={`${status === "in progress" && `scale-110`} ${
        status !== "in progress" && `opacity-50`
      } transition-all w-full grid grid-cols-[6fr_1fr] items-center bg-mainWhite shadow-md border-2 border-mainGray border-solid  p-5 rounded-md`}
    >
      <div className="flex flex-col gap-3">
        <div>
          <h1
            className={`capitalize font-bold text-xl ${
              status === "in progress" ? `text-emerald-500` : ``
            }`}
          >
            {status}
          </h1>

          <h2 className="capitalize font-bold text-2xl">
            2. order on the way{" "}
          </h2>
        </div>
        <div>
          <p className="capitalize font-semibold text-lg">
            your order was shipped successfully
          </p>
          <p className="capitalize  text-lg">it should be delivered at</p>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <h1 className="font-bold">
              {orderedDate.toLocaleDateString("en", {
                day: "2-digit",
                weekday: "long",
                month: "short",
                year: "numeric",
              })}
            </h1>
            <h1 className="font-bold capitalize">{daysLeft}</h1>
            <h1 className="font-bold">
              {arrivedDate.getFullYear() !== 1970
                ? arrivedDate.toLocaleDateString("en", {
                    day: "2-digit",
                    weekday: "long",
                    month: "short",
                    year: "numeric",
                  })
                : "soon"}
            </h1>
          </div>

          <Progress
            aria-label="Loading..."
            value={progress}
            size="lg"
            radius="none"
            className="w-full hidden md:block"
            classNames={{
              indicator: "bg-gradient-to-r from-mainPink to-mainPink",
            }}
          />
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <Image
          src="/delivery-truck.png"
          alt=""
          radius="none"
          className="w-full h-full flex justify-center items-center z-[1]"
          classNames={{ img: "w-full h-full object-contain" }}
        />
      </div>
    </div>
  );
};

export default OrderShipped;
