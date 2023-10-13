import Navbar from "@/components/Navbar";
import "./globals.css";
import { Urbanist } from "next/font/google";
import Footer from "@/components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      <body className={`${font.className} flex flex-col `}>
        <div className="flex-grow-0">
          <Navbar />
        </div>
        <div> {children}</div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
