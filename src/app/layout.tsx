import Navbar from "@/components/Navbar";
import "./globals.css";
import { Urbanist } from "next/font/google";
import Footer from "@/components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar2 from "@/components/NavBar2";
import CartStoreContextProvider from "@/contexts/CartStoreContext";
import UserDropStoreContextProvider from "@/contexts/UserDropStoreContext";




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
      <body className={`font-cairo flex flex-col `}>
        <div className="h-full  flex flex-col">
          <div className="">
         
            <CartStoreContextProvider>
              <UserDropStoreContextProvider>

            <NavBar2 />
              </UserDropStoreContextProvider>
</CartStoreContextProvider>
           
            {/* <Navbar /> */}
          </div>
          <div className="flex-1 block"> {children}</div>
          <div className="">
            {/* <Footer /> */}
          </div>
        </div>
      </body>
    </html>
  );
}
