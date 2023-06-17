import Orders from "@/component/orders";
import { cookies } from "next/headers";

const getData = async (id) => {
  const response = await fetch("https://fakestoreapi.com/carts/user/" + id);
  const data = await response.json();
  return data;
};

const Order = async () => {
  const cookieStore = cookies();
  const id = cookieStore.get("id");
  if (id) {
    const cart = await getData(id.value);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        {cart.map((e) => {
          return <Orders order={e} />;
        })}
      </div>
    );
  } else {
    return <div>No order found </div>;
  }
};
export default Order;
