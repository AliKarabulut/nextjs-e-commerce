"use client";

import { store } from "@/stores";
import { getShoppingCart } from "@/stores/user-cart";
import { useSelector } from "react-redux";

const Kalem = async(props) => {
  const asd = useSelector((state) => state.cart);
  console.log(asd)
  // store.dispatch(getShoppingCart(1))
  // console.log(store.getState().cart);
  return <div>asd</div>;
};
export default Kalem;
