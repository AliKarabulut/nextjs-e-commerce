import Link from "next/link";
import styles from "./Navbar.module.css";
import Categories from "./Categories";
import LoginButton from "./user/Login";
import SearchBar from "./searchBar";
import { getAllCategories } from "@/app/api/allCategories/route";

const Navbar = async () => {
  const categories = await getAllCategories()

  return (
    <div className={styles.navContainer}>
      <header className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          E-Commerce
        </Link>
        <SearchBar></SearchBar>
        <LoginButton />
      </header>
      <Categories categories={categories} />
    </div>
  );
};

export default Navbar;
