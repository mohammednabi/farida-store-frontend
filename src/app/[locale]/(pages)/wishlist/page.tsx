import { unstable_setRequestLocale } from "next-intl/server";
import WishListContainer from "./components/WishListContainer";

interface WishListPageProps {
  params: { locale: string };
}

const WishListPage = ({ params: { locale } }: WishListPageProps) => {
  unstable_setRequestLocale(locale);
  return <WishListContainer />;
};

export default WishListPage;
