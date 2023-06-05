import ProductCard from "@/component/product-card/product-card.js";
import ProductContainer from "@/component/product-container/product-container";
// import { getCategoryProduct } from "../api/categoryProducts/[category]/route";

export const dynamicParams = false;
export const revalidate = 600;
export const dynamic = "force-static";

export const generateStaticParams = async () => {
  const categories = await fetch(
    "https://fakestoreapi.com/products/categories"
  );
  const data = await categories.json();
  return data.map((categories) => ({
    category: categories,
  }));
};

const Category = async ({ params: { category } }) => {
  const products = await fetch(
    "https://fakestoreapi.com/products/category/" + category
  );
  const data = await products.json();
  return (
    <ProductContainer>
      {data.map((e) => {
        return <ProductCard products={e} />;
      })}
    </ProductContainer>
  );
};

export default Category;
