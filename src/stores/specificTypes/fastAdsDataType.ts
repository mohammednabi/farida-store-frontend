export interface FastAdsMainResponse {
  data: FastAd[];
  meta: Meta;
}

export interface FastAd {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  ad: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
