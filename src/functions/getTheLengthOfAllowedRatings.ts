import { PopulatedReview } from "@/stores/specificTypes/targetProductReviewsType";
import { Review } from "@/stores/specificTypes/userWishlistType";

export const getTheLengthOfAllowedRatings = (ratings: PopulatedReview[]) => {
  let length = 0;

  ratings.forEach((rate) => {
    if (rate.attributes.allowed) {
      length++;
    }
  });

  return length;
};
