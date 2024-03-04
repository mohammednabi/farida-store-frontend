import { isUserLoggedIn } from "@/functions/credentials";
import { makeAutoObservable, runInAction } from "mobx";
import { userCartProductType } from "./specificTypes/userCartProductType";

export class OrdersStore {
  isCreatingOrderLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  addNewUserAddress = async (userAddressData: {
    street: string;
    state: string;
    city: string;
    country: string;
    postalcode: string;
    phone: string;
    userId: string;
    second_phone: string;
    fullname: string;
  }) => {
    const response = await fetch("http://localhost:1337/api/user-addresses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${isUserLoggedIn()}`,
      },
      body: JSON.stringify({
        data: {
          street: userAddressData.street,
          state: userAddressData.state,
          city: userAddressData.city,
          country: userAddressData.country,
          postalcode: userAddressData.postalcode,
          phone: userAddressData.phone,
          user: userAddressData.userId,
          second_phone: userAddressData.second_phone,
          fullname: userAddressData.fullname,
        },
      }),
    });

    if (response.ok) {
      let data = await response.json();

      // console.log("this is the user address data inside the promise  : ", data);

      return data;
    } else {
      return null;
    }
  };

  addNewUserPaymentMethod = async () => {};

  createNewOrderItem = async (
    productId: string | number,
    quantity: number,
    orderDetailId: string | number
  ) => {
    let response = await fetch("http://localhost:1337/api/order-items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${isUserLoggedIn()}`,
      },
      body: JSON.stringify({
        data: {
          order_detail: orderDetailId,
          product: productId,
          quantity: quantity,
        },
      }),
    });

    if (response.ok) {
      let data = await response.json();

      return data;
    } else {
      return null;
    }
  };

  createNewOrder = async (newOrderData: {
    totalPrice: number;
    userPaymentId: string | null;
    userId: string | null;
    orderAddressId: string | null;
    orderNotes: string | null;
    // orderItemsIds: string[];
  }) => {
    let response = await fetch("http://localhost:1337/api/order-details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${isUserLoggedIn()}`,
      },
      body: JSON.stringify({
        data: {
          total: newOrderData.totalPrice,
          user_payment: newOrderData.userPaymentId,
          user: newOrderData.userId,
          user_order_address: newOrderData.orderAddressId,
          order_notes: newOrderData.orderNotes,
          //   order_items: newOrderData.orderItemsIds,
        },
      }),
    });

    // "total": 0,
    // "user_payment": "string or id",
    // "user": "string or id",
    // "user_order_address": "string or id",
    // "order_notes": "string",
    // "order_cart_items": [
    //   "string or id",
    //   "string or id"
    // ]

    if (response.ok) {
      let data = await response.json();

      //  console.log("this is the user address data inside the promise  : ", data);

      return data;
    } else {
      return null;
    }
  };

  createOrderItemsFromCart = async (
    cartItems: userCartProductType[],
    orderDetailId: number | string
  ) => {
    cartItems.forEach((item) => {
      this.createNewOrderItem(item.id, item.quantity, orderDetailId).then();
    });
  };
  set setIsCreatingOrderLoading(val: boolean) {
    this.isCreatingOrderLoading = val;
  }
}
