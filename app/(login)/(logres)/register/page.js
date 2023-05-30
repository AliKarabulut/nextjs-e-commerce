import RegisterForm from "@/component/formComponents/registerForm";
import Link from "next/link";
import styles from "../../login.module.css";
import { Fragment } from "react";

const Register = (props) => {
  return (
    <Fragment>
      <RegisterForm />
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
