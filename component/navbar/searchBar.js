"use client";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { getFilteredProduct } from "@/app/api/fake-store-api";
import styles from "./Navbar.module.css";

const SearchBar = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleSearch = async () => {
      const filteredData = await getFilteredProduct(searchTerm);
      setFilteredProducts(filteredData);
    };

    handleSearch();
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleInputFocus = () => {
    setActive(true);
  };

  const handleInputBlur = () => {
    setActive(false);
  };

  return (
    <form className={styles.searchForm}>
      <input
        type="text"
        placeholder="Ara..."
        className={styles.searchInput}
        value={searchTerm}
        onChange={handleChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <button type="submit" className={styles.searchButton}>
        <FaSearch />
      </button>
      {active && (
        <ul className={styles.filteredResults}>
          {filteredProducts.slice(0, 10).map((product) => (
            <li key={product.id}> {product.title}</li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default SearchBar;
