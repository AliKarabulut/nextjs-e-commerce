import styles from "../login.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.formWrapper}>
      <div className={styles.formHeader}>
        <h1>E-Commerce</h1>
        <p>Giriş yap ya da kaydol, fırsatlardan haberdar ol! </p>
      </div>
      {children}
    </div>
  );
};
export default Layout;
