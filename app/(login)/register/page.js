"use client";

import Link from "next/link";
import { Fragment } from "react";
import { CiMail, CiLock } from "react-icons/ci";
import styles from "../login.module.css";



const Register = (props) => {
  return (
    <Fragment>
      <div className={styles.inputcontainer}>
        <div className={styles.logResInput}>
          <label htmlFor="email">Email</label>
          <CiMail />
          <input placeholder="mail@mail.com" type="text" id="email"></input>
        </div>
        <div className={styles.logResInput}>
          <label htmlFor="password">Password</label>
          <CiLock />
          <input placeholder="Password" type="password" id="password"></input>
        </div>
      </div>
      <Link href="/" className={styles.formButton}>
        Kayıt ol
      </Link>
      <div className={styles.seperator}>
        <hr className={styles.line} />
        <span>Ya da</span>
        <hr className={styles.line} />
      </div>
      <Link href="/" className={styles.googleButton}>
        Google ile kayıt ol
      </Link>
    </Fragment>
  );
};
export default Register;
