"use client";
import Cookies from "js-cookie";
import { makeAutoObservable, runInAction } from "mobx";
import { Userdata } from "./specificTypes/userdata";
import { cartProductType } from "./specificTypes/cartProductType";
import { userCartProductType } from "./specificTypes/userCartProductType";
import { isUserLoggedIn } from "@/functions/credentials";

export class userStore {
  strapiUserdata: Userdata = {} as Userdata;

  isLoading: boolean = false;

  isMergingOrRemovingLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
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
        // console.log("this is user data : ", data);

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
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/cart-items`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${isUserLoggedIn()}`,
        },
        body: JSON.stringify({
          data: {
            product: productId.toString(),
            quantity: quantity,
            cart: this.strapiUserdata?.cart?.id.toString(),
          },
        }),
      }
    );

    return response.ok;
  };

  removeProductFromUserCart = async (cartItemId: number | string) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/cart-items/${cartItemId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${isUserLoggedIn()}`,
        },
      }
    );

    return response.ok;
  };

  updateUserCartProductQuantity = async (
    cartItemId: number | string,

    newQuantity: number
  ) => {
    return await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/cart-items/${cartItemId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${isUserLoggedIn()}`,
        },
        body: JSON.stringify({
          data: {
            quantity: newQuantity,
          },
        }),
      }
    );
  };

  mergeLocalCartWithUserCart = async (userCartItems: userCartProductType[]) => {
    const localCartItems: cartProductType[] = JSON.parse(
      sessionStorage.getItem("cart") ?? "[]"
    );

    for (const product of localCartItems) {
      const founded = userCartItems.find((userItem) => {
        return userItem.id === product.id;
      });

      if (!founded) {
        await this.addProductToUserCart(product.id, product.quantity);
      }
    }

    sessionStorage.removeItem("cart");

    return true;
  };

  clearLocalCart = async () => {
    sessionStorage.removeItem("cart");

    return true;
  };

  clearUserCart = async (userCartItems: userCartProductType[]) => {
    for (const product of userCartItems) {
      await this.removeProductFromUserCart(product.cartItemId);
    }
  };

  // setting states of the class

  set setIsMergingOrRemovingLoading(val: boolean) {
    this.isMergingOrRemovingLoading = val;
  }

  // updateCartQuantity() {} //Updates the quantity of a specific product in the shopping cart.

  // addAddress() {}

  // removeAddress() {}

  // addToWishList() {}

  // removeFromWishList() {}

  // addPaymentMethod() {}

  // removePaymentMethod() {}

  // updateUserProfile() {}

  // calculateOrderTotal() {} // Calculates the total amount for a given order, considering items, shipping, tax, and discounts.

  // applyDiscount() {} // user may have a discount copon

  // trackOrder() {}

  // cancelOrder() {}

  // getRecommendedProducts() {}

  // getOrderHistory() {}
}
