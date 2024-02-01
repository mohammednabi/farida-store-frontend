"use client";
import { db } from "@/firebase/db";
import { User } from "firebase/auth";
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
  email?: string | null;
  emailVerified?: boolean;
  phoneNumber?: string | null;
  password?: string;
  displayName?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  photoURL?: string | null;
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
  userData: allUserData = {
    uid: "",
    displayName: "",
    email: "",
    emailVerified: false,
    firstName: "",
    lastName: "",
    photoURL: "",
    providerId: "",
    phoneNumber: "",
    password: "",
    orders: [],
    paymentMethods: [],
    cart: {
      items: [],
      discount: "",
      shipping: 0,
      subTotal: 0,
      tax: 0,
      total: 0,
      totalItems: 0,
    },
    disabled: false,
    address: {
      state: "",
      city: "",
      country: "",
      postalCode: "",
      street: "",
    },
    wishList: [],
    metaData: {
      creationTime: "",
      lastRefreshTime: "",
      lastSignInTime: "",
    },
  };

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

  // set user data

  setUserData = (user: User | null) => {
    //   this.userData.uid = user?.uid;
    //   const {uid } = this.userData

    this.userData.uid = user?.uid;
    this.userData.displayName = user?.displayName;
    this.userData.photoURL = user?.photoURL;
    this.userData.email = user?.email;
    this.userData.emailVerified = user?.emailVerified;
    this.userData.providerId = user?.providerId;
    this.userData.phoneNumber = user?.phoneNumber;
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
