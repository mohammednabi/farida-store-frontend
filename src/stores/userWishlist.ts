import { makeAutoObservable, runInAction } from "mobx";
import { userCartProductType } from "./specificTypes/userCartProductType";
import { isUserLoggedIn } from "@/functions/credentials";
import { UserWishlist, WishlistItem } from "./specificTypes/userWishlistType";
import { getPriceAfterDiscount } from "@/functions/getPriceAfterDiscount";
import { userWishlistProductType } from "./specificTypes/wishlistProductType";

export class userWishListStore {
  userWishlist: UserWishlist = {} as UserWishlist;
  userWishlistProducts: userWishlistProductType[] = [];
  userWishlistProductsCount: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  getUserWishlistItems = async () => {
    await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/users/me?populate[wishlist][populate][wishlist_items][populate][product][populate]=*`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${isUserLoggedIn()}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data): void => {
        console.log("this is user wishlist items data : ", data);

        runInAction(() => {
          this.userWishlist = data.wishlist;
        });

        let itemsOfUserWishlist: userWishlistProductType[] = [];

        data.wishlist.wishlist_items.map((item: WishlistItem) => {
          const userWishListItem: userWishlistProductType = {
            wishlistItemId: item.id,
            id: item.product.id,
            imgSrc: `${process.env.NEXT_PUBLIC_HOST}${item.product.thumbnail.url}`,
            title: item.product.title,
            slug: item.product.slug,
            description: item.product.description,
            price: getPriceAfterDiscount(
              item.product.discount
                ? item.product.discount.discount_percent
                : 0,
              item.product.price
            ),
          };

          itemsOfUserWishlist.push(userWishListItem);
        });

        runInAction(() => {
          //   this.userCartItems = itemsOfUserCart;
          //     this.productsCount = itemsOfUserCart.length;

          this.userWishlistProducts = itemsOfUserWishlist;
          this.userWishlistProductsCount = itemsOfUserWishlist.length;
        });

        // console.log("this is user cart items ", itemsOfUserCart);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  addProductToUserWishlist = async (productId: string | number) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/wishlist-items`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${isUserLoggedIn()}`,
        },
        body: JSON.stringify({
          data: {
            product: productId.toString(),

            wishlist: this.userWishlist.id,
          },
        }),
      }
    );

    return response.ok;
  };

  removeProductFromUserWishlistByProductId = async (
    productId: string | number
  ) => {
    const wishlistItem = this.isFoundedInWishList(productId);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/wishlist-items/${wishlistItem?.wishlistItemId}`,
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

  isFoundedInWishList = (productId: number | string) => {
    const founded = this.userWishlistProducts.find((product) => {
      return product.id === productId;
    });
    return founded;
  };

  resetAllStates() {
    this.userWishlist = {} as UserWishlist;
    this.userWishlistProducts = [];
    this.userWishlistProductsCount = 0;
  }

  set setUserWishlistProductCount(val: number) {
    this.userWishlistProductsCount = val;
  }
}
