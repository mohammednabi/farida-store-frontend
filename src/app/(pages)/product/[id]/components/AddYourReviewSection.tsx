"use client";
import LoadingOverlay from "@/components/LoadingOverlay";
import { StoreContext } from "@/contexts/StoreContext";
import { Button, Textarea } from "@nextui-org/react";
import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import ReactStars from "react-rating-star-with-type";

interface AddYourReviewSectionProps {
  productId: string | number;
}

const AddYourReviewSection = ({ productId }: AddYourReviewSectionProps) => {
  const { user, products } = useContext(StoreContext);

  const submitReview = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user.userReviewDescription.length > 0 && user.userReviewRating > 0) {
      user.addReviewToProduct(productId).then((ok) => {
        if (ok) {
          user.resetAllAddReviewSectionStates();
          products.getTargetProductsReviews(productId.toString());
        }
      });
    }
  };

  return (
    <div className="relative mt-10 flex flex-col gap-3">
      {user.userReviewLoading && <LoadingOverlay />}
      <h1 className="text-lg capitalize">add your rating and review</h1>

      <form
        onSubmit={(e) => {
          submitReview(e);
        }}
        className="flex flex-col items-start gap-5"
      >
        <div className="flex items-center gap-5">
          <h1 className="text-sm capitalize"> your rating :</h1>
          <ReactStars
            value={user.userReviewRating}
            count={5}
            filledIcon={<FaStar />}
            halfIcon={<FaStarHalfAlt />}
            emptyIcon={<FaRegStar />}
            isEdit
            isHalf
            onChange={(value) => {
              user.setUserReviewRating = value;
            }}
            size="1.3rem"
          />
        </div>
        <Textarea
          value={user.userReviewDescription}
          placeholder="Your Review"
          radius="none"
          minRows={5}
          onChange={(e) => {
            user.setUserReviewDescription = e.target.value;
          }}
        />
        <Button
          radius="sm"
          className="bg-mainBlack text-mainWhite capitalize text-lg"
          type="submit"
        >
          submit
        </Button>
      </form>
    </div>
  );
};

export default observer(AddYourReviewSection);
