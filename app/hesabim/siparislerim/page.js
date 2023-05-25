// "use client";
import Orders from "@/component/orders";
import { store } from "@/stores";


const Sepet = async () => {
  
  const sepet = store.getState().cart.cart;
  return (
    <div>
      {sepet.map((e) => {
        return <Orders order={e} />;
      })}
    </div>
  );
};
export default Sepet;
