"use client";
import Carts from "@/component/cart";
import { store } from "@/stores";

import { Fragment } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const {cart} = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <Fragment>
      {cart.length === 0 ? (
        <div>Sepetiniz boş</div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          {cart.products?.map((e) => {
            return <Carts cart={e} id={cart.id} />;
          })}
        </div>
      )}
    </Fragment>
  );
};
export default Cart;
