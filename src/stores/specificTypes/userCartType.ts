import { strapiProductType } from "./strapiProductType";

// export type CartItem = {
//   id: number;
//   quantity: number;
//   createdAt: Date;
//   updatedAt: Date;
//   publishedAt: Date;
//   product: strapiProductType;
// };

export type UserCart = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  cart_items?: CartItem[];
};

export type CartItem = {
  id: number;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  product: Product;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  slug: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  type: "none" | "sale" | "deal" | "best_seller";
  thumbnail: Thumbnail;
  images: Thumbnail[];
  category: Category[];
  reviews: Review[];
  discount: Discount;
  sizes: any[];
  colors: Category[];
  localizations: Localization[];
};

export type Category = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  hex?: string;
};

export type Discount = {
  id: number;
  name: string;
  discount_percent: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  active: boolean;
  expiration: Date;
};

export type Thumbnail = {
  id: number;
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
};

export enum EXT {
  Jpg = ".jpg",
}

export type Formats = {
  thumbnail: Medium;
  medium: Medium;
  small: Medium;
};

export type Medium = {
  name: string;
  hash: string;
  ext: EXT;
  mime: MIME;
  path: null;
  width: number;
  height: number;
  size: number;
  url: string;
};

export enum MIME {
  ImageJPEG = "image/jpeg",
}

export type Review = {
  id: number;
  title: string;
  description: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
};

export type Localization = {
  id: number;
  title: string;
  description: string;
  slug: string;
  price: number;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
};
