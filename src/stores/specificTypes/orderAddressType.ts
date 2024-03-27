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
  arrivedAt: Date;
  state: string;
  status: "delivery" | "placed" | "arrived";
  country: string;
  city: string;
  street: string;
  phone: string;
  second_phone: string;
  postal_code: string;
  user_payment: OrderItems;
  user: User;
  order_items: OrderItems;
}

export interface OrderItems {
  data: Datum[] | null;
}

export interface Datum {
  id: number;
  attributes: DatumAttributes;
}

export interface DatumAttributes {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  quantity: number;
}

export interface User {
  data: UserData;
}

export interface UserData {
  id: number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: Date;
  updatedAt: Date;
  first_name: string;
  last_name: string;
}

export interface Meta {}
