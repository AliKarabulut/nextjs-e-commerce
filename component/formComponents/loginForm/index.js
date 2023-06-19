"use client";
import Link from "next/link";

import { CiMail, CiLock } from "react-icons/ci";
import { Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "@/stores/auth";
import Loader from "@/component/loader";

import styles from "../form.module.css";

import { ToastContainer, toast } from "react-toastify";

const LoginForm = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const dispatch = useDispatch();

  const { pending } = useSelector((state) => state.auth);
  const { error } = useSelector((state) => state.auth);
  console.log(error);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    dispatch(fetchUser({ username: email, password: password }))
    // toast.promise(
    //   ,
    //   {
    //     pending: "Promise is pending",
    //     success: "Promise resolved 👌",
    //     error: "Promise rejected 🤯",
    //   }
    // );
  };

  return (
    <Fragment>
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
    </Fragment>
  );
};
export default LoginForm;
