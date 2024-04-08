"use client";
import { Chip } from "@nextui-org/react";

import { useRouter } from "@/navigation";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { useScreenSize } from "react-screen-size-helper";

interface CartTabProps {
  step?: number;
  targetLink: string;
  title?: string;
  description?: string;
  opacity?: "opacity-50" | "opacity-100";
  isDisabled?: boolean;
  isChecked?: boolean;
}

const CartTab = ({
  step,
  title,
  description,
  targetLink,
  opacity,
  isDisabled = false,
  isChecked = false,
}: CartTabProps) => {
  const router = useRouter();

  const goToTarget = () => {
    if (!isDisabled) {
      router.push(targetLink);
    }
  };

  const { isLargeDesktop } = useScreenSize({});

  return (
    <div
      onClick={goToTarget}
      className={`${isDisabled ? `cursor-default` : `cursor-pointer`}`}
    >
      <div
        className={`flex flex-wrap gap-3 items-center mt-0 md:mt-10 ${opacity} `}
      >
        <Chip
          variant="faded"
          classNames={{
            base: "bg-transparent text-xl text-mainBlack border-mainBlack border-1 border-solid",
          }}
          size={isLargeDesktop ? "lg" : "md"}
        >
          {isChecked ? <FaCheck className="text-mainBlack/50 text-xs" /> : step}
        </Chip>

        <div className="flex flex-col ">
          <h1 className="text-sm md:text-lg lg:text-xl text-mainBlack capitalize">
            {title}
          </h1>
          <h1 className="text-xs md:text-sm lg:text-lg text-mainBlack/50 ">
            {description}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CartTab;
