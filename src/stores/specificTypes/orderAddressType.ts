export interface OrderDetail {
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
  publishedAt: Date;
  order_notes: string;
  user_order_address: UserOrderAddress;
}

export interface UserOrderAddress {
  data: UserOrderAddressData;
}

export interface UserOrderAddressData {
  id: number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  state: string;
  city: string;
  country: string;
  postalcode: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  street: string;
  second_phone: string;
  fullname: string;
}

export interface Meta {}
