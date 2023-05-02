"use client";
import React, { useState } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import styles from "./Login.module.css";

function LoginButton() {
  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };

  const handleMouseLeave = () => {
    setShowOptions(false);
  };

  return (
    <div className={styles.navLinks}>
      <Link
        href="/giris"
        className={styles.navLink}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <FaUser /> <span>Giriş Yap</span>
        {showOptions && (
          <div className={styles.loginOptions}>
            <Link href="/login" className={styles.optionButton}>
              Giriş yap
            </Link>
            <Link href="/" className={styles.optionButton}>
              Kayıt ol
            </Link>
          </div>
        )}
      </Link>

      <Link href="/sepetim" className={styles.navLink}>
        <FaShoppingCart /> <span>Sepetim</span>
      </Link>
    </div>
  );
}

export default LoginButton;
