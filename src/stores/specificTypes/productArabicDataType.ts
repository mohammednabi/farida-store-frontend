export type ProductArabicData = {
  id: number;
  attributes: ProductArabicDataAttributes;
};

export type ProductArabicDataAttributes = {
  title: string;
  description: string;
  slug: string;
  price: number;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  thumbnail: Category;
  images: ArabicImages;
  category: Category;
  colors: Colors;
  discount: Discount;
  reviews: Category;
  sizes: Category;
  product_inventory: Category;
  localizations: Localizations;
};

export type Category = {
  data: DataDatum[];
};

export type DataDatum = {
  id: number;
  attributes: PurpleAttributes;
};

export type PurpleAttributes = {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  hex?: string;
};

export type ArabicImagesData = {
  id: number;
  attributes: FluffyAttributes;
};

export type FluffyAttributes = {
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
  thumbnail: Large;
  small: Large;
  medium?: Large;
  large?: Large;
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
  sizeInBytes: number;
  url: string;
};

export enum MIME {
  ImageJPEG = "image/jpeg",
}

export type Colors = {
  data: DataDatum[];
};

export type Discount = {
  data: DataClass;
};

export type DataClass = {
  id: number;
  attributes: TentacledAttributes;
};

export type TentacledAttributes = {
  name: string;
  discount_percent: number;
  active: boolean;
  expiration: Date;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
};

export type ArabicImages = {
  data: ArabicImagesData[];
};

export type Localizations = {
  data: LocalizationsDatum[];
};

export type LocalizationsDatum = {
  id: number;
  attributes: StickyAttributes;
};

export type StickyAttributes = {
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
