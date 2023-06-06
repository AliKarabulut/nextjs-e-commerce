"use client";
import Orders from "@/component/orders";
import { useSelector } from "react-redux";

const Sepet = async () => {
  const sepet = useSelector((state) => state.cart.cart);
  console.log(sepet)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      {/* {sepet.map((e, index) => {
        return <Orders order={e} key={index} />;
      })} */}
    </div>
  );
};
export default Sepet;
