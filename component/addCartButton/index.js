"use client";
import { useDispatch, useSelector } from "react-redux";
import styles from "./addCartButton.module.css";
import { updateShoppingCart } from "@/stores/user-cart";

const AddCartButton = ({ productId }) => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profile);

  const addProductHandler = async () => {
    if (profile.id) {
      dispatch(
        updateShoppingCart({
          id: profile.id,
          productId: productId,
          quantity: 1,
        })
      );
    } else {
      router.push("/login");
    }
  };

  return (
    <button className={styles.addButton} onClick={() => addProductHandler()}>
      Sepete Ekle
    </button>
  );
};
export default AddCartButton;
