import { makeAutoObservable } from "mobx";

export class LoginFormStore {
  constructor() {
    makeAutoObservable(this);
  }
}
