"use client";
import React, { useContext, useEffect } from "react";
import PageCard from "./PageCard";
import { FaRegAddressCard } from "react-icons/fa";
import { BsBox2 } from "react-icons/bs";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { MdPayment } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { TbHearts } from "react-icons/tb";
import { RiUserSettingsLine } from "react-icons/ri";
import { StoreContext } from "@/contexts/StoreContext";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const UserPagesMenu = () => {
  const { user } = useContext(StoreContext);

  const router = useRouter();

  const pagesCards = [
    {
      id: 1,
      title: "your orders",
      description:
        "track , return , cancel an order , download invoice or buy again",
      icon: <BsBox2 />,
      pageLink: "userorders",
    },
    {
      id: 2,
      title: "profile ",
      description: "edit your profile settings",
      icon: <RiUserSettingsLine />,
      pageLink: "/userprofile",
    },
    {
      id: 3,
      title: "your addresses",
      description: "edit , remove or set default address",
      icon: <FaRegAddressCard />,
      pageLink: "useraddresses",
    },
    {
      id: 4,
      title: "your payments",
      description:
        "view all transactions , manage payment methods and settings",
      icon: <MdPayment />,
      pageLink: "#",
    },
    {
      id: 5,
      title: "your cart",
      description:
        "view all transactions , manage payment methods and settings",
      icon: <BsCart3 />,
      pageLink: "/cart",
    },
    {
      id: 6,
      title: "your wishlist",
      description:
        "view all transactions , manage payment methods and settings",
      icon: <TbHearts />,
      pageLink: "/wishlist",
    },
  ];

  useEffect(() => {
    if (!Cookies.get("credentials")) {
      router.push("/login");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.isLoading]);

  return (
    <div className="grid grid-cols-2 gap-10 px-36 py-10">
      {pagesCards.map((card) => (
        <PageCard
          key={card.id}
          title={card.title}
          description={card.description}
          icon={card.icon}
          pageLink={card.pageLink}
        />
      ))}
    </div>
  );
};

export default UserPagesMenu;
