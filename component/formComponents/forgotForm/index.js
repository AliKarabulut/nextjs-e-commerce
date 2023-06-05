import Link from "next/link";
import { CiMail } from "react-icons/ci";
import styles from "../form.module.css";
const ForgotForm = (props) => {
  return (
    <form action="" className={styles.form}>
      <div className={styles.inputcontainer}>
        <div className={styles.logResInput}>
          <label htmlFor="email">Email</label>
          <CiMail />
          <input placeholder="mail@mail.com" type="text" id="email"></input>
        </div>
      </div>
      <Link href="/" className={styles.submitButton}>
        Mail gönder
      </Link>
    </form>
  );
};
export default ForgotForm;
