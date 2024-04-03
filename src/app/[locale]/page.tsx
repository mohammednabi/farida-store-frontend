import AdsSlider from "@/app/components/AdsSlider";
import FiltersSection from "@/app/components/FiltersSection";
import MiniProducts from "@/app/components/MiniProducts";
import ProductsSection from "@/app/components/ProductsSection";
import { unstable_setRequestLocale } from "next-intl/server";

interface HomePageProps {
  params: { locale: string };
}

const HomePage = ({ params: { locale } }: HomePageProps) => {
  unstable_setRequestLocale(locale);

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
