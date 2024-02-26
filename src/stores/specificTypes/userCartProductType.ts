import { cartProductType } from "./cartProductType";

export type userCartProductType = cartProductType & {
  cartItemId: number | string;
};
