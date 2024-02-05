"use client";

import Cookies from "js-cookie";
import { makeAutoObservable } from "mobx";
import { product } from "./productsStore";
import { cartProduct } from "./generalTypes";

export class CartStore {
  productsCount: number = 0;
  isCartMenuDisplayed: boolean = false;
  cartProducts: cartProduct[] = [];
  totalPrice: number = 0;

  constructor() {
    makeAutoObservable(this);

    // initialized values
    const parseCart = JSON.parse(
      localStorage.getItem("cart") ?? "[]"
    ) as cartProduct[];
    this.productsCount = parseCart.length;
    this.cartProducts = parseCart;

    this.getTotalPrice();
  }

  // adding product to cart

  addProduct = (activeProduct: cartProduct) => {
    let allAddedProducts: cartProduct[] = JSON.parse(
      localStorage.getItem("cart") ?? "[]"
    );

    const productWasFounded = allAddedProducts.find((p) => {
      return p.id === activeProduct.id;
    });

    const newPoduct: cartProduct = { ...activeProduct };

    !productWasFounded && allAddedProducts.push(newPoduct);

    localStorage.setItem("cart", JSON.stringify(allAddedProducts));
    this.productsCount = allAddedProducts.length;
    this.cartProducts = allAddedProducts;
    this.getTotalPrice();
  };

  // delete product from cart

  deleteProduct = (productId: string) => {
    let allCartProducts: cartProduct[] = JSON.parse(
      localStorage.getItem("cart") ?? "[]"
    );

    const filteredProducts = allCartProducts.filter((product) => {
      return product.id !== productId;
    });

    localStorage.setItem("cart", JSON.stringify(filteredProducts));

    this.productsCount = filteredProducts.length;
    this.cartProducts = filteredProducts;
    this.getTotalPrice();
  };

  // delete all products from cart

  deleteAllProducts = () => {
    localStorage.setItem("cart", "[]");

    this.productsCount = 0;
    this.cartProducts = [];
    this.totalPrice = 0;
  };

  // get total products prices

  getTotalPrice() {
    let sum = 0;
    this.cartProducts.forEach((product) => {
      sum = sum + product.price.currentPrice * product.quantity;
    });

    this.totalPrice = sum;
  }

  // change the quantity of the cart product

  changeQuantity(productId: string, newQuantity: number) {
    const parsedCart: cartProduct[] = JSON.parse(
      localStorage.getItem("cart") ?? "[]"
    );

    const editedCart = parsedCart.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: newQuantity };
      } else {
        return product;
      }
    });

    localStorage.setItem("cart", JSON.stringify(editedCart));
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
