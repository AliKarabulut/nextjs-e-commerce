"use client";
import Image from "next/image";
import styles from "./singleImageCard.module.css";

const SingleImageCard = ({ image, title }) => {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.bigImage}>
        <Image
          src={image}
          alt={title}
          fill={true}
          sizes="(width: 100%) (height: 100%)"
          style={{ objectFit: "contain", padding: "20px" }}
        />
      </div>
      <div className={styles.smallImage}>
        <Image
          src={image}
          alt={title}
          style={{ objectFit: "contain", padding: "20px" }}
          fill={true}
          sizes="(width: 100%) (height: 100%)"
        />
      </div>
    </div>
  );
};
export default SingleImageCard;
