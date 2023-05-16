import ProductCard from "@/component/product-card/product-card.js";
import { getCategoryProduct } from "../api/fake-store-api";
import ProductContainer from "@/component/product-container/product-container";

const Category = async ({ params: {category} }) => {
  const products = await getCategoryProduct(category);
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <ProductContainer>
      {products.map((e) => {
        return <ProductCard products={e} />;
      })}
    </ProductContainer>
  );
};

export default Category;
