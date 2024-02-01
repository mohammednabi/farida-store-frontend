
import AdsSlider from "@/app/components/AdsSlider";
import FiltersSection from "@/app/components/FiltersSection";
import MiniProducts from "@/app/components/MiniProducts";
import ProductsSection from "@/app/components/ProductsSection";


const HomePage = () => {
  return (
    <main>
      <MiniProducts />

      <AdsSlider />
      <FiltersSection />
      <ProductsSection />

    </main>
  );
};
export default HomePage;
