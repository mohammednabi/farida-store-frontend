import { makeAutoObservable, runInAction } from "mobx";
import { strapiProductType } from "./specificTypes/strapiProductType";

export class SearchBoxStore {
  showBackdrop: boolean = false;

  showSearchBox: boolean = false;

  quickProducts: strapiProductType[] = [];
  quickProductsLoading: boolean = false;
  searchInputValue: string = "";

  private getMethodOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 71626ce261d5c9478bea67fac56a43f6f7022b0ca56cae14c0f6a6cad41e69a23aa8c59a01e532651914afea91f9ba7dce303070afb7a789d2a84c3a93e0d0bd13e75981d0d5faba0e6091a1a28a170a278bdd4b5426232d3b2bbab440cc70bb83d8bffe70b95dee1e8df22b2ecf6642c46e7f7ea12cbddf37286d5625ab3c71 ",
    },
  };

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

  quickSearch = async (searchQuery: string) => {
    runInAction(() => {
      this.quickProductsLoading = true;
    });

    await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/products/?populate=*&pagination[page]=1&pagination[pageSize]=4&filters[$or][0][title][$contains]=${searchQuery}&filters[$or][1][description][$contains]=${searchQuery}&filters[$or][2][category][name][$contains]=${searchQuery}&filters[$or][3][colors][name][$contains]=${searchQuery}`,
      this.getMethodOptions
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(
          "this is the data of the promise we get from deal products : ",
          data
        );

        runInAction(() => {
          this.quickProducts = data.data;
          this.quickProductsLoading = false;
        });
      })
      .catch((err) => console.log(err));
  };

  setSearchInputValue(val: string) {
    this.searchInputValue = val;
  }

  setQuickProducts(val: strapiProductType[]) {
    this.quickProducts = val;
  }
}
