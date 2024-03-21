import { makeAutoObservable } from "mobx";

export class FiltersDropMenuStore {
  showDropMenu: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  // displayDropMenu=()=> {
  //     this.showDropMenu = true
  // }

  hideDropMenu = () => {
    this.showDropMenu = false;
  };

  toggleDropMenu = () => {
    this.showDropMenu = !this.showDropMenu;
  };
}
