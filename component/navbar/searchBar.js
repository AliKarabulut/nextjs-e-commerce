"use client";
import React from "react";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { getFilteredProduct } from "@/app/api/fake-store-api";
import styles from "./Navbar.module.css";
import Link from "next/link";

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
    setActive(!active);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setActive(!active);
    }, 200);
  };

  const highlightMatch = (text) => {
    const regex = new RegExp(searchTerm, "gi");
    let isFirstMatch = true;

    return text.replace(regex, (match) => {
      if (isFirstMatch) {
        isFirstMatch = false;
        return "<strong>" + match + "</strong>";
      }
      return match;
    });
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
            <li key={product.id}>
              <Link href={`/${product.category}/${product.id}`}>
                <span
                  dangerouslySetInnerHTML={{
                    __html: highlightMatch(product.title),
                  }}
                />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default SearchBar;
