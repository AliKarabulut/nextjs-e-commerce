import { StoreProvider } from "@/stores/store-provider";
import { cookies, headers } from "next/headers";
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer";
import { Source_Sans_Pro } from "next/font/google";
import "../styles/reset.css";
import "../styles/globals.css";
import { store } from "@/stores";
import { getShoppingCart } from "@/stores/user-cart";
import { userProfile } from "@/stores/user-profile";

const inter = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata = {
  title: "e-commerce",
  description: "E-Ticaret projesidir",
};

export default async function RootLayout({ children, mobileLogin }) {
  const cookieStore = cookies();
  const id = cookieStore.get("id");
  if (id) {
    await store.dispatch(getShoppingCart(id.value));
    await store.dispatch(userProfile(id.value));
  }
  const { cart } = store.getState().cart;
  const { profile } = store.getState().profile;
  console.log(cart);

  // const headersList = headers();
  // const referer = headersList.get("user-agent");
  // const device = referer?.match(
  //   /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  // )
  //   ? "mobile"
  //   : "desktop";

  // if (device === "mobile") {
  //   return (
  //     <StoreProvider preloadedState={{ cart: { cart }, profile: { profile } }}>
  //       {mobileLogin}
  //     </StoreProvider>
  //   );
  // } else {
    return (
      <html lang="en">
        <body className={inter.className}>
          <StoreProvider
            preloadedState={{ cart: { cart }, profile: { profile } }}
          >
            <Navbar />
            <main>{children}</main>
            <Footer></Footer>
          </StoreProvider>
        </body>
      </html>
    );
  }
// }
