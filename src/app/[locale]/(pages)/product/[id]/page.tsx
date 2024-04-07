import ProductPageContainer from "./components/ProductPageContainer";

interface productProps {
  params: { id: string };
}

const ProductPage = ({ params }: productProps) => {
  return <ProductPageContainer id={params.id} />;
};

export default ProductPage;
