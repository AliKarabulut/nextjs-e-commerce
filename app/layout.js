import Navbar from "@/component/navbar/Navbar";
import "../styles/reset.css";
import "../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "e-commerce",
  description: "E-Ticaret projesidir",
};

async function getData() {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  const data = await response.json();
  return data;
}

export default async function RootLayout({ children }) {
  const data = await getData();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar categories={data } />
        {children}
      </body>
    </html>
  );
}
