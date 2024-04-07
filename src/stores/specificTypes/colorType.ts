export type color = {
  id: number;
  attributes: Attributes;
};

export type Attributes = {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  hex: string;
  locale: string;
  products: Products;
  localizations: Localizations;
};

export type Localizations = {
  data: MainDatum[];
};

export type MainDatum = {
  id: number;
  attributes: LocalizationsAttributes;
};

export type LocalizationsAttributes = {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  hex: string;
  locale: string;
};

export type Products = {
  data: ProductsDatum[];
};

export type ProductsDatum = {
  id: number;
  attributes: FluffyAttributes;
};

export type FluffyAttributes = {
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
