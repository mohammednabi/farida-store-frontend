export interface MainAddressData {
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
  user_addresses: UserAddressType[];
}

export interface UserAddressType {
  id: number | string;
  state: string;
  city: string;
  country: string;
  postal_code: string;
  phone: string;
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
  street: string;
  second_phone: string;
  fullname?: string;
}
