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
  id: number;
  state: State;
  city: City;
  country: Country;
  postalcode: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  street: string;
  second_phone: string;
  fullname: string;
}

export enum City {
  CityLuxor = "Luxor",
  Luxor = "luxor",
  القاهره = "القاهره",
}

export enum Country {
  CountryEgypt = "egypt",
  Egypt = "Egypt",
  PurpleEgypt = "Egypt ",
}

export enum State {
  Egypt = "egypt",
  StateEgypt = "Egypt",
  الإسكندرية = "الإسكندرية",
}
