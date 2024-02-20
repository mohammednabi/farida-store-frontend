"use client";

import { makeAutoObservable } from "mobx";

import { cartProductType } from "./specificTypes/cartProductType";

export class CartStore {
  productsCount: number = 0;
  isCartMenuDisplayed: boolean = false;
  cartProducts: cartProductType[] = [];
  totalPrice: number = 0;

  constructor() {
    makeAutoObservable(this);

    // initialized values
    const parseCart = JSON.parse(
      sessionStorage.getItem("cart") ?? "[]"
    ) as cartProductType[];
    this.productsCount = parseCart.length;
    this.cartProducts = parseCart;

    this.getTotalPrice();
  }

  // adding product to cart

  addProduct = (activeProduct: cartProductType) => {
    let allAddedProducts: cartProductType[] = JSON.parse(
      sessionStorage.getItem("cart") ?? "[]"
    );

    const productWasFounded = allAddedProducts.find((p) => {
      return p.id === activeProduct.id;
    });

    const newPoduct: cartProductType = { ...activeProduct };

    !productWasFounded && allAddedProducts.push(newPoduct);

    sessionStorage.setItem("cart", JSON.stringify(allAddedProducts));
    this.productsCount = allAddedProducts.length;
    this.cartProducts = allAddedProducts;
    this.getTotalPrice();
  };

  // delete product from cart

  deleteProduct = (productId: number) => {
    let allCartProducts: cartProductType[] = JSON.parse(
      sessionStorage.getItem("cart") ?? "[]"
    );

    const filteredProducts = allCartProducts.filter((product) => {
      return product.id !== productId;
    });

    sessionStorage.setItem("cart", JSON.stringify(filteredProducts));

    this.productsCount = filteredProducts.length;
    this.cartProducts = filteredProducts;
    this.getTotalPrice();
  };

  // delete all products from cart

  deleteAllProducts = () => {
    sessionStorage.setItem("cart", "[]");

    this.productsCount = 0;
    this.cartProducts = [];
    this.totalPrice = 0;
  };

  // is founded in the cart

  isInCart(productId: number) {
    const allCartProducts: cartProductType[] = JSON.parse(
      sessionStorage.getItem("cart") ?? "[]"
    );

    const founded = allCartProducts.find((product) => {
      return product.id === productId;
    });

    return founded;
  }

  // get total products prices

  getTotalPrice() {
    let sum = 0;
    this.cartProducts.forEach((product) => {
      sum = sum + product.price * product.quantity;
    });

    this.totalPrice = sum;
  }

  // change the quantity of the cart product

  changeQuantity(productId: number, newQuantity: number) {
    const parsedCart: cartProductType[] = JSON.parse(
      sessionStorage.getItem("cart") ?? "[]"
    );

    const editedCart = parsedCart.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: newQuantity };
      } else {
        return product;
      }
    });

    sessionStorage.setItem("cart", JSON.stringify(editedCart));
    this.cartProducts = editedCart;
    this.productsCount = editedCart.length;
    this.getTotalPrice();
  }

  // display cart menu

  displayCartMenu = () => {
    this.isCartMenuDisplayed = true;
  };

  // hide cart menu

  hideCartMenu = () => {
    this.isCartMenuDisplayed = false;
  };
}
