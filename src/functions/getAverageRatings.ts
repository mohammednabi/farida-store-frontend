import { Datum } from "@/stores/specificTypes/strapiProductType";
import { Review } from "@/stores/specificTypes/userWishlistType";

export const getAverageRatings = (ratings: Review[]) => {
  let sum = 0;
  let avg = 0;
  let allowedRatingsLength = 0;

  if (ratings.length > 0) {
    ratings.forEach((p) => {
      if (p.allowed) {
        sum = sum + p.rating;
        allowedRatingsLength = allowedRatingsLength + 1;
      }
    });

    avg = sum / allowedRatingsLength;

    return avg;
  } else {
    return 0;
  }
};
