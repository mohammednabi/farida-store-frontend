"use client";

import Cookies from "js-cookie";
import { makeAutoObservable } from "mobx";
import { product } from "./productsStore";

export class CartStore {
  productsCount: number = 0;
  isCartMenuDisplayed: boolean = false;

  constructor() {
    makeAutoObservable(this);
    const parseCart = JSON.parse(
      localStorage.getItem("cart") ?? "[]"
    ) as product[];
    this.productsCount = parseCart.length;
  }

  addProduct = (product: product) => {
    const newProduct: product = {
      id: "",
      title: "",
      description: "",
      price: {
        currentPrice: 0,
        prePrice: undefined,
        discount: undefined,
        discountDuration: undefined,
      },
      images: {
        thumbnail: {
          id: "",
          url: "",
        },
        images: [],
      },
      rating: {
        averageRate: 0,
        ratings: [],
      },
      availabelInstock: 0,
      category: {
        id: "",
        name: "",
      },
      similarProducts: [],
    };

    let allAddedProducts: product[] = JSON.parse(
      localStorage.getItem("cart") ?? "[]"
    );

    const productWasFounded = allAddedProducts.find((p) => {
      return p.id === newProduct.id;
    });

    !productWasFounded && allAddedProducts.push(newProduct);

    localStorage.setItem("cart", JSON.stringify(allAddedProducts));
    this.productsCount = allAddedProducts.length;
  };
  deleteProduct = () => {
    this.productsCount--;
  };
  deleteAllProducts = () => {
    this.productsCount = 0;
  };

  displayCartMenu = () => {
    this.isCartMenuDisplayed = true;
  };

  hideCartMenu = () => {
    this.isCartMenuDisplayed = false;
  };
}
