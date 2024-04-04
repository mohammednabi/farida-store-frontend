import { unstable_setRequestLocale } from "next-intl/server";

// export const metadata = {
//   title: "farida store ",
//   description: "user page contains all actions that user can do ",
// };

interface RootLayoutProps {
  children: React.ReactNode;

  params: { locale: string };
}

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  unstable_setRequestLocale(locale);
  return children;
}
