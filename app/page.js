import ProductCard from "@/component/product-card/product-card.js";
import getAllProduct from "./api/fake-store-api";
import styles from "./page.module.css";

const MainPage = async (props) => {
  const products = await getAllProduct();

  return (
    <div className={styles.homePageWrapper}>

      {products.map((e) => {
        return <ProductCard products={e} />;
      })}
    </div>
  );
};

export default MainPage;
