"use client";

import Link from "next/link";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import styles from "./account.module.css";

const AccountLayout = ({ children }) => {
  const { profile } = useSelector((state) => state.profile);

  return (
    <Fragment>
      <div>
        <div className={styles.leftBarContainer}>
          <section className={styles.accountName}>
            <p>{profile.name.firstname + " " + profile.name.lastname}</p>
          </section>
          <section>
            <h3>Orders</h3>
            <Link href="/account/order">Orders</Link>
            <Link href="/account/reviews">Reviews</Link>
          </section>
          <section>
            <h3>Account</h3>
            <Link href="/account/profile">Profile</Link>
            <Link href="/account/address">Address</Link>
            <Link href="/account/payment">Payment</Link>
          </section>
        </div>
      </div>
      <div className={styles.accountContainer}>{children}</div>
    </Fragment>
  );
};
export default AccountLayout;
