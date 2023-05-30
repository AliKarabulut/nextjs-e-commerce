import { Fragment } from "react";
import LoginForm from "@/component/formComponents/loginForm";
import Link from "next/link";
import styles from "../../login.module.css";

const Login = () => {
  return (
    <Fragment>
      <LoginForm />
      <div className={styles.seperator}>
        <hr className={styles.line} />
        <span>Ya da</span>
        <hr className={styles.line} />
      </div>
      <Link href="/" className={styles.googleButton}>
        Google ile giriş yap
      </Link>
    </Fragment>
  );
};

export default Login;
