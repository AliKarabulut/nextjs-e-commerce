import styles from "./login.module.css"; 

const Layout = ({ children }) => {
    return (
      <form action="" className={styles.loginForm}>
        <div className={styles.formLayout}>
          <h1>E-Commerce</h1>
          <p>Giriş yap ya da kaydol, fırsatlardan haberdar ol! </p>
        </div>
        {children}
      </form>

    );
  };
  export default Layout;
  