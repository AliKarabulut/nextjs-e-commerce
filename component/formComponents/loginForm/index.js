"use client";
import Link from "next/link";

import { CiMail, CiLock } from "react-icons/ci";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "@/stores/auth";
import Loader from "@/component/loader";
import { useRouter } from "next/navigation";
import styles from "../form.module.css";

const LoginForm = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const dispatch = useDispatch();
  const router = useRouter();

  const { pending } = useSelector((state) => state.auth);
  const { error } = useSelector((state) => state.auth);


  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    dispatch(fetchUser({ username: email, password: password }));
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <div>
        <div className={styles.logResInput}>
          <label htmlFor="email">Email</label>
          <CiMail />
          <input
            placeholder="mail@mail.com"
            type="text"
            id="email"
            ref={emailRef}
          ></input>
        </div>
        <div className={styles.logResInput}>
          <label htmlFor="password">Password</label>
          <CiLock />
          <input
            placeholder="Password"
            type="password"
            id="password"
            ref={passwordRef}
          ></input>
        </div>
      </div>
      <Link href="/forgotpassword" className={styles.passwordForget}>
        Şifremi unuttum
      </Link>
      <button type="submit" className={styles.submitButton}>
        {error ? error : "Login"}
      </button>
      {pending && <Loader />}
    </form>
  );
};
export default LoginForm;
