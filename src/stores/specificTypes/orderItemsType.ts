export interface OrderDetails {
  data: MainData;
  meta: Meta;
}

export interface MainData {
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  total: number;
  createdAt: Date;
  updatedAt: Date;
  arrivedAt: Date;
  publishedAt: Date;
  order_notes: string;
  order_items: OrderItems;
}

export interface TentacledAttributes {
  title: string;
  description: string;
  slug: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  type: string;
  thumbnail: Thumbnail;
  images: Images;
  category: Category;
  reviews: Reviews;
  discount: Discount;
  sizes: Sizes;
  colors: Category;
  locale: string;
  localizations: Localizations;
}

export interface ProductData {
  id: number;
  attributes: TentacledAttributes;
}

export interface Product {
  data: ProductData;
}

export interface FluffyAttributes {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  quantity: number;
  product: Product;
}

export interface OrderItemsDatum {
  id: number;
  attributes: FluffyAttributes;
}

export interface OrderItems {
  data: OrderItemsDatum[];
}

export interface Category {
  data: CategoryDatum[];
}

export interface CategoryDatum {
  id: number;
  attributes: StickyAttributes;
}

export interface StickyAttributes {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  hex?: string;
}

export interface Discount {
  data: DiscountData | null;
}

export interface DiscountData {
  id: number;
  attributes: IndigoAttributes;
}

export interface IndigoAttributes {
  name: string;
  discount_percent: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  active: boolean;
  expiration: Date;
}

export interface Images {
  data: DAT[];
}

export interface DAT {
  id: number;
  attributes: IndecentAttributes;
}

export interface IndecentAttributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number | null;
  height: number | null;
  formats: Formats | null;
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
}

export enum EXT {
  Avif = ".avif",
  Jpg = ".jpg",
}

export interface Formats {
  thumbnail: Large;
  small: Large;
  medium?: Large;
  large?: Large;
}

export interface Large {
  name: string;
  hash: string;
  ext: EXT;
  mime: MIME;
  path: null;
  width: number;
  height: number;
  size: number;
  url: string;
}

export enum MIME {
  ImageAvif = "image/avif",
  ImageJPEG = "image/jpeg",
}

export enum Provider {
  Local = "local",
}

export interface Thumbnail {
  data: DAT;
}

export interface Meta {}

export interface Localizations {
  data: LocalizationsDatum[];
}

export interface LocalizationsDatum {
  id: number;
  attributes: HilariousAttributes;
}

export interface HilariousAttributes {
  title: string;
  description: string;
  slug: string;
  price: number;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
}

export interface Sizes {
  data: ProductInventoryData[];
}

export interface ProductInventoryData {
  id: number;
  attributes: AmbitiousAttributes;
}

export interface AmbitiousAttributes {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  value: string;
}

export interface Reviews {
  data: ReviewsDatum[];
}

export interface ReviewsDatum {
  id: number;
  attributes: CunningAttributes;
}

export interface CunningAttributes {
  description: string;
  rating: number;
  allowed: boolean;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}
