"use client";
import { Chip } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaCheck } from "react-icons/fa";

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

  return (
    <div
      onClick={goToTarget}
      className={`${isDisabled ? `cursor-default` : `cursor-pointer`}`}
    >
      <div className={`flex gap-3 items-center mt-10 ${opacity}`}>
        <Chip
          variant="faded"
          classNames={{
            base: "bg-transparent text-xl text-mainBlack border-mainBlack border-1 border-solid",
          }}
          size="lg"
        >
          {isChecked ? <FaCheck className="text-emerald-500/50" /> : step}
        </Chip>

        <div className="flex flex-col ">
          <h1 className="text-xl text-mainBlack capitalize">{title}</h1>
          <h1 className="text-lg text-mainBlack/50 ">{description}</h1>
        </div>
      </div>
    </div>
  );
};

export default CartTab;
