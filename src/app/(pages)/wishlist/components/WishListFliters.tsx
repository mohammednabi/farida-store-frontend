"use client";
import { StoreContext } from "@/contexts/StoreContext";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Input,
} from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useContext } from "react";

import { IoAddCircleOutline } from "react-icons/io5";
import { IoFilterOutline } from "react-icons/io5";

const WishListFliters = () => {
  const { userWishlist } = useContext(StoreContext);

  const filters = [
    { type: "Rating" },
    { type: "Prices Up" },
    { type: "Prices Down" },
    { type: "A-Z" },
  ];

  const router = useRouter();
  const pathname = usePathname();

  const goToHomePage = () => {
    router.push("/");
  };

  const setFilter = (selection: any) => {
    // if (selection) {
    //   router.push(`${pathname}?sortby=${selection}`);
    //   userWishlist.sortUserWishlistItems(selection);
    // } else {
    //   router.push(`${pathname}`);
    // }
    userWishlist.sortUserWishlistItems(selection);
  };

  return (
    <div className=" relative">
      <div className="flex flex-col gap-10 ">
        <Button
          endContent={<IoAddCircleOutline />}
          className="bg-mainBlack text-mainWhite p-5 py-8 text-2xl capitalize"
          onClick={goToHomePage}
        >
          add new item
        </Button>

        <Autocomplete
          label="Filters"
          placeholder="Filter by ->"
          defaultItems={filters}
          variant="faded"
          startContent={<IoFilterOutline />}
          className="border-mainPink"
          color="success"
          classNames={{
            popoverContent: "bg-emerald-500 text-mainWhite ",
          }}
          onSelectionChange={(selection) => {
            setFilter(selection);
            console.log("change wishlist filters to : ", selection);
          }}
        >
          {(item) => (
            <AutocompleteItem key={item.type}>{item.type}</AutocompleteItem>
          )}
        </Autocomplete>
      </div>
    </div>
  );
};

export default WishListFliters;
