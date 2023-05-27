import { StoreProvider } from "@/stores/store-provider";
import { headers } from "next/headers";
import { userCart } from "@/stores/user-cart";
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
  await store.dispatch(userCart());
  const { cart } = store.getState().cart;
  console.log(cart)

  const headersList = headers();
  const referer = headersList.get("user-agent");
  const device = referer?.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  )
    ? "mobile"
    : "desktop";

  if (device === "mobile") {
    return mobileLogin;
  } else {
    return (
      <html lang="en">
        <body className={inter.className}>
          <StoreProvider preloadedState={{ cart: { cart } }}>
            <Navbar />
            <main>{children}</main>
            <Footer></Footer>
          </StoreProvider>
        </body>
      </html>
    );
  }
}
