"use client";
import { StoreContext } from "@/contexts/StoreContext";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Input,
} from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { useRouter, usePathname } from "@/navigation";
import React, { useContext } from "react";

import { IoAddCircleOutline } from "react-icons/io5";
import { IoFilterOutline } from "react-icons/io5";

interface wishListFiltersProps {
  showFilters?: boolean;
  showAddNewBtn?: boolean;
}

const WishListFliters = ({
  showAddNewBtn = true,
  showFilters = true,
}: wishListFiltersProps) => {
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
    <div className=" relative hidden xl:block">
      <div className="flex flex-col gap-10 ">
        {showAddNewBtn && (
          <Button
            endContent={<IoAddCircleOutline />}
            className="bg-mainBlack text-mainWhite p-5 py-8 text-xl capitalize"
            onClick={goToHomePage}
          >
            add new item
          </Button>
        )}

        {showFilters && (
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
              // console.log("change wishlist filters to : ", selection);
            }}
          >
            {(item) => (
              <AutocompleteItem key={item.type}>{item.type}</AutocompleteItem>
            )}
          </Autocomplete>
        )}
      </div>
    </div>
  );
};

export default WishListFliters;
