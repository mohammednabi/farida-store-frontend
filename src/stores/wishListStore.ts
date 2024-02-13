import { makeAutoObservable } from "mobx";

import { product } from "./productsStore";

export class WishListStore {
  items: product[] = [];
  itemsCount: number = 0;

  constructor() {
    makeAutoObservable(this);
    this.getAllWishlistProducts();
  }

  addToWishlist(addedProduct: product) {
    const allWishlistProducts: product[] = JSON.parse(
      localStorage.getItem("wishlist") ?? "[]"
    );

    const productWasFounded = allWishlistProducts.find((product) => {
      return product.id === addedProduct.id;
    });

    if (!productWasFounded) {
      allWishlistProducts.push(addedProduct);
      this.setWishlist(allWishlistProducts);
    }
  }

  removeFromWishlist(productId: number) {
    const allWishlistProducts: product[] = JSON.parse(
      localStorage.getItem("wishlist") ?? "[]"
    );

    const filteredProducts = allWishlistProducts.filter((product) => {
      return product.id !== productId;
    });

    this.setWishlist(filteredProducts);
  }

  removeAllFromWishlist() {
    localStorage.setItem("wishlist", "[]");
    this.items = [];
    this.itemsCount = 0;
  }

  isInWishlist(productId: number) {
    const allWishlistProducts: product[] = JSON.parse(
      localStorage.getItem("wishlist") ?? "[]"
    );

    const founded = allWishlistProducts.find((product) => {
      return productId === product.id;
    });

    return founded;
  }

  // reused functions

  getAllWishlistProducts() {
    const allWishlistProducts: product[] = JSON.parse(
      localStorage.getItem("wishlist") ?? "[]"
    );
    this.items = allWishlistProducts;
    this.itemsCount = allWishlistProducts.length;
  }

  setWishlist(newValue: product[]) {
    localStorage.setItem("wishlist", JSON.stringify(newValue));
    this.items = newValue;
    this.itemsCount = newValue.length;
  }
}
