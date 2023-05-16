import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import styles from "./Navbar.module.css";
import Categories from "./Categories";
import LoginButton from "./user/Login";
import { getFilteredProduct } from "@/app/api/fake-store-api";


async function getData() {
  const res = await getFilteredProduct()

  return res.json();
}

const Navbar = async ({ categories }) => {
  // Api bağlayana kadar dummy data
  const categoriess = [
    "DUMMY Category",
    "DUMMY Category",
    "DUMMY Category",
    "DUMMY Category",
    "DUMMY Category",
    "DUMMY Category",
  ];

  const allCategory = [...categories, ...categoriess];
  return (
    <div className={styles.navContainer}>
      <header className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          E-Commerce
        </Link>
        <form className={styles.searchForm}>
          <input
            type="text"
            placeholder="Ara..."
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>
            <FaSearch />
          </button>
        </form>

        <LoginButton />
      </header>
      <Categories categories={allCategory} />
    </div>
  );
};

export default Navbar;
