export type CategoryType = {
  id: number;
  attributes: CategoryAttributes;
};

export type CategoryAttributes = {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  products: Products;
  thumbnail: Thumbnail;
};

export type Products = {
  data: Datum[];
};

export type Datum = {
  id: number;
  attributes: DatumAttributes;
};

export type DatumAttributes = {
  title: string;
  description: string;
  slug: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
};

export type Thumbnail = {
  data: Data;
};

export type Data = {
  id: number;
  attributes: DataAttributes;
};

export type DataAttributes = {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
};

export type Formats = {
  thumbnail: Large;
  large: Large;
  small: Large;
  medium: Large;
};

export type Large = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null;
  width: number;
  height: number;
  size: number;
  url: string;
};
