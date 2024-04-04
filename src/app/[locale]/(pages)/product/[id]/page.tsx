"use client";

import Breads from "./components/Breads";
import InformationSection from "./components/InformationSection";
import ImagesSection from "./components/ImagesSection";
import DetailsSection from "./components/DetailsSection";
import AddToCartButton from "./components/AddToCartButton";
import ReviewsSection from "./components/ReviewsSection";
import { StoreContext } from "@/contexts/StoreContext";
import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { getTheLengthOfAllowedRatings } from "@/functions/getTheLengthOfAllowedRatings";

interface productProps {
  params: { id: string };
}

const ProductPage = ({ params }: productProps) => {
  const { products } = useContext(StoreContext);

  useEffect(() => {
    products.getSingleProduct(params.id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  return (
    <div className="relative">
      <AddToCartButton product={products.targetProduct} />

      <div className="relative px-5  medmob:px-10 lmob:px-20 sm:px-32 md:px-20 lg:px-10 pb-5 mt-5">
        <Breads
          title={products.targetProduct?.attributes?.slug.slice(0, 40) + "..."}
        />
        <div className="grid grid-cols-1 grid-rows-[auto_auto_auto] md:grid-cols-[3fr_6fr] lg:grid-cols-[2fr_6fr] xl:grid-cols-[1.5fr_6fr] md:grid-rows-1 pt-10 gap-10">
          <InformationSection />
          <div className="flex flex-col gap-20">
            <div className="grid grid-cols-1 grid-rows-[auto_auto] lg:grid-cols-2 lg:grid-rows-1 gap-10">
              <ImagesSection
                allImages={products.targetProduct?.attributes?.images}
              />
              <DetailsSection
                product={products.targetProduct}
                averageRating={products.getAverageRatings(
                  products.targetProductReviews
                )}
                priceAfterDiscount={products.getPriceAfterDiscount(
                  products.targetProduct?.attributes?.discount?.data,
                  products.targetProduct?.attributes?.price
                )}
                ratingsLength={getTheLengthOfAllowedRatings(
                  products.targetProductReviews
                )}
              />
            </div>

            <ReviewsSection product={products.targetProduct} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(ProductPage);
