import { makeAutoObservable, runInAction } from "mobx";
import { CategoryType } from "./specificTypes/catgorytype";

export class CategoriesStore {
  categories: CategoryType[] = [];
  someCategories: CategoryType[] = [];

  private getOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.NEXT_PUBLIC_STRAPI_API_TOKEN ?? "",
    },
  };

  constructor() {
    makeAutoObservable(this);
  }

  getAllCategories = async () => {
    await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/categories?populate=*`,
      this.getOptions
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(
          "this is the data of the promise we get from categories : ",
          data
        );
        runInAction(() => {
          this.categories = data.data;
        });
      })
      .catch((err) => console.log(err));
  };

  getSomeCategories = async (count: number) => {
    await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/categories?populate=*&pagination[page]=1&pagination[pageSize]=${count}`,
      this.getOptions
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(
          "this is the data of the promise we get from categories : ",
          data
        );
        runInAction(() => {
          this.someCategories = data.data;
        });
      })
      .catch((err) => console.log(err));
  };
}
