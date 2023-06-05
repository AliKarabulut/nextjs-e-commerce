import ProductCard from "@/component/product-card/product-card.js";
import ProductContainer from "@/component/product-container/product-container";

const getData = async () => {
  try {
    const data = await fetch("https://fakestoreapi.com/products");
    return data.json();
  } catch (error) {
    throw new Error("Similar products could not be fetched!");
  }
};

const MainPage = async (props) => {
  const products = await getData();
  return (
    <ProductContainer>
      {products.map((e) => {
        return <ProductCard products={e} />;
      })}
    </ProductContainer>
  );
};

export default MainPage;
