import Link from "next/link";
import Star from "../star";
import styles from "./product.module.css";
import Image from "next/image";

const ProductCard = ({ products }) => {
  const rate = products.rating.rate;

  return (
    <Link href={`/${products.category}/${products.id}`}>
      <div className={styles.productCard}>
        <div className={styles.imageTitleContainer}>
          {" "}
          <div className={styles.imageContainer}>
            {" "}
            <Image
              src={products.image}
              alt={products.title}
              fill={true}
              sizes="(width: 100%) (height: 100%)"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className={styles.title}>
            {products.title.length > 30
              ? products.title.substring(0, 30) + "..."
              : products.title}
          </div>
        </div>
        <div>
          {" "}
          <div className={styles.rating}>
            <Star rate={rate} />{" "}
            <div className={styles.count}>({products.rating.count})</div>
          </div>
          <div className={styles.price}>{products.price}$ </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
