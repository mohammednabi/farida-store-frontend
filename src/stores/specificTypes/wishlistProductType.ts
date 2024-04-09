import { Review } from "./userWishlistType";

export type userWishlistProductType = {
  wishlistItemId: string | number;
  id: string | number;
  imgSrc: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  reviews: Review[];
  localization: {
    title: string;
    desscription: string;
    slug: string;
  };
};
