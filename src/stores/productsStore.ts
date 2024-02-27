import { makeAutoObservable, runInAction } from "mobx";
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
      Authorization: process.env.NEXT_PUBLIC_STRAPI_API_TOKEN ?? "",
    },
  };

  // loading states

  productsLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  // methods to fetching data from api endpoints

  getAllProducts = async () => {
    runInAction(() => {
      this.productsLoading = true;
    });

    await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/products?populate=*&pagination[page]=${this.pagination.page}&pagination[pageSize]=${this.pagination.pageSize}`,
      this.getMethodOptions
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log("this is the data of the promise we get : ", data);
        runInAction(() => {
          this.products = data.data;
          this.pagination = data.meta.pagination;
          this.productsLoading = false;
        });
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
        // console.log(
        //   "this is the data of the promise we get from single product : ",
        //   data
        // );
        runInAction(() => {
          this.targetProduct = data.data;
        });
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
        // console.log(
        //   "this is the data of the promise we get from best seller products : ",
        //   data
        // );
        runInAction(() => {
          this.bestSellerProducts = data.data;
          this.pagination = data.meta.pagination;
        });
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
        // console.log(
        //   "this is the data of the promise we get from sale products : ",
        //   data
        // );
        runInAction(() => {
          this.saleProducts = data.data;
          this.pagination = data.meta.pagination;
        });
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
        // console.log(
        //   "this is the data of the promise we get from deal products : ",
        //   data
        // );
        runInAction(() => {
          this.dealProducts = data.data;
          this.pagination = data.meta.pagination;
        });
      })
      .catch((err) => console.log(err));
  };

  getProductsByFilters = async (
    sortingType: string,
    isSalesOnly: boolean,
    colorName: string,
    minPrice: string,
    maxPrice: string,
    category: string,
    searchQuery: string
  ) => {
    // console.log("this is sorting type : ", sortingType);
    // console.log("this is salesonly value : ", isSalesOnly);
    // console.log("this is color name : ", colorName);
    // console.log("this is min price : ", minPrice);
    // console.log("this is max price : ", maxPrice);
    // console.log("this is category  : ", category);
    runInAction(() => {
      this.productsLoading = true;
    });

    if (sortingType !== "rating") {
      interface QueryParams {
        populate: string;
        "pagination[page]": number;
        "pagination[pageSize]": number;
        sort: string;
        // Add more filter keys here
        [key: string]: string | number;
      }

      const endpoint = `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/products/`;

      const queryParams: QueryParams = {
        populate: "*",
        "pagination[page]": this.pagination.page,
        "pagination[pageSize]": this.pagination.pageSize,
        sort: sortingType,
      };

      if (category) {
        queryParams["filters[category][name][$eq]"] = category.replaceAll(
          "%20",
          " "
        );
      }

      if (colorName.length > 0) {
        queryParams["filters[colors][name][$eq]"] = colorName;
      }

      if (minPrice.length > 0) {
        queryParams["filters[price][$gt]"] = minPrice;
      }

      if (maxPrice.length > 0) {
        queryParams["filters[price][$lt]"] = maxPrice;
      }

      if (isSalesOnly) {
        queryParams["filters[type][$eq]"] = "sale";
      }

      if (searchQuery) {
        queryParams["filters[$or][0][title][$contains]"] = searchQuery;
        queryParams["filters[$or][1][description][$contains]"] = searchQuery;
        queryParams["filters[$or][2][category][name][$contains]"] = searchQuery;
        queryParams["filters[$or][3][colors][name][$contains]"] = searchQuery;
      }

      const queryString = Object.entries(queryParams)
        .map(
          ([key, value]) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        )
        .join("&");

      const url = `${endpoint}?${queryString}`;

      await fetch(url, this.getMethodOptions)
        .then((res) => res.json())
        .then((data) => {
          runInAction(() => {
            this.products = data.data;
            this.pagination = data.meta.pagination;
            this.productsLoading = false;
          });
        })
        .catch((err) => console.log(err));
    } else {
      interface QueryParams {
        populate: string;
        "pagination[page]": number;
        "pagination[pageSize]": number;
        //  sort: string;
        // Add more filter keys here
        [key: string]: string | number;
      }

      const endpoint = `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/products/`;

      const queryParams: QueryParams = {
        populate: "*",
        "pagination[page]": this.pagination.page,
        "pagination[pageSize]": this.pagination.pageSize,
        //  sort: sortingType,
      };

      if (category) {
        queryParams["filters[category][name][$eq]"] = category.replaceAll(
          "%20",
          " "
        );
      }

      if (colorName.length > 0) {
        queryParams["filters[colors][name][$eq]"] = colorName;
      }

      if (minPrice.length > 0) {
        queryParams["filters[price][$gt]"] = minPrice;
      }

      if (maxPrice.length > 0) {
        queryParams["filters[price][$lt]"] = maxPrice;
      }

      if (isSalesOnly) {
        queryParams["filters[type][$eq]"] = "sale";
      }

      if (searchQuery) {
        queryParams["filters[$or][0][title][$contains]"] = searchQuery;
        queryParams["filters[$or][1][description][$contains]"] = searchQuery;
        queryParams["filters[$or][2][category][name][$contains]"] = searchQuery;
        queryParams["filters[$or][3][colors][name][$contains]"] = searchQuery;
      }

      const queryString = Object.entries(queryParams)
        .map(
          ([key, value]) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        )
        .join("&");

      const url = `${endpoint}?${queryString}`;

      await fetch(url, this.getMethodOptions)
        .then((res) => res.json())
        .then((data) => {
          // console.log(
          //   "this is the data of the promise we get from deal products : ",
          //   data
          // );

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

          runInAction(() => {
            this.products = finalSortedProducts;
            this.pagination = data.meta.pagination;
            this.productsLoading = false;
          });
        })
        .catch((err) => console.log(err));
    }
  };

  getProductFromSearchingBar = async (searchQuery: string) => {
    runInAction(() => {
      this.productsLoading = true;
    });

    await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/products/?populate=*&pagination[page]=${this.pagination.page}&pagination[pageSize]=${this.pagination.pageSize}
   &filters[$or][0][title][$contains]=${searchQuery}&filters[$or][1][description][$contains]=${searchQuery}&filters[$or][2][category][name][$contains]=${searchQuery}&filters[$or][3][colors][name][$contains]=${searchQuery}`,
      this.getMethodOptions
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(
        //   "this is the data of the promise we get from deal products : ",
        //   data
        // );
        runInAction(() => {
          this.products = data.data;
          this.pagination = data.meta.pagination;
          this.productsLoading = false;
        });
      })
      .catch((err) => console.log(err));
  };

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
