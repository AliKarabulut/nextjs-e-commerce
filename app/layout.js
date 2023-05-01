
import Navbar from "@/component/navbar/navbar/Navbar";
import '../styles/reset.css'
import "../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "e-commerce",
  description: "E-Ticaret projesidir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
