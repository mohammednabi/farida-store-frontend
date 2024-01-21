"use client"

import { action, makeObservable,makeAutoObservable ,observable } from "mobx"


class CartStore
{
    productsCount: number = 0
    
    constructor()
    {
        makeObservable(this, {
            productsCount: observable,
            addProduct: action,
            deleteProduct: action,
            deleteAllProducts:action
            
        })
    }


    addProduct = () =>
    {
        this.productsCount++
    }
    deleteProduct = () => {
        this.productsCount--
    }
    deleteAllProducts = () => {
        this.productsCount = 0
    }



}