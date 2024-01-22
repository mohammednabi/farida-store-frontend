"use client"

import { makeAutoObservable } from "mobx"


export class UserDropStore {
    
    isUserMenuDisplayed:boolean = false

      constructor()
    {
        makeAutoObservable(this)
    }

    

    displayUserMenu =()=> {
      this.isUserMenuDisplayed = true
    }

    hideUserMenu =()=> {
        this.isUserMenuDisplayed = false
    }

}