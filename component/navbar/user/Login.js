"use client";
import React, { useState } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import styles from "./Login.module.css";
import { useSelector } from "react-redux";

function LoginButton() {
  const { profile } = useSelector((state) => state.profile);
  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };

  const handleMouseLeave = () => {
    setShowOptions(false);
  };

  return (
    <div className={styles.navLinks}>
      {!profile && (
        <Link
          href="/login"
          className={styles.navLink}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaUser /> <span>Giriş Yap</span>
          {showOptions && (
            <div className={styles.loginOptions}>
              <Link href="/login" className={styles.optionButton}>
                Login
              </Link>
              <Link href="/register" className={styles.optionButton}>
                Register
              </Link>
            </div>
          )}
        </Link>
      )}
      {profile && (
        <Link
          href="/myaccount"
          className={styles.navLink}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaUser /> <span>My Account</span>
          {showOptions && (
            <div className={styles.loginOptions}>
              <div>{profile.username}</div>
              <Link href="/account" className={styles.optionButton}>
                Account
              </Link>
              <Link href="/order" className={styles.optionButton}>
                Order
              </Link>
              <Link href="/register" className={styles.optionButton}>
                Sign Out
              </Link>
            </div>
          )}
        </Link>
      )}

      <Link href="/hesabim/sepet" className={styles.navLink}>
        <FaShoppingCart /> <span>Sepetim</span>
      </Link>
    </div>
  );
}

export default LoginButton;
