import Carts from "@/component/cart";
import { store } from "@/stores";
import { cookies } from "next/headers";
import { Fragment } from "react";
import { getShoppingCart } from "@/stores/user-cart";

const Cart = async () => {
  const cookieStore = cookies();
  const id = cookieStore.get("id");
  if (id) {
    await store.dispatch(getShoppingCart(id.value));
  }
  const { cart } = store.getState().cart;
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
          {cart.products.map((e) => {
            return <Carts cart={e} id={cart.id} />;
          })}
        </div>
      )}
    </Fragment>
  );
};
export default Cart;
