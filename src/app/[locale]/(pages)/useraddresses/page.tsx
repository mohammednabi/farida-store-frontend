import { unstable_setRequestLocale } from "next-intl/server";
import UserAddressPageContainer from "./components/UserAddressPageContainer";

interface UserAddressesPageProps {
  params: { locale: string };
}

const UserAddressesPage = ({ params: { locale } }: UserAddressesPageProps) => {
  unstable_setRequestLocale(locale);
  return <UserAddressPageContainer />;
};

export default UserAddressesPage;
