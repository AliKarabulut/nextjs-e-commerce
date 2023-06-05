import { notFound } from "next/navigation";
import ProductContainer from "@/component/product-container/product-container";
import ProductCard from "@/component/product-card/product-card.js";

const getData = async (id) => {
  if (!id) {
    notFound();
  }
  try {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();

    const filteredData = data.filter((product) =>
      product.title.toLowerCase().includes(id.toLowerCase())
    );

    return filteredData;
  } catch (error) {
    throw new Error("Filtered products could not be fetched!");
  }
};

export default async function SearchBar({ searchParams }) {
  const id = searchParams.s;

  if (!searchParams) {
    notFound();
  }
  const filteredProducts = await getData(id);

  return (
    <ProductContainer>
      {filteredProducts.map((e) => {
        return <ProductCard products={e} />;
      })}
    </ProductContainer>
  );
}
