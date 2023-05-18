import ProductCard from "@/component/product-card/product-card.js";
import { getAllCategories, getCategoryProduct } from "../api/fake-store-api";
import ProductContainer from "@/component/product-container/product-container";

export const generateStaticParams = async () => {
  const categories = await getAllCategories();
  return categories.map((categories) => ({
    id: {
      category: categories,
    },
  }));
};

const Category = async ({ params: { category } }) => {
  const products = await getCategoryProduct(category);

  return (
    <ProductContainer>
      {products.map((e) => {
        return <ProductCard products={e} />;
      })}
    </ProductContainer>
  );
};

export default Category;
