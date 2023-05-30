"use client";
import { useRouter } from "next/navigation";
import { CiMail, CiLock } from "react-icons/ci";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "@/stores/auth";
import Loader from "@/component/loader";
import styles from "../form.module.css";

const LoginForm = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const dispatch = useDispatch();
  const router = useRouter();

  const pending = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);
  const success = useSelector((state) => state.user.success);



  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    dispatch(fetchUser({ username: email, password: password }));
  };

  if (success) {
    router.replace("/");
  }

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
      <button href="/forgotpassword" className={styles.passwordForget}>
        Şifremi unuttum
      </button>
      <button type="submit" className={styles.formButton}>
        {error ? error : "Login"}
      </button>
      {pending && <Loader />}
    </form>
  );
};
export default LoginForm;
