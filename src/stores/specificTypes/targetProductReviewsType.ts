export type PopulatedReview = {
  id: number;
  attributes: PopulatedReviewAttributes;
};

export type PopulatedReviewAttributes = {
  allowed: boolean;
  description: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  product: Product;
  user: User;
};

export type Product = {
  data: ProductData;
};

export type ProductData = {
  id: number;
  attributes: PurpleAttributes;
};

export type PurpleAttributes = {
  title: string;
  description: string;
  slug: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  type: string;
};

export type User = {
  data: UserData;
};

export type UserData = {
  id: number;
  attributes: FluffyAttributes;
};

export type FluffyAttributes = {
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: Date;
  updatedAt: Date;
  first_name: string;
  last_name: string;
};
