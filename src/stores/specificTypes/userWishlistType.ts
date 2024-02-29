export type UserWishlist = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  wishlist_items?: WishlistItem[];
};

export type WishlistItem = {
  id: number;
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
  type: "none" | "sale" | "deal" | "best_seller";
  thumbnail: Thumbnail;
  images: Thumbnail[];
  category: Category[];
  reviews: Review[];
  discount: Discount | null;
  sizes: any[];
  colors: Category[];
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
  provider: Provider;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
};

export enum EXT {
  Jpg = ".jpg",
}

export type Formats = {
  thumbnail: Large;
  medium: Large;
  small: Large;
  large: Large;
};

export type Large = {
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

export enum Provider {
  Local = "local",
}

export type Review = {
  id: number;
  title: string;
  allowed: boolean;
  description: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
};
