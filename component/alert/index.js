import styles from "./alert.module.css";

const Alert = ({ text, bool }) => {
  const containerClassName = `${styles.alertContainer} ${bool ? styles.green : styles.red}`;

  return (
    <div className={containerClassName}>
      <div className={styles.alertText}>{text}</div>
    </div>
  );
};

export default Alert;