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
};
