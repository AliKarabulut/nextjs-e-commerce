"use client";
import React, { useState } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import styles from "./Login.module.css";
import { useSelector } from "react-redux";
import { AiOutlineUser } from "react-icons/ai";
import { BiBasket } from "react-icons/bi";
import { VscSignOut } from "react-icons/vsc";

function LoginButton() {
  const  {profile}  = useSelector((state) => state.profile);
  const [showOptions, setShowOptions] = useState(false);
  console.log(profile);
  const handleMouseEnter = () => {
    setShowOptions(true);
  };

  const handleMouseLeave = () => {
    setShowOptions(false);
  };

  return (
    <div className={styles.navLinks}>
      {Object.keys(profile).length < 1 && (
        <Link
          href="/login"
          className={styles.navLink}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaUser /> <span>Login</span>
          {showOptions && (
            <div className={styles.options}>
              <Link href="/login" className={styles.loginOptionButton}>
                Login
              </Link>
              <Link href="/register" className={styles.loginOptionButton}>
                Register
              </Link>
            </div>
          )}
        </Link>
      )}
      {Object.keys(profile).length >= 1 && (
        <Link
          href="/account"
          className={styles.navLink}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaUser /> <span>My Account</span>
          {showOptions && (
            <div className={styles.options}>
              <div className={styles.name}>{profile.username}</div>
              <Link href="/account" className={styles.accountOptionButton}>
                <AiOutlineUser /> Account
              </Link>
              <Link href="/order" className={styles.accountOptionButton}>
                <BiBasket /> Order
              </Link>
              <Link href="/register" className={styles.accountOptionButton}>
                <VscSignOut /> Sign Out
              </Link>
            </div>
          )}
        </Link>
      )}

      <Link href="/cart" className={styles.navLink}>
        <FaShoppingCart /> <span>Cart</span>
      </Link>
    </div>
  );
}

export default LoginButton;
