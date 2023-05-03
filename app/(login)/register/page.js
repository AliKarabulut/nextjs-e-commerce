"use client";

import Link from "next/link";
import { Fragment, useRef, useState } from "react";
import { CiMail, CiLock } from "react-icons/ci";
import styles from "../login.module.css";

const Register = (props) => {
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);
  const [inputClick, setinputClick] = useState(false);

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[\W_]/;

    const uppercaseCount = (value.match(uppercaseRegex) || []).length
      ? true
      : false;
    const lowercaseCount = (value.match(lowercaseRegex) || []).length
      ? true
      : false;
    const numberCount = (value.match(numberRegex) || []).length ? true : false;
    const specialCharCount = (value.match(specialCharRegex) || []).length
      ? true
      : false;

    const hasUppercase = uppercaseCount > 0;
    const hasLowercase = lowercaseCount > 0;
    const hasNumber = numberCount > 0;
    const hasSpecialChar = specialCharCount > 0;

    const totalCount = hasUppercase + hasLowercase + hasNumber + hasSpecialChar;
    const strength = Math.floor((totalCount / 4) * 100);

    setPassword(value);
    setPasswordStrength(strength);
    setHasUppercase(uppercaseCount);
    setHasLowercase(lowercaseCount);
    setHasNumber(numberCount);
    setHasSpecialChar(specialCharCount);
  };

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
          <input
            placeholder="Password"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            onFocus={() => setinputClick(true)}
            onBlur={() => setinputClick(false)}
          ></input>
        </div>
        <div
          className={styles.passwordStrength}
          style={{ width: `${passwordStrength}%` }}
        />
      </div>
      {inputClick && (
        <div className={styles.checker}>
          {(hasUppercase && hasLowercase && hasNumber && hasSpecialChar) || (
            <span>Şifre şunları içermelidir: </span>
          )}
          <span>{hasUppercase ? null : "Büyük harf, "}</span>
          <span>{hasLowercase ? null : "Küçük harf, "}</span>
          <span>{hasNumber ? null : "Sayı, "}</span>
          <span>{hasSpecialChar ? null : "Özel karakter "}</span>
        </div>
      )}
      <button
        className={styles.formButton}
        disabled={
          !hasUppercase || !hasLowercase || !hasNumber || !hasSpecialChar
        }
      >
        Kayıt ol
      </button>
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
