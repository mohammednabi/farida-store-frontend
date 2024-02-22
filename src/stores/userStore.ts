"use client";
import { db } from "@/firebase/db";
import { User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Cookies from "js-cookie";
import { makeAutoObservable, runInAction } from "mobx";
import { Userdata } from "./specificTypes/userdata";

export class userStore {
  strapiUserdata: Userdata = {} as Userdata;

  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  // user method

  // addUserToUsersCollection = (userId: string, data: allUserData) => {
  //   const docRef = doc(db, "users", userId);

  //   return setDoc(docRef, {
  //     ...data,
  //   });
  // };

  // set user data

  // setUserData = (user: User | null) => {
  //   //   this.userData.uid = user?.uid;
  //   //   const {uid } = this.userData

  //   this.userData.uid = user?.uid;
  //   this.userData.displayName = user?.displayName;
  //   this.userData.photoURL = user?.photoURL;
  //   this.userData.email = user?.email;
  //   this.userData.emailVerified = user?.emailVerified;
  //   this.userData.providerId = user?.providerId;
  //   this.userData.phoneNumber = user?.phoneNumber;
  // };

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
