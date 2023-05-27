"use client";
import Image from "next/image";
import styles from "./orders.module.css";
import Button from "../button";

const Orders = ({ order }) => {
  return (
    <div className={styles.order}>
      <div className={styles.detailContainer}>
        <div className={styles.date}>
          <div>Order Date</div>
          <b className={styles.orderDate}>{order.date}</b>
        </div>
        <div>
          <div>Amount</div>
          <b className={styles.orderQuantity}>
            {order.quantity * order.price}{" "}
          </b>
        </div>
        <div>
          <div>Quantity</div>
          <b className={styles.orderQuantity}>{order.quantity}</b>
        </div>
        <Button>Order detail</Button>
      </div>
      <div className={styles.orderCard}>
        <h3 className={styles.orderTitle}>{order.title}</h3>
        <div className={styles.imageContainer}>
          <Image
            src={order.image}
            alt={order.title}
            fill={true}
            sizes="(width: 100%) (height: 100%)"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Orders;
