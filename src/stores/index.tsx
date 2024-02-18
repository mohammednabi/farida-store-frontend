"use client"
import { StoreContext } from "@/contexts/StoreContext";
import { CartStore } from "./cartStore";
import { UserDropStore } from "./userDropStore";

import React from 'react'
import { userStore } from "./userStore";
import { SideBarStore } from "./sidebarStore";
import { ProductsStore } from "./productsStore";
import { CartSidebarStore } from "./cartSidebarStore";
import { FilterSidebarStore } from "./filterSidebarStore";
import { ProductsView } from "./productsViewStore";
import { SearchBoxStore } from "./searchBoxStore";
import { WishListStore } from "./wishListStore";
import { AdsSliderStore } from "./adsStore";
import { CategoriesStore } from "./categoriesStore";
import { ColorsStore } from "./colorsStore";


// cart store instance 

 const cartProducts = new CartStore()

// userDrop store instance

 const userDropInstance = new UserDropStore()

// user information store 

const userStoreInstance = new userStore()

// sidebar state store

const sidebarInstance = new SideBarStore()

// cart sidebar state store

const cartSidebarInstance = new CartSidebarStore()

// cart sidebar state store

const filterSidebarInstance = new FilterSidebarStore()

// search box state store

const searchBoxInstance = new SearchBoxStore()

// products store

const allProducts = new ProductsStore()

// products view style store

const productsViewStyle = new ProductsView()

// wish list  store

const wishlistProducts = new WishListStore()

// slider ads  store

const adsInstance = new AdsSliderStore()

// products categories store

const categoriesinstance = new CategoriesStore()

// products colors store

const colorsinstance = new ColorsStore()


// ==========================================================
// this object is for all stores that will for all states

export const store ={
    cart: cartProducts,
    userDrop: userDropInstance,
    user: userStoreInstance,
    sidebar: sidebarInstance,
    cartSidebar:cartSidebarInstance,
products:allProducts,
    filter: filterSidebarInstance,
    viewStyle: productsViewStyle,
    searchBox: searchBoxInstance,
    wishlist: wishlistProducts,
    ads: adsInstance,
    categories:categoriesinstance,
    colors:colorsinstance
}

interface indexChildren {
    children:React.JSX.Element
}



// store context provider

const StoreContextProvider = ({children}:indexChildren) => {
  return (
      <StoreContext.Provider value={store}>
      {children}
      </StoreContext.Provider>   
  )
}

export default StoreContextProvider