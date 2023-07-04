"use client";
import React, { useEffect, useState } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineUser } from "react-icons/ai";
import { BiBasket } from "react-icons/bi";
import { VscSignOut } from "react-icons/vsc";
import { actions as userActions } from "@/stores/user-profile";
import { actions as cartActions } from "@/stores/user-cart";
import styles from "./Login.module.css";

function LoginButton() {
  const router = useRouter()
  const { profile } = useSelector((state) => state.profile);
  const [showOptions, setShowOptions] = useState(false);
  const [successful, setSuccessful] = useState(false);

  useEffect(() => {
    profile.id ? setSuccessful(true) : setSuccessful(false);
  }, [profile]);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(userActions.deleteUser());
    dispatch(cartActions.deleteCart());
  };

  const handleMouseEnter = () => {
    setShowOptions(true);
  };

  const handleMouseLeave = () => {
    setShowOptions(false);
  };

  return (
    <div className={styles.navLinks}>
      {!successful && (
        <div
          onClick={() => router.push("/login")}
          className={styles.navLink}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaUser /> <span>Login</span>
          {showOptions && (
            <div className={styles.options}>
              <Link href="/login" prefetch={false} className={styles.loginOptionButton}>
                Login
              </Link>
              <Link href="/register" prefetch={false} className={styles.loginOptionButton}>
                Register
              </Link>
            </div>
          )}
        </div>
      )}
      {successful && (
        <div
          onClick={() => router.push("/account")}
          className={styles.navLink}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaUser /> <span>Account</span>
          {showOptions && (
            <div className={styles.options}>
              <div className={styles.name}>{profile.username}</div>
              <Link href="/account" prefetch={false} className={styles.accountOptionButton} >
                <AiOutlineUser /> Account
              </Link>
              <Link
                href="/account/order"
                prefetch={false}
                className={styles.accountOptionButton}
              >
                <BiBasket /> Order
              </Link>
              <Link
                href="/logout"
                prefetch={false}
                className={styles.accountOptionButton}
                onClick={logoutHandler}

              >
                <VscSignOut /> Sign Out
              </Link>
            </div>
          )}
        </div>
      )}

      <Link href="/cart" className={styles.navLink}>
        <FaShoppingCart /> <span>Cart</span>
      </Link>
    </div>
  );
}

export default LoginButton;
