import { makeAutoObservable } from "mobx";

export class EditProfileModalStore {
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
