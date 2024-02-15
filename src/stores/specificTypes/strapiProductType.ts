export type strapiProductType = {
  id: number;
  attributes: ProductAttributes;
};

export type ProductAttributes = {
  title: string;
  description: string;
  slug: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  thumbnail: Thumbnail;
  images: Images;
  inventory: Inventory;
  category: Category;
  reviews: Reviews;
  discount: Discount;
  sizes: Category;
  colors: Category;
};

export type Category = {
  data: CategoryData[];
};

export type CategoryData = {
  id: number;
  attributes: PurpleAttributes;
};

export type PurpleAttributes = {
  name?: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  hex?: string;
  available_in_stock?: number;
  value?: string;
};

export type Discount = {
  data: Data;
};

export type Data = {
  id: number;
  attributes: FluffyAttributes;
};

export type FluffyAttributes = {
  name: string;
  discount_percent: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  active: boolean;
  expiration: Date;
};

export type Images = {
  thumbnail: { id: string; url: string };
  data: ImagesData[];
};

export type ImagesData = {
  id: number;
  attributes: TentacledAttributes;
};

export type TentacledAttributes = {
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

export type Inventory = {
  data: CategoryData;
};

export type Reviews = {
  data: Datum[];
};

export type Datum = {
  id: number;
  attributes: StickyAttributes;
};

export type StickyAttributes = {
  title: string;
  description: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
};

export type Thumbnail = {
  data: ImagesData;
};
