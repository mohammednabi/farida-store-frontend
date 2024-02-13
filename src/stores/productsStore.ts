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
          "Bearer ebbb14213da379224bf0f253d64b7b60e6e846b7b4aa765b463c87d040f7ed18abbcc3a576e14c2c6df028a6c6af75057e9132be125242ea99d10360a1d26703728b67576d9ef4b88913c48477a0e014640d13c56c2d4f84eeec830cae7fd6781ea35b4183738faecb88ca67b8231ed953e247cebf06c68042537a95bee7e91f ",
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
