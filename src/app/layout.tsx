
import "./globals.css";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NavBar from "@/components/Navbar";



import StoreContextProvider from "@/stores";
import Uiproviders from "@/providers/Uiproviders";




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
        <div className="h-full  flex flex-col">
          <div className="">
         
            
               
                  
            <NavBar />

            
           
            {/* <Navbar /> */}
          </div>
          <div className="flex-1 block"> {children}</div>
          <div className="">
            {/* <Footer /> */}
          </div>
          </div>
          </StoreContextProvider>
        </Uiproviders>
      </body>
    </html>
  );
}
