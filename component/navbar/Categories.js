"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Categories = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const ref = useRef();

  const handleClick = (category) => {
    setActiveCategory(category);
  };

  const handleWheel = (event) => {
    event.preventDefault();
    ref.current.scrollLeft += event.deltaY * 3;
  };

  return (
    <nav
      className={styles.categories}
      onWheel={handleWheel}
      onDrag={handleWheel}
      ref={ref}
    >
      <ul className={styles.list}>
        {categories.map((category, index) => (
          <li
            key={index}
            className={`${styles.categoriesBtn} ${
              activeCategory === category ? styles.active : ""
            }`}
          >
            <Link
              // href={`/category/${category}`}
              href={"/"}
              onClick={() => handleClick(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Categories;
