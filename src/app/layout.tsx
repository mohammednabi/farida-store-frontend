
import "./globals.css";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "@/components/NavBar";


import StoreContextProvider from "@/stores";




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
      </body>
    </html>
  );
}
