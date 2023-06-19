import Image from "next/image";
import styles from "./orders.module.css";
import Link from "next/link";

const getData = async (id) => {
  const response = await fetch("https://fakestoreapi.com/products/" + id);
  const data = await response.json();
  return data;
};
const Orders = async ({ order }) => {
  return (
    <div className={styles.order}>
      <div className={styles.detailContainer}>
        <div className={styles.date}>
          <b>Date: </b>
          {new Date(order.date).toLocaleDateString()}
        </div>
        <button className={styles.orderDetailButton}>Order detail</button>
      </div>

      {order.products.map(async (e, index) => {
        const product = await getData(e.productId);
        return (
          <div className={styles.orderCard}>
            <Link href={`/${e.category}/${e.id}`} className={styles.orderTitle}>{product.title}</Link>
            <Link href={`/${e.category}/${e.id}`} className={styles.imageContainer}>
              <Image
                src={product.image}
                alt={product.title}
                fill={true}
                sizes="(width: 100%) (height: 100%)"
                style={{ objectFit: "contain" }}
              />
            </Link>
            <p className={styles.orderQuantity}>
              Quantity: {order.products[index].quantity}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Orders;
