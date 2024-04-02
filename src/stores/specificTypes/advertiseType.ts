export type Advertise = {
  id: number;

  attributes: AdvertiseAttributes;
};

export type AdvertiseAttributes = {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  thumb: Thumb;
  locale: string;
};

export type Thumb = {
  data: Data;
};

export type Data = {
  id: number;
  attributes: DataAttributes;
};

export type DataAttributes = {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Formats = {
  thumbnail: Large;
  large: Large;
  medium: Large;
  small: Large;
};

export type Large = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string;
  width: number;
  height: number;
  size: number;
  url: string;
};
