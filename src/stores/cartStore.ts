"use client";

import Cookies from "js-cookie";
import { makeAutoObservable } from "mobx";
import { product } from "./productsStore";

export class CartStore {
  productsCount: number = 0;
  isCartMenuDisplayed: boolean = false;
  cartProducts: product[] = [];

  constructor() {
    makeAutoObservable(this);
    const parseCart = JSON.parse(
      localStorage.getItem("cart") ?? "[]"
    ) as product[];
    this.productsCount = parseCart.length;
    this.cartProducts = parseCart;
  }

  // adding product to cart

  addProduct = (activeProduct: product) => {
    let allAddedProducts: product[] = JSON.parse(
      localStorage.getItem("cart") ?? "[]"
    );

    const productWasFounded = allAddedProducts.find((p) => {
      return p.id === activeProduct.id;
    });

    !productWasFounded && allAddedProducts.push(activeProduct);

    localStorage.setItem("cart", JSON.stringify(allAddedProducts));
    this.productsCount = allAddedProducts.length;
    this.cartProducts = allAddedProducts;
  };

  // delete product from cart

  deleteProduct = () => {
    this.productsCount--;
  };

  // delete all products from cart

  deleteAllProducts = () => {
    this.productsCount = 0;
  };

  // display cart menu

  displayCartMenu = () => {
    this.isCartMenuDisplayed = true;
  };

  // hide cart menu

  hideCartMenu = () => {
    this.isCartMenuDisplayed = false;
  };
}
