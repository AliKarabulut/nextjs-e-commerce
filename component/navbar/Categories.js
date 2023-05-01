"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Categories = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <nav className={styles.categories}>
      <ul className={styles.list}>
        {categories.map((category, index) => (
          <li
            key={index}
            className={`${styles.categoriesBtn} ${
              activeCategory === category ? styles.active : ""
            }`}
          >
            <Link
              href={`/category/${category}`}
              onClick={() => handleClick(category)}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Categories;
