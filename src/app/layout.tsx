import "./globals.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Urbanist } from "next/font/google";
const font = Urbanist({ subsets: ["latin"] });
export const metadata = {
  title: "Farida Store",
  description: "The Market of Farida Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

