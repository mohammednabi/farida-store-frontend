import { makeAutoObservable } from "mobx";

export class AddressModalStore {
  isOpen: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  onOpen = () => {
    this.isOpen = true;
  };

  onClose = () => {
    this.isOpen = false;
  };
}
