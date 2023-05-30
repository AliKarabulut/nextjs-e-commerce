import { StoreProvider } from "@/stores/store-provider";
import { shoppingCart } from "@/stores/user-cart";
import { store } from "@/stores";
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer";
import "../styles/reset.css";
import "../styles/globals.css";
import { Source_Sans_Pro } from "next/font/google";

const inter = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata = {
  title: "e-commerce",
  description: "E-Ticaret projesidir",
};
export default async function RootLayout({ children, mobileLogin }) {
  const mobile = store.getState().device;
  console.log(mobile);

  if (mobile === "mobile") {
    return (
      <StoreProvider preloadedState={{ device: { mobile } }}>
        {mobileLogin}
      </StoreProvider>
    );
  } else {
    return (
      <html lang="en">
        <body className={inter.className}>
          <StoreProvider preloadedState={{ device: { mobile } }}>
            <Navbar />
            <main>{children}</main>
            <Footer></Footer>
          </StoreProvider>
        </body>
      </html>
    );
  }
}
