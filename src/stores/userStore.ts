"use client";
import { db } from "@/firebase/db";
import { doc, setDoc } from "firebase/firestore";
import { makeAutoObservable } from "mobx";

type product = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
};

type wishListProduct = {
  productId: string;
  name: string;
  price: number;
  imageUrl: string;
};

type paymentMethod = {
  id: string;
  type: string;
  cardNumber: string;
  expiryMonth: number;
  expiryYear: number;
  nameOnCard: string;
};

type singleOrder = {
  orderId: string;
  items: product[];
  status: string;
  totalItems: number;
  subTotal: number;
  discount: number;
  shipping: number;
  tax: number;
  total: number;
  createdAt: string;
  updatedAt: string;
};

type allUserData = {
  uid?: string;
  providerId?: string;
  email?: string;
  emailVerified?: boolean;
  phoneNumber?: string;
  password?: string;
  displayName?: string;
  firstName?: string | null;
  lastName?: string | null;
  photoURL?: string;
  disabled?: boolean; // Whether or not the user is disabled. true for disabled; false for enabled. If not provided, the default is false.
  metaData?: {
    creationTime: string;
    lastRefreshTime: string;
    lastSignInTime: string;
  };
  cart?: {
    items: product[];
    totalItems: number;
    subTotal: number;
    discount: string;
    shipping: number;
    tax: number;
    total: number;
  };
  paymentMethods?: paymentMethod[];

  orders?: singleOrder[];
  wishList?: wishListProduct[];

  address?: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
};

export class userStore {
  userData!: allUserData;

  constructor() {
    makeAutoObservable(this);
  }

  // user method

  addUserToUsersCollection = (userId: string, data: allUserData) => {
    const docRef = doc(db, "users", userId);

    return setDoc(docRef, {
      ...data,
    });
  };

  // user products methods

  addToCart() {}

  removeFromCart() {}

  clearCart() {}

  updateCartQuantity() {} //Updates the quantity of a specific product in the shopping cart.

  addAddress() {}

  removeAddress() {}

  addToWishList() {}

  removeFromWishList() {}

  addPaymentMethod() {}

  removePaymentMethod() {}

  updateUserProfile() {}

  calculateOrderTotal() {} // Calculates the total amount for a given order, considering items, shipping, tax, and discounts.

  applyDiscount() {} // user may have a discount copon

  trackOrder() {}

  cancelOrder() {}

  getRecommendedProducts() {}

  getOrderHistory() {}
}
