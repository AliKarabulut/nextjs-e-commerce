"use client";
import { AiOutlineDelete } from "react-icons/ai";
import { BsFileMinus, BsFilePlus } from "react-icons/bs";
import Image from "next/image";
import { useEffect, useState } from "react";
import { addShoppingCart } from "@/stores/user-cart";
import { store } from "@/stores";
import styles from "./cart.module.css";

const Carts =  ({ cart, id }) => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(cart.quantity);

  useEffect(() => {
    const getData = async (id) => {
      const response = await fetch("https://fakestoreapi.com/products/" + id);
      const data = await response.json();
      setProduct(data);
    };

    getData(cart.productId);
  }, [cart]);

  const minusHandler = () => {
    setQuantity(quantity - 1);
    store.dispatch(
      addShoppingCart({
        id: id,
        productId: cart.productId,
        quantity: quantity,
      })
    );
  };
  const plusHandler = () => {
    
    setQuantity(quantity + 1);
    store.dispatch(
      addShoppingCart({
        id: id,
        productId: cart.productId,
        quantity: quantity,
      })
    );
  };
  const inputHandler = async () => {
    store.dispatch(
      addShoppingCart({
        id: id,
        productId: cart.productId,
        quantity: quantity,
      })
    );
  };
  if (!cart || !product) {
    return null; // Render null or a loading spinner if cart or product data is missing
  }

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
        <BsFileMinus onClick={minusHandler} />
        <div>
          <input
            className={styles.quantity}
            value={quantity}
            onChange={inputHandler}
          />
        </div>
        <BsFilePlus onClick={plusHandler} />
      </div>
      <div className={styles.totalPrice}>{product.price}</div>
      <AiOutlineDelete />
    </div>
  );
};
export default Carts;