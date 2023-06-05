import ForgotForm from "@/component/formComponents/forgotForm";
import styles from "../login.module.css";
const ForgotPassword = () => {
  return (
    <div className={styles.formWrapper}>
      <div className={styles.formHeader}>
        <h1>E-Commerce</h1>
        <p>Giriş yap ya da kaydol, fırsatlardan haberdar ol! </p>
      </div>
      <ForgotForm/>
    </div>
  );
};
export default ForgotPassword;
