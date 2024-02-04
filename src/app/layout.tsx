
import "./globals.css";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NavBar from "@/components/Navbar";



import StoreContextProvider from "@/stores";

import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import CartFloatingButton from "@/components/CartFloatingButton";
import CartSideBar from "@/components/CartSideBar";
import Uiproviders from "@/providers/UiProviders";


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

        <Uiproviders>


         <StoreContextProvider>
            <div className="h-full   flex flex-col">
              
              
          <div className="relative ">
         
            
               
                  
            <Sidebar />
                <CartSideBar />
            <NavBar />
                <CartFloatingButton />

         
          </div>
          <div className="flex-1 block"> {children}</div>
          <div className="">
            {/* <Footer /> */}

                <Footer />
          </div>
          </div>
          </StoreContextProvider>

        </Uiproviders>

      </body>
    </html>
  );
}
