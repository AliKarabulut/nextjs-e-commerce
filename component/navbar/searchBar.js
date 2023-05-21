"use client";
import React from "react";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { getFilteredProduct } from "@/app/api/filteredProducts/route";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [active, setActive] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log(searchTerm);
    const handleSearch = async () => {
      const filteredData = await getFilteredProduct(searchTerm);
      setFilteredProducts(filteredData);
    };

    handleSearch();
  }, [searchTerm]);

  const handleChange = (event) => {
    setActive(true);
    setSearchTerm(event.target.value);
  };

  const handleInputFocus = () => {
    setActive(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setActive(false);
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

  const submitHandler = (e) => {
    e.preventDefault();
    setActive(false);
    if (searchTerm !== "") {
      router.push(`/search?s=${searchTerm}`);
    }
  };

  return (
    <form className={styles.searchForm} onSubmit={submitHandler}>
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
              <Link href={`/search?=${product.title}`}>
                <span
                  onClick={() => setSearchTerm(product.title)}
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
