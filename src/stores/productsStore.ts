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
  EXT,
  MIME,
  strapiProductType,
} from "./specificTypes/strapiProductType";

export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export class ProductsStore {
  products: strapiProductType[] = [];
  // sortedProducts:strapiProductType[]=[]
  bestSellerProducts: strapiProductType[] = [];
  saleProducts: strapiProductType[] = [];
  dealProducts: strapiProductType[] = [];

  targetProduct: strapiProductType = {
    id: 0,
    attributes: {
      title: "",
      description: "",
      slug: "",
      price: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
      publishedAt: new Date(),
      thumbnail: {
        data: {
          id: 0,
          attributes: {
            name: "",
            alternativeText: null,
            caption: null,
            width: 0,
            height: 0,
            formats: {
              thumbnail: {
                name: "",
                hash: "",
                ext: EXT.Jpg,
                mime: MIME.ImageJPEG,
                path: null,
                width: 0,
                height: 0,
                size: 0,
                url: "",
              },
              medium: {
                name: "",
                hash: "",
                ext: EXT.Jpg,
                mime: MIME.ImageJPEG,
                path: null,
                width: 0,
                height: 0,
                size: 0,
                url: "",
              },
              small: {
                name: "",
                hash: "",
                ext: EXT.Jpg,
                mime: MIME.ImageJPEG,
                path: null,
                width: 0,
                height: 0,
                size: 0,
                url: "",
              },
            },
            hash: "",
            ext: EXT.Jpg,
            mime: MIME.ImageJPEG,
            size: 0,
            url: "",
            previewUrl: null,
            provider: "",
            provider_metadata: null,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        },
      },
      images: {
        data: [],
        thumbnail: {
          id: "",
          url: "",
        },
      },
      inventory: {
        data: {
          id: 0,
          attributes: {
            name: undefined,
            createdAt: new Date(),
            updatedAt: new Date(),
            publishedAt: new Date(),
            hex: undefined,
            available_in_stock: undefined,
            value: undefined,
          },
        },
      },
      category: {
        data: [],
      },
      reviews: {
        data: [],
      },
      discount: {
        data: {
          id: 0,
          attributes: {
            name: "",
            discount_percent: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
            publishedAt: new Date(),
            active: false,
            expiration: new Date(),
          },
        },
      },
      sizes: {
        data: [],
      },
      colors: {
        data: [],
      },
      type: "none",
    },
  };
  pagination: Pagination = {
    page: 1,
    pageSize: 12,
    pageCount: 1,
    total: 1,
  };

  getMethodOptions = {
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

  // methods to fetching data from api endpoints

  getAllProducts = async () => {
    await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/products?populate=*&pagination[page]=${this.pagination.page}&pagination[pageSize]=${this.pagination.pageSize}`,
      this.getMethodOptions
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("this is the data of the promise we get : ", data);
        this.products = data.data;
        this.pagination = data.meta.pagination;
      })
      .catch((err) => console.log(err));
  };

  getSingleProduct = async (productId: string) => {
    await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/products/${productId}?populate=*`,
      this.getMethodOptions
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(
          "this is the data of the promise we get from single product : ",
          data
        );
        this.targetProduct = data.data;
      })
      .catch((err) => console.log(err));
  };

  getBestSellerProducts = async () => {
    await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/products/?populate=*&filters[type][$eq]=best_seller&pagination[page]=${this.pagination.page}&pagination[pageSize]=${this.pagination.pageSize}`,
      this.getMethodOptions
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(
          "this is the data of the promise we get from best seller products : ",
          data
        );
        this.bestSellerProducts = data.data;
        this.pagination = data.meta.pagination;
      })
      .catch((err) => console.log(err));
  };

  getSaleProducts = async () => {
    await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/products/?populate=*&filters[type][$eq]=sale&pagination[page]=${this.pagination.page}&pagination[pageSize]=${this.pagination.pageSize}`,
      this.getMethodOptions
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(
          "this is the data of the promise we get from sale products : ",
          data
        );
        this.saleProducts = data.data;
        this.pagination = data.meta.pagination;
      })
      .catch((err) => console.log(err));
  };

  getDealProducts = async () => {
    await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/products/?populate=*&filters[type][$eq]=deal&pagination[page]=${this.pagination.page}&pagination[pageSize]=${this.pagination.pageSize}`,
      this.getMethodOptions
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(
          "this is the data of the promise we get from deal products : ",
          data
        );
        this.dealProducts = data.data;
        this.pagination = data.meta.pagination;
      })
      .catch((err) => console.log(err));
  };

  getProductsByFilters = async (
    sortingType: string,
    isSalesOnly: boolean,
    colorName: string,
    minPrice: string,
    maxPrice: string
  ) => {
    console.log("this is sorting type : ", sortingType);
    console.log("this is salesonly value : ", isSalesOnly);
    console.log("this is color name : ", colorName);
    console.log("this is min price : ", minPrice);
    console.log("this is max price : ", maxPrice);

    if (sortingType !== "rating") {
      await fetch(
        `${
          process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT
        }/products/?populate=*&pagination[page]=${
          this.pagination.page
        }&pagination[pageSize]=${this.pagination.pageSize}&sort=${sortingType}${
          minPrice.length > 0 ? `&filters[price][$gt]=${minPrice}` : ``
        }${maxPrice.length > 0 ? `&filters[price][$lt]=${maxPrice}` : ``}
        ${
          colorName.length > 0 ? `&filters[colors][name][$eq]=${colorName}` : ``
        }
        ${isSalesOnly ? `&filters[type][$eq]=sale` : ``}`,
        this.getMethodOptions
      )
        .then((res) => res.json())
        .then((data) => {
          this.products = data.data;
          this.pagination = data.meta.pagination;
        })
        .catch((err) => console.log(err));
    } else {
      await fetch(
        `${
          process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT
        }/products/?populate=*&pagination[page]=${
          this.pagination.page
        }&pagination[pageSize]=${this.pagination.pageSize}
       &filters[price][$gt]=${minPrice}&filters[price][$lt]=${maxPrice}&filters[colors][name][$eq]=${colorName}${
          isSalesOnly ? `&filters[type][$eq]=sale` : ``
        }`,
        this.getMethodOptions
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(
            "this is the data of the promise we get from deal products : ",
            data
          );

          let beforeSortingProducts: strapiProductType[] = [];

          beforeSortingProducts = data.data;

          let productsWithIds: { id: number; averageRating: number }[] = [];

          beforeSortingProducts.forEach((p) => {
            const newProduct: { id: number; averageRating: number } = {
              id: p.id,
              averageRating: this.getAverageRatings(p.attributes.reviews.data),
            };

            productsWithIds.push(newProduct);
          });

          let sortedProductsIds = productsWithIds.sort((a, b) => {
            return b.averageRating - a.averageRating;
          });

          let finalSortedProducts: strapiProductType[] = [];

          sortedProductsIds.forEach((sP) => {
            let findedProduct: strapiProductType | undefined =
              beforeSortingProducts.find((bP) => {
                return sP.id === bP.id;
              });
            finalSortedProducts.push(
              findedProduct ?? ({} as strapiProductType)
            );
          });

          // after finsih sorting
          this.products = finalSortedProducts;
          this.pagination = data.meta.pagination;
        })
        .catch((err) => console.log(err));
    }
  };

  // getProductsByPriceRange = async (minPrice: string, maxPrice: string) => {
  //   await fetch(
  //     `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/products?populate=*&pagination[page]=${this.pagination.page}&pagination[pageSize]=${this.pagination.pageSize}&filters[price][$gt]=${minPrice}&filters[price][$lt]=${maxPrice}`,
  //     this.getMethodOptions
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(
  //         "this is the data of the promise we get by price range  : ",
  //         data
  //       );
  //       this.products = data.data;
  //       this.pagination = data.meta.pagination;
  //     })
  //     .catch((err) => console.log(err));
  // };

  // getProductsByColors = async (colorName: string) => {
  //   await fetch(
  //     `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/products?populate=*&pagination[page]=${this.pagination.page}&pagination[pageSize]=${this.pagination.pageSize}&filters[colors][name][$eq]=${colorName}`,
  //     this.getMethodOptions
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(
  //         "this is the data of the promise we get by price range  : ",
  //         data
  //       );
  //       this.products = data.data;
  //       this.pagination = data.meta.pagination;
  //     })
  //     .catch((err) => console.log(err));
  // };

  // methods to handle another things far away from api endpoints

  getAverageRatings(ratings: Datum[]) {
    let sum = 0;
    let avg = 0;

    if (ratings.length > 0) {
      ratings.map((p) => {
        sum = sum + p.attributes.rating;
      });

      avg = sum / ratings.length;

      return avg;
    } else {
      return 0;
    }
  }

  getPriceAfterDiscount(discountData: Data, currentPrice: number) {
    if (discountData) {
      let discountValue =
        (discountData.attributes.discount_percent * currentPrice) / 100;
      return Number((currentPrice - discountValue).toFixed(2));
    } else {
      return undefined;
    }
  }

  setPaginationPage(val: number) {
    this.pagination = {
      ...this.pagination,
      page: val,
    };
  }
}
