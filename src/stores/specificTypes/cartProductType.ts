export type cartProductType = {
  id: number;
  imgSrc: string;
  title: string;
  slug: string;
  description: string;
  prePrice?: number;
  price: number;
  quantity: number;
  localizatons: {
    title: string;
    description: string;
    slug: string;
  };
};
