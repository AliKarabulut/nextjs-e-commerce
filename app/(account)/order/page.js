import Orders from "@/component/orders";
import { cookies } from "next/headers";

const getData = async (id) => {
  const response = await fetch("https://fakestoreapi.com/carts/user/"+id);
  const data = await response.json();
  return data;

}

const Siparis = async () => {
  const cookieStore = cookies()
  const cart = await getData(cookieStore.get("id").value)
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
};
export default Siparis;
