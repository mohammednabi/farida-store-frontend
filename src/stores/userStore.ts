"use client";
import Cookies from "js-cookie";
import { makeAutoObservable, runInAction } from "mobx";
import { Userdata } from "./specificTypes/userdata";

export class userStore {
  strapiUserdata: Userdata = {} as Userdata;

  isLoading: boolean = false;
  token?: string = "";

  constructor() {
    makeAutoObservable(this);
    if (Cookies.get("credentials")) {
      runInAction(() => {
        this.token = Cookies.get("credentials");
      });
    } else {
      this.token = "";
    }
  }

  // get user data

  getUserData = async () => {
    await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/users/me?populate=*`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("credentials")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data): void => {
        console.log("this is user data : ", data);

        runInAction(() => {
          this.strapiUserdata = data;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // user logged out

  userLogout() {
    const logoutPromise = new Promise((resolve, reject) => {
      resolve(Cookies.remove("credentials"));
    });

    return logoutPromise;
  }

  // user products methods

  addProductToUserCart = async (
    productId: string | number,
    quantity: number
  ) => {
    return await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/cart-items`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
        body: JSON.stringify({
          data: {
            product: `${productId}`,
            quantity: quantity,
            cart: `${this.strapiUserdata.cart.id}`,
          },
        }),
      }
    );
  };

  removeProductFromUserCart = async (cartItemId: number | string) => {
    return await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/cart-items/${cartItemId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
      }
    );
  };

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
