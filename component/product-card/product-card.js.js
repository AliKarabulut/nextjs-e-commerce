import Star from "../star";
import styles from "./product.module.css";

const ProductCard = ({ products }) => {
  const rate = products.rating.rate;

  return (
    <div className={styles.productCard}>
      <div>
        {" "}
        <img src={products.image} alt="" />
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
  );
};

export default ProductCard;
