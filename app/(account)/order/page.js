"use client";
import Orders from "@/component/orders";
import { useSelector } from "react-redux";

const Siparis = async () => {
  const sepet = useSelector((state) => state.cart);
  console.log(sepet);
  return (
    <div style={{ display: "flex", flexDirection: "column" , alignItems: "center", width: "100%"}}>
      {/* {sepet.map((e) => {
        return <Orders order={e} />;
      })} */}
    </div>
  );
};
export default Siparis;
