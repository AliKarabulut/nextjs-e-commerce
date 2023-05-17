import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>Tüm hakları saklıdır.</div>
      <div>
        <Image src="/githubqrcode.JPG" alt="GitHub" width="64" height="64" />
      </div>
    </div>
  );
};

export default Footer;
