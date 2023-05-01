import Link from "next/link";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import styles from "./Navbar.module.css";
import Categories from "./Categories";

const Navbar = () => {
  // Api bağlayana kadar dummy data
  const categories = [
    "Kadın",
    "Erkek",
    "Çocuk",
    "Elektronik",
    "Ev",
    "Bağ-Bahçe",
    "Ayakkabı",
    "Market",
    "Çok Satanlar",
    "Ayakkabı",
    "Market",
    "Çok Satanlar",
    
  ];

  return (
    <div>
      <header className={styles.navbar}>
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
      </header>

      <Categories categories={categories} />
    </div>
  );
};

export default Navbar;
