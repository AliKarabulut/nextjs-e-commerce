"use client";
import Link from "next/link";

import styles from "./Navbar.module.css";

const NavMenu = (props) => {
  // Api bağlayana kadar dummy data
  const categoriler = [
    "Kadın",
    "Erkek",
    "Çocuk",
    "Elektronik",
    "Ev",
    "Bağ-Bahçe",
    "Ayakkabı",
    "Market",
    "Çok Satanlar",
  ];

  return (
    <div className={styles.categories}>
      <ul className={styles.list}>
        {categoriler.map((category) => (
          <li key={category}>
            <Link href={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
