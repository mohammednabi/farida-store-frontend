import { makeAutoObservable, runInAction } from "mobx";
import { color } from "./specificTypes/colorType";

export class ColorsStore {
  colors: color[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getAllColors = async (locale: string) => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.NEXT_PUBLIC_STRAPI_API_TOKEN ?? "",
      },
    };

    await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/colors?populate=*&locale=${locale}`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(
        //   "this is the data of the promise we get from colors : ",
        //   data
        // );
        runInAction(() => {
          this.colors = data.data;
        });
      })
      .catch((err) => console.log(err));
  };
}
