import Image from "next/image";
import styles from "./orders.module.css";

const Orders = ({ order }) => {
  return (
    <div className={styles.order}>
      <p className={styles.orderDate}>{order.date}</p>
      <div className={styles.orderCard} key={order.productid}>
        <Image src={order.image} alt={order.title} width={64} height={64} />
        <p className={styles.orderQuantity}>{order.quantity} adet</p>
        <h3 className={styles.orderTitle}>{order.title}</h3>
      </div>
    </div>
  );
};

export default Orders;
