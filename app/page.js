import ProductCard from "@/component/product-card/product-card.js";
import ProductContainer from "@/component/product-container/product-container";
import { getAllProduct } from "./api/allProducts/route";

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
