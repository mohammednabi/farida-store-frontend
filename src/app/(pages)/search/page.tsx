import FiltersSection from "@/app/components/FiltersSection";
import ProductsSection from "@/app/components/ProductsSection";
import React from "react";

interface searchPageProps {
  searchParams: {
    q: string;
  };
}

const SearchPage = ({ searchParams }: searchPageProps) => {
  return (
    <div>
      <div className=" flex flex-wrap px-10 md:px-20 text-2xl md:text-4xl items-center justify-center py-10">
        <h1 className="  font-bold capitalize  text-center ">
          search result :
        </h1>
        <q className="text-center">{searchParams.q}</q>
      </div>

      <FiltersSection />
      <ProductsSection />
    </div>
  );
};

export default SearchPage;
