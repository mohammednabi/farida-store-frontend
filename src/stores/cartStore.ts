"use client"

import { makeAutoObservable  } from "mobx"


export class CartStore
{
    productsCount: number = 3
    isCartMenuDisplayed :boolean = false


    constructor()
    {
        makeAutoObservable(this)
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

    displayCartMenu = () => {
        this.isCartMenuDisplayed = true
    }

 hideCartMenu = () => {
        this.isCartMenuDisplayed = false
    }




}


