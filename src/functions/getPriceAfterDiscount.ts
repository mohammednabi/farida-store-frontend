import { Data } from "@/stores/specificTypes/strapiProductType";

export const getPriceAfterDiscount = (
  discountPercent: number,
  currentPrice: number
) => {
  if (discountPercent > 0) {
    let discountValue = (discountPercent * currentPrice) / 100;
    return Number((currentPrice - discountValue).toFixed(2));
  } else {
    return currentPrice;
  }
};
