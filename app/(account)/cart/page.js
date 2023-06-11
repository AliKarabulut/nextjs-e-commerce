import Carts from "@/component/cart";
import { store } from "@/stores";
import { cookies } from "next/headers";
import { Fragment } from "react";
import { shoppingCart } from "@/stores/user-cart";


const getData = async (id) => {
  const response = await fetch("https://fakestoreapi.com/carts/user/" + id);
  const data = await response.json();
  return data;
};

const Cart = async () => {
  const cookieStore = cookies();
  const id = cookieStore.get("id");
  if(id){
    await store.dispatch(shoppingCart(id.value));
  }
  const {cart} = store.getState().cart
  console.log(cart)
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
          <Carts cart={cart[0]} />
        </div>
      )}
    </Fragment>
  );
};
export default Cart;
