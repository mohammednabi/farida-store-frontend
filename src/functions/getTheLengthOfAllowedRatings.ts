import { Reviews } from "@/stores/specificTypes/strapiProductType";
import { PopulatedReview } from "@/stores/specificTypes/targetProductReviewsType";
import { Review } from "@/stores/specificTypes/userWishlistType";

export const getTheLengthOfAllowedRatings = (
  ratings: PopulatedReview[] | Reviews
) => {
  let length = 0;

  if (Array.isArray(ratings)) {
    ratings.forEach((rate) => {
      if (rate.attributes.allowed) {
        length++;
      }
    });
  } else {
    ratings.data.forEach((rate) => {
      if (rate.attributes.allowed) {
        length++;
      }
    });
  }

  return length;
};
