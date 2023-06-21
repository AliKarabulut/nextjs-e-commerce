"use client";
import Link from "next/link";
import { Fragment, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "./account.module.css";
import { useState } from "react";

const AccountLayout = ({ children }) => {
  const { profile } = useSelector((state) => state.profile);
  const [show, setShow] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const wrapperRef = useRef(null);

  const handleToggleSidebar = () => {
    setShow(!show);
    setIsActive(!isActive);
  };

  const handleToggleLinkSidebar = () => {
    setShow(true);
    setIsActive(false);
  };

  const handleClickOutside = (event) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target) &&
      window.innerWidth <= 768
    ) {
      setIsActive(false);
      setShow(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Fragment>
      <div
        ref={wrapperRef}
        className={`${styles.leftBarWrapper} ${isActive ? styles.active : ""}`}
      >
        <div className={styles.leftBarContainer}>
          <section className={styles.accountName}>
            <p>{`${profile.name.firstname} ${profile.name.lastname}`}</p>
          </section>
          <section>
            <h3>Orders</h3>
            <Link href="/account/order" onClick={handleToggleLinkSidebar}>
              Orders
            </Link>
            <Link href="/account/reviews" onClick={handleToggleLinkSidebar}>
              Reviews
            </Link>
          </section>
          <section>
            <h3>Account</h3>
            <Link href="/account/profile" onClick={handleToggleLinkSidebar}>
              Profile
            </Link>
            <Link href="/account/address" onClick={handleToggleLinkSidebar}>
              Address
            </Link>
            <Link href="/account/payment" onClick={handleToggleLinkSidebar}>
              Payment
            </Link>
          </section>
        </div>
        <div onClick={handleToggleSidebar}>
          {show ? <AiOutlineMenu /> : <AiOutlineClose />}
        </div>
      </div>
      <div className={styles.accountContainer}>{children}</div>
    </Fragment>
  );
};

export default AccountLayout;
