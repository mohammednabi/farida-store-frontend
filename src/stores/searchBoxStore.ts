import { makeAutoObservable } from "mobx";

export class SearchBoxStore {
  showBackdrop: boolean = false;

  showSearchBox: boolean = false;

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

  set displaySearchBox(state: boolean) {
    state ? (this.showSearchBox = state) : (this.showSearchBox = state);
  }

  hideWholeSearchBox = () => {
    this.displaySearchBox = false;
    setTimeout(() => {
      this.displayBackdrop = false;
    }, 500);
  };

  displayWholeSearchBox = () => {
    this.displayBackdrop = true;
    setTimeout(() => {
      this.displaySearchBox = true;
    }, 500);
  };
}
