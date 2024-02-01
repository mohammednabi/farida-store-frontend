import { makeAutoObservable } from "mobx";

export class FilterSidebarStore {
  showBackdrop: boolean = false;

  showFilterSideBar: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  set displayBackdrop(state: boolean) {
    if (state) {
      this.showBackdrop = state;
      //   document.body.style.overflow = "hidden";
    } else {
      this.showBackdrop = state;
      //   document.body.style.overflow = "unset";
    }
  }

  set displayFilterSideBar(state: boolean) {
    state ? (this.showFilterSideBar = state) : (this.showFilterSideBar = state);
  }

  hideWholeFilterSidebar = () => {
    this.displayFilterSideBar = false;
    setTimeout(() => {
      this.displayBackdrop = false;
    }, 500);
  };

  displayWholeFilterSidebar = () => {
    this.displayBackdrop = true;
    setTimeout(() => {
      this.displayFilterSideBar = true;
    }, 500);
  };
}
