
import { getSingleProduct } from "@/app/api/singleProducts/route";
import styles from "./singleProduct.module.css";

const SingleProductPage = async ({ params: { id } }) => {
  const product = await getSingleProduct(id);
  return <div>{product.title}</div>;
};

export default SingleProductPage;
