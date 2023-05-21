"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import styles from "../styles/Notfound.module.css";

const NotFound = (props) => {

  const [count, setCount] = useState(4);
  const router = useRouter()

  useEffect(() => {
    if (count === 0) {
      router.push("/");
      return
    }
  
    const timer = setTimeout(() => {
      setCount((prevCount) => prevCount - 1);
      console.log("ananan")
    }, 1000);
  
    return () => clearTimeout(timer);
  }, [count, router]);
  

  return (
    <div className={styles.error}>
      <div className={styles.errorWrapper}>
        <div className={styles.oh}>
          OH! <span className={styles.triangle}></span>
        </div>
        <div className={styles.errorContainer}>
          <div className={styles.clip}>
            <div className={styles.number}>{count}</div>
          </div>
          <div className={styles.zeroContainer}>
            <div className={styles.shadow}></div>
            <div className={styles.clip}>
              <div className={styles.number}>0</div>
            </div>
          </div>
          <div className={styles.clip}>
            <div className={styles.number}>{count}</div>
          </div>
        </div>
      </div>
      <div className={styles.msg}> Aradığınız sayfayı bulamadık! </div>
    </div>
  );
};
export default NotFound;
