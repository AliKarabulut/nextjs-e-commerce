import ProductCard from "@/component/product-card/product-card.js";
import { getAllProduct } from "./api/fake-store-api";
import styles from "./page.module.css";
import ProductContainer from "@/component/product-container/product-container";

const MainPage = async (props) => {
  const products = await getAllProduct();

  return (
    <ProductContainer>
      {products.map((e) => {
        return <ProductCard products={e} />;
      })}
    </ProductContainer>
  );
};

export default MainPage;
