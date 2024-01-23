"use client"
import { makeAutoObservable } from "mobx";

type product = {
            productId: string
            name: string
            price: number
            quantity: number
            total: number
}

type wishListProduct = {
     productId: string
            name: string
            price: number
           imageUrl:string
}

type paymentMethod = {
    id: string
    type: string
    cardNumber: string
    expiryMonth: number
    expiryYear: number
    nameOnCard:string
}

type singleOrder = {
    orderId: string
    items: product[]
    status: string
    totalItems: number
        subTotal: number
        discount: number
        shipping: number
        tax: number
    total: number
    createdAt: string
        updatedAt:string
}

export class userStore {

    uid?: string
    providerId?: string
    email?: string
    emailVerified: boolean = false
    phoneNumber?: string
    password?: string
    displayName?: string
    photoURL?: string
    disabled?: boolean  // Whether or not the user is disabled. true for disabled; false for enabled. If not provided, the default is false.
    metaData?: {
        creationTime: string;
        lastRefreshTime: string;
        lastSignInTime: string;
    }
    cart?: {
        items: product[]
        totalItems: number
        subTotal: number
        discount: number
        shipping: number
        tax: number
        total: number
        
    }
    paymentMethods?: paymentMethod[]

    orders?: singleOrder[]
    wishList?:wishListProduct[]

    address?: {
        street:string
        city:string
        state:string
        postalCode:string
        country:string
    }



    constructor() {
        makeAutoObservable(this)
        

     
    }



    

    
    addToCart() { }
    
    removeFromCart() { }

    clearCart() { }
    
    updateCartQuantity(){} //Updates the quantity of a specific product in the shopping cart.
    
    addAddress() { }
    
    removeAddress() { }
    

    addToWishList(){ }
    
    removeFromWishList(){ }

    addPaymentMethod() { }
    
    removePaymentMethod() { }
    
    updateUserProfile(){}

    calculateOrderTotal(){} // Calculates the total amount for a given order, considering items, shipping, tax, and discounts.

    applyDiscount() { } // user may have a discount copon
    
    trackOrder() { }
    
    cancelOrder(){}

    getRecommendedProducts(){}

    getOrderHistory() { }
    
    

}