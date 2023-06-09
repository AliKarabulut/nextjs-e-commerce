"use client";
import Link from "next/link";
import { AiOutlineDelete } from "react-icons/ai";
import { BsFileMinus, BsFilePlus } from "react-icons/bs";
import Image from "next/image";
import { useEffect, useState } from "react";
import { updateShoppingCart } from "@/stores/user-cart";
import styles from "./cart.module.css";
import { useDispatch, useSelector } from "react-redux";

const Carts = async ({ cart, id }) => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(cart.quantity);
  const [firtsRender, setFirstRender] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async (id) => {
      const response = await fetch("https://fakestoreapi.com/products/" + id);
      const data = await response.json();
      setProduct(data);
    };

    getData(cart.productId);
  }, [cart]);

  // useEffect(() => {
  //   if (firtsRender) {
  //     console.log("addShoppingCart");
  //     dispatch(
  //       updateShoppingCart({
  //         id: id,
  //         productId: cart.productId,
  //         quantity: quantity,
  //       })
  //     );
  //   }
  //   setFirstRender(true);
  // }, [quantity]);

  const minusHandler = () => {
    if (quantity === 1) {
      return;
    } else {
      setQuantity((pre) => pre - 1);
    }
  };

  const plusHandler = () => {
    setQuantity((pre) => pre + 1);
  };

  const inputHandler = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity((pre) => pre - newQuantity);
  };

  if (!cart || !product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.cartWrapper}>
      <Link
        href={`/${product.category}/${product.id}`}
        className={styles.imageContainer}
      >
        <Image
          src={product.image}
          alt={product.title}
          fill={true}
          sizes="(width: 100%) (height: 100%)"
          style={{ objectFit: "contain" }}
        />
      </Link>
      <Link
        href={`/${product.category}/${product.id}`}
        className={styles.title}
      >
        {product.title}
      </Link>
      <div className={styles.quantityWrapper}>
        <BsFileMinus onClick={minusHandler} />
        <input
          type="number"
          min={1}
          className={styles.quantity}
          value={quantity}
          onChange={inputHandler}
        />
        <BsFilePlus onClick={plusHandler} />
      </div>
      <div className={styles.totalPrice}>{product.price}</div>
      <AiOutlineDelete className={styles.delete} />
    </div>
  );
};
export default Carts;
