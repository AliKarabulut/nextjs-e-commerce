import Link from "next/link";
import styles from "./Navbar.module.css";
import Categories from "./Categories";
import LoginButton from "./user/Login";
import SearchBar from "./searchBar";

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
        <SearchBar></SearchBar>
        <LoginButton />
      </header>
      <Categories categories={allCategory} />
    </div>
  );
};

export default Navbar;
