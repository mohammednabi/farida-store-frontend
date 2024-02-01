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
  id: string;

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
  products?: product[] = [];

  targetProduct?: product = {
    id: "",
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

  getSingleProduct = async (id: string) => {
    // const q = query(collection(db, "products"), where("id", "==", id));

    const docRef = doc(db, "products", `${id}`);
    await getDoc(docRef)
      .then((doc) => {
        const targetDoc: product = {
          id: doc.id,
          title: "",
          description: "",
          price: {
            currentPrice: 0,
            prePrice: undefined,
            discount: undefined,
            discountDuration: undefined,
          },
          images: {
            thumbnail: {
              id: "",
              url: "",
            },
            images: [],
          },
          rating: {
            averageRate: -1,
            ratings: [],
          },
          availabelInstock: 0,
          category: {
            id: "",
            name: "",
          },
          similarProducts: [],
          ...doc.data(),
        };

        // this.targetProduct = targetDoc;
        this.targetProductValue = targetDoc;
        console.log("this is the target product : ", targetDoc);
      })
      .catch((err) => console.log(err));
  };

  getAllProducts = async () => {
    const q = query(collection(db, "products"));

    let newProducts: product[] | undefined = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log("this is the products form products section ");
      // console.log(doc.id, " => ", doc.data());
      const newProduct: product = {
        id: doc.id,
        title: "",
        description: "",
        price: {
          currentPrice: 0,
          prePrice: undefined,
          discount: undefined,
          discountDuration: undefined,
        },
        images: {
          thumbnail: {
            id: "",
            url: "",
          },
          images: [],
        },
        rating: {
          averageRate: 0,
          ratings: [],
        },
        availabelInstock: 0,
        category: {
          id: "",
          name: "",
        },
        similarProducts: [],
        ...doc.data(),
      };

      newProducts?.push(newProduct);
    });

    this.products = newProducts;
  };
}
