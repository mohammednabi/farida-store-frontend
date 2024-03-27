export interface UserOrderDetails {
  id: number;
  total: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  order_notes: string;
  arrivedAt: Date;
  user_payment: null;
  user: Main;
  user_order_address: UserOrderAddress;
  order_items: OrderItem[];
  status: "delivery" | "placed" | "arrived";
}

export interface Main {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: Date;
  updatedAt: Date;
  first_name: string;
  last_name: string;
  order_details?: UserOrderDetails[];
}

export interface OrderItem {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  quantity: number;
}

export interface UserOrderAddress {
  id: number;
  state: string;
  city: string;
  country: string;
  postal_code: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  street: string;
  second_phone: string;
  fullname: string;
}

// export enum Email {
//   Medosara2011GmailCOM = "medosara2011@gmail.com",
// }

// export enum FirstName {
//   Mohammed = "mohammed",
// }

// export enum LastName {
//   Nabil = "nabil",
// }

// export enum Provider {
//   Local = "local",
// }

// export enum Username {
//   Nebo = "nebo",
// }
