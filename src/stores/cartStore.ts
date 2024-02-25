"use client";

import { makeAutoObservable, runInAction } from "mobx";

import { cartProductType } from "./specificTypes/cartProductType";
import Cookies from "js-cookie";
import { CartItem, UserCart } from "./specificTypes/userCartType";

export class CartStore {
  productsCount: number = 0;
  isCartMenuDisplayed: boolean = false;
  cartProducts: cartProductType[] = [];
  totalPrice: number = 0;
  userCart: UserCart = {} as UserCart;

  userCartItems: cartProductType[] = [];

  constructor() {
    makeAutoObservable(this);

    // initialized values
  }

  // get all carts products

  getAllCartItems() {
    if (Cookies.get("credentials")) {
      this.getUserCartItems();
    } else {
      this.getLocalCartProducts();
    }
  }

  // get all local carts products

  getLocalCartProducts() {
    const parseCart = JSON.parse(
      sessionStorage.getItem("cart") ?? "[]"
    ) as cartProductType[];

    runInAction(() => {
      this.productsCount = parseCart.length;
      this.cartProducts = parseCart;
    });

    this.getTotalPrice();
  }

  // gettting user cart items

  getUserCartItems = async () => {
    await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/users/me?populate[cart][populate][cart_items][populate][product][populate]=*`,
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
        console.log("this is user cart items data : ", data);

        runInAction(() => {
          this.userCart = data.cart;
        });

        let itemsOfUserCart: cartProductType[] = [];
        data.cart.cart_items.map((item: CartItem) => {
          const userCartItem: cartProductType = {
            id: item.quantity,
            imgSrc: `${process.env.NEXT_PUBLIC_HOST}${item.product.thumbnail.url}`,
            title: item.product.title,
            slug: item.product.slug,
            description: item.product.description,
            price: item.product.price,
            quantity: item.quantity,
          };

          itemsOfUserCart.push(userCartItem);
        });

        runInAction(() => {
          this.userCartItems = itemsOfUserCart;
          this.productsCount = itemsOfUserCart.length;
        });

        this.getTotalPrice();
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
    this.totalPrice = 0;

    let sum = 0;

    if (Cookies.get("credentials")) {
      this.userCartItems.forEach((product) => {
        sum = sum + product.price * product.quantity;
      });
    } else {
      this.cartProducts.forEach((product) => {
        sum = sum + product.price * product.quantity;
      });
    }

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
