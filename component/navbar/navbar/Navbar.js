import Link from "next/link";
import NavMenu from "./NavMenu";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = () => {
  
  return (
    <header>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          E-Ticaret
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
        <div className={styles.navLinks}>
          <Link href="/giris" className={styles.navLink}>
            <FaUser /> <span>Giriş Yap</span>
          </Link>
          <Link href="/sepetim" className={styles.navLink}>
            <FaShoppingCart /> <span>Sepetim</span>
          </Link>
        </div>
      </nav>
      <NavMenu></NavMenu>
    </header>
  );
};

export default Navbar;
