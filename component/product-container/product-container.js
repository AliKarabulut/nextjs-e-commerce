import styles from "./product-container.module.css";

const ProductContainer = ({ children }) => {
  return <div className={styles.productContainer}>{children}</div>;
};
export default ProductContainer;
