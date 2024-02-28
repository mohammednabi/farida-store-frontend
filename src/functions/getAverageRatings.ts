import { Datum } from "@/stores/specificTypes/strapiProductType";
import { Review } from "@/stores/specificTypes/userWishlistType";

export const getAverageRatings = (ratings: Review[]) => {
  let sum = 0;
  let avg = 0;

  if (ratings.length > 0) {
    ratings.map((p) => {
      sum = sum + p.rating;
    });

    avg = sum / ratings.length;

    return avg;
  } else {
    return 0;
  }
};
