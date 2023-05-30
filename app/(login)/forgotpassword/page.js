import Link from "next/link";
import { CiMail } from "react-icons/ci";
import styles from "../login.module.css";

const ForgotPassword = () => {
  return (
    <form action="" className={styles.formWrapper}>
      <div className={styles.formHeader}>
        <h1>E-Commerce</h1>
        <p>Şifreni değiştirmek için mailine ihtiyacımız var </p>
      </div>
      <div className={styles.inputcontainer}>
        <div className={styles.logResInput}>
          <label htmlFor="email">Email</label>
          <CiMail />
          <input placeholder="mail@mail.com" type="text" id="email"></input>
        </div>
      </div>
      <Link href="/" className={styles.formButton}>
        Mail gönder
      </Link>
    </form>
  );
};
export default ForgotPassword;
