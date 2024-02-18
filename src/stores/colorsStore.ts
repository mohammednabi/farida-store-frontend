import { makeAutoObservable } from "mobx";
import { color } from "./specificTypes/colorType";

export class ColorsStore {
  colors: color[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getAllColors = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 71626ce261d5c9478bea67fac56a43f6f7022b0ca56cae14c0f6a6cad41e69a23aa8c59a01e532651914afea91f9ba7dce303070afb7a789d2a84c3a93e0d0bd13e75981d0d5faba0e6091a1a28a170a278bdd4b5426232d3b2bbab440cc70bb83d8bffe70b95dee1e8df22b2ecf6642c46e7f7ea12cbddf37286d5625ab3c71 ",
      },
    };

    await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/colors?populate=*`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(
          "this is the data of the promise we get from colors : ",
          data
        );
        this.colors = data.data;
      })
      .catch((err) => console.log(err));
  };
}
