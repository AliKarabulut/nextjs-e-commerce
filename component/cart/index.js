import { AiOutlineDelete } from "react-icons/ai";
import { BsFileMinus, BsFilePlus } from "react-icons/bs";
import styles from "./cart.module.css";
import Image from "next/image";

const getData = async (id) => {
  const response = await fetch("https://fakestoreapi.com/products/" + id);
  const data = await response.json();
  return data;
};

const Cart = async ({ cart }) => {
  return cart.products.map(async (e, index) => {
    const product = await getData(e.productId);
    return (
      <div className={styles.cartWrapper}>
        <div className={styles.imageContainer}>
          <Image
            src={product.image}
            alt={product.title}
            fill={true}
            sizes="(width: 100%) (height: 100%)"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.quantityWrapper}>
          <BsFileMinus />
          <div>
            <input className={styles.quantity} value={e.quantity} />
          </div>
          <BsFilePlus />
        </div>
        <div className={styles.totalPrice}>{product.price}</div>
        <AiOutlineDelete />
      </div>
    );
  });
};
export default Cart;
