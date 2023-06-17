"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { TbArrowsSort } from "react-icons/tb";
import styles from "./sortProducts.module.css";

const SortProducts = () => {
  const path = usePathname();
  const searchParams = useSearchParams()
  const [pathName, setPathName] = useState("");

  const [sorter, setSorter] = useState("Suggested order");
  const [showOptions, setShowOptions] = useState(false);
  const wrapperRef = useRef(null);

  

  useEffect(() => {
    if (searchParams.get("s")) {
      setPathName(path +"?s="+ searchParams.get("s") +"&");
    } else {
      setPathName(path +"?" );
    }
  }, [searchParams, path]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={styles.selectWrapper}
      ref={wrapperRef}
      onClick={() => setShowOptions(true)}
    >
      <div className={styles.selectedOptions}>
        {sorter}
        <TbArrowsSort></TbArrowsSort>
      </div>
      {showOptions && (
        <ul className={styles.sortOptions}>
          <li>
            <Link
              href={pathName}
              prefetch={false}
              onClick={() => setSorter("Suggested order")}
            >
              Suggested order
            </Link>
          </li>
          <li>
            <Link
              href={pathName + "sort=asc"}
              prefetch={false}
              onClick={() => setSorter("Ascending by id")}
            >
              Ascending by id
            </Link>
          </li>
          <li>
            <Link
              href={pathName + "sort=desc"}
              prefetch={false}
              onClick={() => setSorter("Descending by id")}
            >
              Descending by id
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};
export default SortProducts;
