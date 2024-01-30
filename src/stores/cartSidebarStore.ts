import { makeAutoObservable } from "mobx";

export class CartSidebarStore {
  showBackdrop: boolean = false;

  showCartSideBar: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  set displayBackdrop(state: boolean) {
    if (state) {
      this.showBackdrop = state;
      document.body.style.overflow = "hidden";
    } else {
      this.showBackdrop = state;
      document.body.style.overflow = "unset";
    }
  }

  set displayCartSideBar(state: boolean) {
    state ? (this.showCartSideBar = state) : (this.showCartSideBar = state);
  }

  hideWholeCartSidebar = () => {
    this.displayCartSideBar = false;
    setTimeout(() => {
      this.displayBackdrop = false;
    }, 500);
  };

  displayWholeCartSidebar = () => {
    this.displayBackdrop = true;
    setTimeout(() => {
      this.displayCartSideBar = true;
    }, 500);
  };
}
