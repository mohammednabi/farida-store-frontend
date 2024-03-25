"use client";
import React, { useContext, useEffect, useState } from "react";
import { LiaNewspaper } from "react-icons/lia";
import { FaBackward, FaRegEye } from "react-icons/fa";
import { Button, Divider } from "@nextui-org/react";
import { StoreContext } from "@/contexts/StoreContext";
import Link from "next/link";
import { observer } from "mobx-react-lite";
import { useParams, useRouter } from "next/navigation";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { IoGridSharp } from "react-icons/io5";
import { FaBackwardStep } from "react-icons/fa6";
import { BsBack, BsBackspace } from "react-icons/bs";
import { BiLeftArrow } from "react-icons/bi";
import { MoveLeft } from "lucide-react";
import { isUserLoggedIn } from "@/functions/credentials";

const SidebarResponsiveContent = () => {
  const { sidebar, categories, user } = useContext(StoreContext);

  const mainMenu: { label: string; link: string }[] = [
    { label: "home", link: "/" },
    { label: "products", link: "/" },
    { label: "order", link: "/order" },
    { label: "contact", link: "/contact" },
  ];

  const urlParams: Params = useParams();
  const router = useRouter();

  const [editedParams, setEditedParam] = useState<string>("");
  const [selectedLabel, setSelectedLabel] = useState<string>("main menu");

  const selectedButton = "bg-mainBlack text-mainWhite border-0";

  const logout = () => {
    user.isLoading = true;
    user.userLogout().then(() => {
      user.isLoading = false;
    });
    router.refresh();
    // router.push("/");
  };

  useEffect(() => {
    categories.getAllCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (urlParams.name) {
      setEditedParam(urlParams.name.replaceAll("%20", " "));
    }
  }, [urlParams]);
  return (
    <div className="relative flex md:hidden flex-col ">
      <div className="grid grid-cols-2 p-4 pb-0 gap-2 ">
        <Button
          disableAnimation
          radius="none"
          className={` border-2 border-solid border-mainBlack capitalize text-sm rounded-md bg-mainWhite text-mainBlack ${
            selectedLabel === "main menu" ? selectedButton : ""
          }`}
          startContent={<IoMdMenu className="text-xl" />}
          onClick={() => {
            setSelectedLabel("main menu");
          }}
        >
          main menu
        </Button>
        <Button
          disableAnimation
          radius="none"
          className={`  border-2 border-solid border-mainBlack capitalize text-sm  rounded-md bg-mainWhite text-mainBlack ${
            selectedLabel === "sections" ? selectedButton : ""
          }`}
          startContent={<IoGridSharp className="text-xl" />}
          onClick={() => {
            setSelectedLabel("sections");
          }}
        >
          sections
        </Button>
      </div>

      <div className="flex justify-between items-center">
        <div
          className="flex items-start justify-center text-xl p-4"
          onClick={sidebar.hideWholeSidebar}
        >
          <MoveLeft className=" cursor-pointer" />
        </div>
        <div className="p-4">
          <h1 className="text-xl capitalize text-center">{selectedLabel}</h1>
        </div>
      </div>

      <Divider />

      {selectedLabel === "sections" ? (
        <>
          <div className="py-5 flex flex-col gap-3 capitalize px-5">
            {categories.categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/categories/${cat.attributes.name}`}
                className={`side-link ${
                  editedParams === cat.attributes.name && `text-mainPink`
                }`}
                onClick={sidebar.hideWholeSidebar}
              >
                {cat.attributes.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col ">
            <Divider />
            <div className="flex py-3 flex-col px-5 gap-2 capitalize">
              <div className="flex items-center text-lg gap-2 text-mainBlack/50">
                <LiaNewspaper />
                <Link href={"/order"}>track your order</Link>
              </div>
              <div className="flex items-center text-lg gap-2 text-mainBlack/50">
                <FaRegEye />
                <Link href={"#"}>products recently seen</Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="py-5 flex flex-col gap-3 capitalize px-5">
          {mainMenu.map((item) => (
            <Link
              key={item.label}
              href={item.link}
              className={`side-link ${
                editedParams === item.label && `text-mainPink`
              }`}
              onClick={sidebar.hideWholeSidebar}
            >
              {item.label}
            </Link>
          ))}
          <div className="w-full  flex flex-col gap-2 px-5 py-5">
            {isUserLoggedIn() && (
              <Button
                className="text-mainWhite bg-red-500 capitalize"
                onClick={logout}
              >
                logout
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default observer(SidebarResponsiveContent);
