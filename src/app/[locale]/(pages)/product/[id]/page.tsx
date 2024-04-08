import { unstable_setRequestLocale } from "next-intl/server";
import ProductPageContainer from "./components/ProductPageContainer";

interface productPageProps {
  params: { id: string; locale: string };
}

const ProductPage = ({ params: { id, locale } }: productPageProps) => {
  unstable_setRequestLocale(locale);
  return <ProductPageContainer id={id} />;
};

export default ProductPage;
