import { makeAutoObservable } from "mobx";
import axios from "axios";
import { fetchProducts } from "@/api/fetchProducts";
import { fetchSingleProduct } from "@/api/fetchSingleProduct";

import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "@/firebase/db";
import {
  Data,
  Datum,
  strapiProductType,
} from "./specificTypes/strapiProductType";

export type userRate = {
  id: string;
  userId: string;
  // userName: string;
  // userAvatarUrl: string;
  rateTitle: string;
  rateDescription: string;
  rateValue: number;
};

type category = {
  id: string;
  name: string;
};

type price = {
  currentPrice: number;
  prePrice?: number;
  discount?: string;
  discountDuration?: Date;
};

type color = {
  id: string;
  nameOfColor: string;
  colorHex?: string;
  availabelInstock: number;
};

export type imgType = {
  id: string;
  url: string;
};

export type product = {
  id: number;

  title: string;
  description: string;
  price: price;
  images: {
    thumbnail: imgType;
    images: imgType[];
  };
  rating: {
    averageRate: number;
    ratings: userRate[];
  };

  availabelInstock: number;
  category: category;
  similarProducts: product[]; //only products ids not all properties;
  colors?: color[];
};

export class ProductsStore {
  // products?: product[] = [];
  products: strapiProductType[] = [];

  targetProduct?: product = {
    id: 0,
    category: {
      id: "",
      name: "",
    },
    title: "",
    description: "",
    price: {
      currentPrice: 0,
      prePrice: 0,
      discount: "",
      discountDuration: new Date(),
    },
    availabelInstock: 0,
    rating: { averageRate: 20, ratings: [] },
    images: {
      thumbnail: {
        id: "",
        url: "",
      },
      images: [],
    },
    similarProducts: [],
    colors: [],
  };

  constructor() {
    makeAutoObservable(this);
  }

  set targetProductValue(val: product | undefined) {
    this.targetProduct = val;
  }

  // set allProductsVal(val: product[] | undefined) {
  //   this.products = val;
  // }

  // getSingleProduct = async (id: string) => {
  //   // const q = query(collection(db, "products"), where("id", "==", id));

  //   const docRef = doc(db, "products", `${id}`);
  //   await getDoc(docRef)
  //     .then((doc) => {
  //       const targetDoc: product = {
  //         id: doc.id,
  //         title: "",
  //         description: "",
  //         price: {
  //           currentPrice: 0,
  //           prePrice: undefined,
  //           discount: undefined,
  //           discountDuration: undefined,
  //         },
  //         images: {
  //           thumbnail: {
  //             id: "",
  //             url: "",
  //           },
  //           images: [],
  //         },
  //         rating: {
  //           averageRate: -1,
  //           ratings: [],
  //         },
  //         availabelInstock: 0,
  //         category: {
  //           id: "",
  //           name: "",
  //         },
  //         similarProducts: [],
  //         ...doc.data(),
  //       };

  //       // this.targetProduct = targetDoc;
  //       this.targetProductValue = targetDoc;
  //       console.log("this is the target product : ", targetDoc);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // getAllProducts = async () => {
  //   const q = query(collection(db, "products"));

  //   let newProducts: product[] | undefined = [];
  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     // console.log("this is the products form products section ");
  //     // console.log(doc.id, " => ", doc.data());
  //     const newProduct: product = {
  //       id: doc.id,
  //       title: "",
  //       description: "",
  //       price: {
  //         currentPrice: 0,
  //         prePrice: undefined,
  //         discount: undefined,
  //         discountDuration: undefined,
  //       },
  //       images: {
  //         thumbnail: {
  //           id: "",
  //           url: "",
  //         },
  //         images: [],
  //       },
  //       rating: {
  //         averageRate: 0,
  //         ratings: [],
  //       },
  //       availabelInstock: 0,
  //       category: {
  //         id: "",
  //         name: "",
  //       },
  //       similarProducts: [],
  //       ...doc.data(),
  //     };

  //     newProducts?.push(newProduct);
  //   });

  //   this.products = newProducts;
  // };

  getAllProducts = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 71626ce261d5c9478bea67fac56a43f6f7022b0ca56cae14c0f6a6cad41e69a23aa8c59a01e532651914afea91f9ba7dce303070afb7a789d2a84c3a93e0d0bd13e75981d0d5faba0e6091a1a28a170a278bdd4b5426232d3b2bbab440cc70bb83d8bffe70b95dee1e8df22b2ecf6642c46e7f7ea12cbddf37286d5625ab3c71 ",
      },
    };

    await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/products?populate=*`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("this is the data of the promise we get : ", data);
        this.products = data.data;
      })
      .catch((err) => console.log(err));
  };

  getAverageRatings(ratings: Datum[]) {
    let sum = 0;
    let avg = 0;
    ratings.map((p) => {
      sum = sum + p.attributes.rating;
    });

    avg = sum / ratings.length;

    return avg;
  }

  getPriceAfterDiscount(discountData: Data, currentPrice: number) {
    if (discountData) {
      let price =
        (discountData.attributes.discount_percent * currentPrice) / 100;
      return price.toFixed(2);
    } else {
      return null;
    }
  }
}
