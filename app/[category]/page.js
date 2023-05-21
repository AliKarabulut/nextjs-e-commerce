import ProductCard from "@/component/product-card/product-card.js";
import ProductContainer from "@/component/product-container/product-container";
import { getAllCategories } from "../api/allCategories/route";
import { getCategoryProduct } from "../api/categoryProducts/route";

export const dynamicParams = false;
export const revalidate = 600;
export const dynamic = "force-static";

export const generateStaticParams = async () => {
  const categories = await getAllCategories();
  return categories.map((categories) => ({
    category: categories,
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
