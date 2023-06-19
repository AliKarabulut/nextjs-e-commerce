import Link from "next/link";
import styles from "./Navbar.module.css";
import Categories from "./Categories";
import LoginButton from "./user/Login";
import SearchBar from "./searchBar";

const getData = async () => {
  try {
    const data = await fetch("https://fakestoreapi.com/products/categories");
    return data.json();
  } catch (error) {
    throw new Error("Categories name could not be fetched!");
  }
};
const Navbar = async () => {

  const categories = await getData();

  return (
    <div className={styles.navContainer}>
      <header className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          E-Commerce
        </Link>
        <SearchBar></SearchBar>
        <LoginButton  />
      </header>
      <Categories categories={categories} />
    </div>
  );
};

export default Navbar;
