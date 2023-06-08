import Image from "next/image";
import styles from "./orders.module.css";
import Button from "../button";
import { Fragment } from "react";

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
        <Button>Order detail</Button>
      </div>

      {order.products.map(async (e, index) => {
        const product = await getData(e.productId);
        return (
          <div className={styles.orderCard}>
            <h3 className={styles.orderTitle}>{product.title}</h3>
            <div className={styles.imageContainer}>
              <Image
                src={product.image}
                alt={product.title}
                fill={true}
                sizes="(width: 100%) (height: 100%)"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className={styles.orderQuantity}>
              Quantity: <b>{order.products[index].quantity}</b>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Orders;
