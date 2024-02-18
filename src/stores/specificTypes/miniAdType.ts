export type MiniAdType = {
  id: number;
  attributes: Attributes;
};

export type Attributes = {
  content: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
};
