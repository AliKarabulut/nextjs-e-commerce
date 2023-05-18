import Link from "next/link";
import Star from "../star";
import styles from "./product.module.css";
import Image from "next/image";

const ProductCard = ({ products }) => {
  const rate = products.rating.rate;

  return (
    <Link href={`/${products.category}/${products.id}`}>
      <div className={styles.productCard}>
        <div>
          {" "}
          <Image src={products.image} alt={products.title} width="200" height="200" />
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
